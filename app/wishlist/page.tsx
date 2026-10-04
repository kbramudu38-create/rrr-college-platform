"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function ItemDetailsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "rent";
  const [item, setItem] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [request, setRequest] = useState({
    startDate: "",
    endDate: "",
    pickupLocation: "College Main Gate",
    note: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("rrr_session");
    if (raw) setUser(JSON.parse(raw));

    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => {
        const selected = (data.items || []).find((entry: any) => entry.id === params.id);
        setItem(selected);
      });
  }, [params.id]);

  const submitRequest = async () => {
    if (!item || !user) {
      setMessage("Please log in");
      return;
    }

    const res = await fetch("/api/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemId: item.id,
        userId: user.id,
        userName: user.name,
        type: mode,
        startDate: request.startDate,
        endDate: request.endDate,
        pickupLocation: request.pickupLocation,
        note: request.note,
      }),
    });

    const data = await res.json();
    setMessage(data.message || "Request submitted successfully");
  };

  if (!item) return <main className="page-shell"><div className="content-card">Loading...</div></main>;

  return (
    <main className="page-shell">
      <div className="detail-layout">
        <div className="content-card">
          <div className="detail-image-wrap">
            <Image src={item.images[0]} alt={item.name} fill className="detail-image" />
          </div>
          <h1>{item.name}</h1>
          <div className="meta-row"><span className="badge">{item.category}</span><span>{item.condition}</span></div>
          <p>{item.description}</p>
          <div className="info-grid">
            <div><strong>Owner:</strong> {item.ownerName}</div>
            <div><strong>Location:</strong> {item.location}</div>
            <div><strong>Price:</strong> ₹{item.price}/day</div>
            <div><strong>Borrow:</strong> {item.borrowAvailable ? "Yes" : "No"}</div>
          </div>
        </div>

        <div className="content-card">
          <h2>{mode === "rent" ? "Rent Request" : "Borrow Request"}</h2>
          <div className="stack-form">
            <input type="date" value={request.startDate} onChange={(e) => setRequest({ ...request, startDate: e.target.value })} />
            <input type="date" value={request.endDate} onChange={(e) => setRequest({ ...request, endDate: e.target.value })} />
            <input value={request.pickupLocation} onChange={(e) => setRequest({ ...request, pickupLocation: e.target.value })} />
            <textarea placeholder="Additional details" value={request.note} onChange={(e) => setRequest({ ...request, note: e.target.value })} />
            <div className="status-pill">College ID verification required before request submission.</div>
            <button className="primary-btn" onClick={submitRequest}>Submit Request</button>
            {message && <div className="status-pill success">{message}</div>}
          </div>
        </div>
      </div>
    </main>
  );
}
