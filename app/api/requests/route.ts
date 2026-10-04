import { NextRequest, NextResponse } from "next/server";
import { readDb, writeDb } from "@/lib/db";

export async function GET() {
  const db = await readDb();
  return NextResponse.json({ items: db.items });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, category, description, ownerId, ownerName, price, location, condition, images, borrowAvailable, qrCode } = body;

  if (!name || !ownerId) {
    return NextResponse.json({ error: "Item name and owner are required." }, { status: 400 });
  }

  const db = await readDb();
  const item = {
    id: `item_${Date.now()}`,
    name,
    category: category || "Other Unused Items",
    description: description || "",
    ownerId,
    ownerName: ownerName || "Owner",
    price: Number(price || 0),
    location: location || "College Main Gate",
    condition: condition || "Like New",
    images: images && images.length ? images : ["https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80"],
    borrowAvailable: Boolean(borrowAvailable),
    qrCode: qrCode || "",
    rating: 4.8,
    createdAt: new Date().toISOString(),
  };

  db.items.push(item);
  await writeDb(db);

  return NextResponse.json({ item, message: "Item posted successfully." });
}
