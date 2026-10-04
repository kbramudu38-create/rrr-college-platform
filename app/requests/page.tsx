"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WishlistPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("rrr_session");
    if (!raw) return;
    const user = JSON.parse(raw);

    fetch("/api/wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.id, action: "get" }),
    })
      .then((res) => res.json())
      .then((data) => setItems(data.items || []));
  }, []);

  return (
    <main className="page-shell">
      <div className="content-card">
        <h1>Wishlist</h1>
        <div className="grid-items compact">
          {items.map((item) => (
            <article key={item.id} className="item-card">
              <div className="item-image-wrap">
                <Image src={item.images[0]} alt={item.name} fill className="item-image" />
              </div>
              <div className="item-body">
                <h3>{item.name}</h3>
                <p>₹{item.price}/day</p>
                <div className="cta-row">
                  <Link href={`/items/${item.id}?mode=rent`} className="primary-btn small">
                    Rent
                  </Link>
                  <Link href={`/items/${item.id}?mode=borrow`} className="secondary-btn small">
                    Borrow
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
