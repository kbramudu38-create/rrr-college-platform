"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [stats, setStats] = useState<any>({});
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/admin")
      .then((res) => res.json())
      .then((data) => {
        setStats(data.stats || {});
        setUsers(data.users || []);
      });
  }, []);

  return (
    <main className="page-shell">
      <div className="content-card">
        <h1>Admin Dashboard</h1>
        <div className="stats-grid">
          <div className="stat-box"><strong>{stats.totalUsers || 0}</strong><span>Total Users</span></div>
          <div className="stat-box"><strong>{stats.totalItems || 0}</strong><span>Total Items</span></div>
          <div className="stat-box"><strong>{stats.activeRentals || 0}</strong><span>Active Rentals</span></div>
          <div className="stat-box"><strong>{stats.completedTransactions || 0}</strong><span>Completed</span></div>
        </div>

        <table className="table-box">
          <thead>
            <tr>
              <th>User</th>
              <th>College</th>
              <th>Verification</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.college}</td>
                <td>{user.verificationStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
