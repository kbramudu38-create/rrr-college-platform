"use client";

import Image from "next/image";
import { useState } from "react";

export default function PostItemPage() {
  const [form, setForm] = useState({
    name: "",
    category: "Electronics",
    description: "",
    condition: "Like New",
    price: "250",
    location: "College Main Gate",
    borrowAvailable: true,
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    ],
    qrCode: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const raw = localStorage.getItem("rrr_session");
    if (!raw) {
      setMessage("Please log in first");
      return;
    }

    const user = JSON.parse(raw);
    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, ownerId: user.id, ownerName: user.name }),
    });

    const data = await res.json();
    setMessage(data.message || "Item posted successfully");
  };

  return (
    <main className="page-shell">
      <div className="content-card narrow">
        <h1>Post Item</h1>
        <form onSubmit={handleSubmit} className="stack-form">
          <input placeholder="Item name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
            <option>Electronics</option>
            <option>Study Materials</option>
            <option>Hostel Items</option>
            <option>Books</option>
            <option>Travel</option>
            <option>Accessories</option>
            <option>Engineering Drawing</option>
            <option>Sports</option>
            <option>Other Unused Items</option>
          </select>
          <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          <div className="two-col">
            <select value={form.condition} onChange={(e) => setForm({ ...form, condition: e.target.value })}>
              <option>New</option>
              <option>Like New</option>
              <option>Good</option>
              <option>Used</option>
              <option>Needs Care</option>
            </select>
            <input type="number" placeholder="Rent price / day" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
          </div>
          <input placeholder="Pickup location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
          <label className="checkline">
            <input type="checkbox" checked={form.borrowAvailable} onChange={(e) => setForm({ ...form, borrowAvailable: e.target.checked })} />
            Borrow Available
          </label>
          <input placeholder="Image URL" value={form.images[0]} onChange={(e) => setForm({ ...form, images: [e.target.value] })} />
          <input placeholder="Owner Payment QR URL (optional)" value={form.qrCode} onChange={(e) => setForm({ ...form, qrCode: e.target.value })} />
          {message && <div className="status-pill">{message}</div>}
          <button className="primary-btn" type="submit">Post Item</button>
        </form>
      </div>
    </main>
  );
}
