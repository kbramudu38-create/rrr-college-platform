import { NextRequest, NextResponse } from "next/server";
import { readDb, writeDb } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, studentId, department, year, phone, password, college } = body;

  if (!email || !password || !name) {
    return NextResponse.json({ error: "Name, email and password are required." }, { status: 400 });
  }

  const db = await readDb();
  const exists = db.users.some((user: any) => user.email.toLowerCase() === String(email).toLowerCase());
  if (exists) {
    return NextResponse.json({ error: "User already exists." }, { status: 409 });
  }

  const newUser = {
    id: `user_${Date.now()}`,
    name,
    email,
    studentId: studentId || "",
    department: department || "CSE",
    year: year || "2nd Year",
    phone: phone || "",
    password,
    college: college || "RGUKT Basar",
    verificationStatus: String(email).includes("rgukt") ? "Verified" : "Verification Required",
    createdAt: new Date().toISOString(),
  };

  db.users.push(newUser);
  await writeDb(db);

  return NextResponse.json({ user: { ...newUser } });
}
