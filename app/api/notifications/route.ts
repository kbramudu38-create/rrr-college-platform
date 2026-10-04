"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const raw = localStorage.getItem("rrr_session");
    setUser(raw ? JSON.parse(raw) : null);
  }, []);

  if (!user) {
    return <main className="page-shell"><div className="content-card">Please log in.</div></main>;
  }

  return (
    <main className="page-shell">
      <div className="content-card narrow">
        <h1>Profile</h1>
        <div className="info-grid">
          <div><strong>Name:</strong> {user.name}</div>
          <div><strong>Email:</strong> {user.email}</div>
          <div><strong>College:</strong> {user.college}</div>
          <div><strong>Department:</strong> {user.department}</div>
          <div><strong>Year:</strong> {user.year}</div>
          <div><strong>Verification:</strong> {user.verificationStatus}</div>
        </div>
      </div>
    </main>
  );
}
