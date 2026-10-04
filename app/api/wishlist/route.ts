import { NextRequest, NextResponse } from "next/server";
import { readDb, writeDb } from "@/lib/db";

export async function GET() {
  const db = await readDb();
  return NextResponse.json({ requests: db.requests });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { itemId, itemName, userId, userName, type, startDate, endDate, pickupLocation, note } = body;

  if (!itemId || !userId || !type) {
    return NextResponse.json({ error: "Request details are incomplete." }, { status: 400 });
  }

  const db = await readDb();
  const request = {
    id: `req_${Date.now()}`,
    itemId,
    itemName: itemName || "Item",
    userId,
    userName: userName || "Student",
    type,
    status: "Pending",
    startDate: startDate || "",
    endDate: endDate || "",
    pickupLocation: pickupLocation || "College Main Gate",
    note: note || "",
    createdAt: new Date().toISOString(),
  };

  db.requests.push(request);
  await writeDb(db);

  return NextResponse.json({ request, message: "Request submitted successfully." });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { id, status } = body;

  const db = await readDb();
  db.requests = db.requests.map((request: any) => (request.id === id ? { ...request, status } : request));
  await writeDb(db);

  return NextResponse.json({ message: "Request updated successfully." });
}
