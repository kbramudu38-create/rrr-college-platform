"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  college: string;
  department: string;
  year: string;
  verificationStatus: string;
};

type Item = {
  id: string;
  name: string;
  category: string;
  description: string;
  ownerName: string;
  ownerId: string;
  price: number;
  borrowAvailable: boolean;
  location: string;
  condition: string;
  images: string[];
  rating: number;
};

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("rrr_session");
    if (raw) setUser(JSON.parse(raw));

    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data.items || []))
      .catch(() => setItems([]));
  }, []);

  const filteredItems = useMemo(() => {
    const query = search.toLowerCase();
    return items.filter((item) => {
      return (
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.ownerName.toLowerCase().includes(query)
      );
    });
  }, [items, search]);

  if (!user) {
    return (
      <main className="page-shell">
        <div className="content-card">Please log in to continue.</div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="rrr-logo small">RRR</div>
          <div>
            <strong>{user.college}</strong>
            <div className="muted">College Main Dashboard</div>
          </div>
        </div>

        <nav className="topnav">
          <Link href="/dashboard">Home</Link>
          <Link href="/dashboard">Categories</Link>
          <Link href="/post-item">My Items</Link>
          <Link href="/requests">My Requests</Link>
          <Link href="/wishlist">Wishlist</Link>
          <Link href="/notifications">Notifications</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </header>

      <section className="cover-card">
        <div>
          <p className="eyebrow">Welcome to RRR</p>
          <h1>Find what you need from your college community.</h1>
        </div>
        <div className="searchbox">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search item name, category or location"
          />
        </div>
      </section>

      <section className="category-strip">
        {[
          "Electronics",
          "Study Materials",
          "Hostel Items",
          "Laboratory",
          "Books",
          "Travel",
          "Accessories",
          "Engineering Drawing",
          "Sports",
          "Other Unused Items",
        ].map((category) => (
          <span key={category} className="chip">
            {category}
          </span>
        ))}
      </section>

      <section className="section-head">
        <h2>Available Items</h2>
        <Link href="/post-item" className="primary-btn small">
          + Post Item
        </Link>
      </section>

      <div className="grid-items">
        {filteredItems.map((item) => (
          <article key={item.id} className="item-card">
            <div className="item-image-wrap">
              <Image src={item.images[0]} alt={item.name} fill className="item-image" />
              <button className="wishlist-badge" type="button">
                ♡
              </button>
            </div>

            <div className="item-body">
              <div className="meta-row">
                <span className="badge">{item.category}</span>
                <span className="muted">{item.condition}</span>
              </div>

              <h3>{item.name}</h3>
              <p className="muted">{item.ownerName}</p>

              <div className="price-row">
                <strong>₹{item.price}/day</strong>
                <span>⭐ {item.rating}</span>
              </div>

              <div className="tiny-lines">
                <span>{item.location}</span>
                <span>{item.borrowAvailable ? "Borrow Available" : "Rent only"}</span>
              </div>

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
    </main>
  );
}
