"use client";

import { useEffect, useState } from "react";

export default function NotificationsPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/notifications")
      .then((res) => res.json())
      .then((data) => setItems(data.notifications || []));
  }, []);

  return (
    <main className="page-shell">
      <div className="content-card">
        <h1>Notifications</h1>
        <div className="stack-form">
          {items.map((item) => (
            <div key={item.id} className="request-row">
              <div>
                <strong>{item.title}</strong>
                <div className="muted">{item.message}</div>
              </div>
              <small>{item.time}</small>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
