import { NextRequest, NextResponse } from "next/server";
import { readDb } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const db = await readDb();
  const user = db.users.find((item: any) => item.email.toLowerCase() === String(email).toLowerCase() && item.password === String(password));

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const safeUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    studentId: user.studentId,
    department: user.department,
    year: user.year,
    phone: user.phone,
    college: user.college,
    verificationStatus: user.verificationStatus,
  };

  return NextResponse.json({ user: safeUser });
}
