"use client";

import { useEffect, useState } from "react";

export default function RequestsPage() {
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/requests")
      .then((res) => res.json())
      .then((data) => setRequests(data.requests || []));
  }, []);

  const handleDecision = async (id: string, status: string) => {
    const res = await fetch("/api/requests", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    const data = await res.json();
    alert(data.message || "Updated");
    window.location.reload();
  };

  return (
    <main className="page-shell">
      <div className="content-card">
        <h1>My Requests</h1>
        {requests.map((request) => (
          <div key={request.id} className="request-row">
            <div>
              <strong>{request.type}</strong>
              <div>{request.itemName}</div>
              <div className="muted">Status: {request.status}</div>
            </div>
            <div>
              <button className="primary-btn small" onClick={() => handleDecision(request.id, "Accepted")}>Accept</button>
              <button className="secondary-btn small" onClick={() => handleDecision(request.id, "Rejected")}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
