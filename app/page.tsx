"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    studentId: "",
    department: "CSE",
    year: "2nd Year",
    phone: "",
    password: "",
    college: "RGUKT Basar",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/signup";

    const payload = mode === "login" ? { email: form.email, password: form.password } : form;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error || "Something went wrong");
      return;
    }

    localStorage.setItem("rrr_session", JSON.stringify(data.user));
    setMessage(mode === "login" ? "Logged in successfully" : "Account created successfully");
    router.push("/dashboard");
  };

  return (
    <main className="auth-shell">
      <section className="auth-card large">
        <div className="brand-block">
          <div className="rrr-logo">RRR</div>
          <div>
            <p className="eyebrow">Don’t Buy. Rent. Borrow. Reuse.</p>
            <h1>Welcome to RRR</h1>
            <p>
              A college-only platform for students to rent, borrow, and share useful items safely.
            </p>
          </div>
        </div>

        <div className="toggle-row">
          <button className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}>
            Login
          </button>
          <button className={mode === "signup" ? "active" : ""} onClick={() => setMode("signup")}>
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="stack-form">
          {mode === "signup" && (
            <>
              <input
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                placeholder="College email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                placeholder="Student ID / Roll Number"
                value={form.studentId}
                onChange={(e) => setForm({ ...form, studentId: e.target.value })}
              />
              <div className="two-col">
                <select value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })}>
                  <option>CSE</option>
                  <option>ECE</option>
                  <option>MECH</option>
                  <option>EEE</option>
                  <option>CIVIL</option>
                </select>
                <select value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })}>
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              </div>
              <input
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <input
                placeholder="Password"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </>
          )}

          {mode === "login" && (
            <>
              <input
                placeholder="College email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                placeholder="Password"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </>
          )}

          {message && <div className="status-pill">{message}</div>}
          <button className="primary-btn" type="submit">
            {mode === "login" ? "Login to RRR" : "Create Account"}
          </button>
        </form>
      </section>
    </main>
  );
}
