import { NextRequest, NextResponse } from "next/server";
import { readDb, writeDb } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId, action, itemId } = body;

  if (!userId) {
    return NextResponse.json({ error: "User ID required." }, { status: 400 });
  }

  const db = await readDb();

  if (action === "toggle") {
    const exists = db.wishlist[userId]?.includes(itemId);
    if (exists) {
      db.wishlist[userId] = (db.wishlist[userId] || []).filter((id: string) => id !== itemId);
    } else {
      db.wishlist[userId] = [...(db.wishlist[userId] || []), itemId];
    }
    await writeDb(db);
    return NextResponse.json({ success: true, wishlist: db.wishlist[userId] || [] });
  }

  const itemIds = db.wishlist[userId] || [];
  const items = db.items.filter((item: any) => itemIds.includes(item.id));
  return NextResponse.json({ items });
}
