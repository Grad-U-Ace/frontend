"use client";

import { olshopAtom, productAtom } from "@/atoms";
import { useAtom } from "jotai";
import { columns } from "../messages/columns";
import { DataTable } from "../messages/data-table";
import type { Ecommerce, Message } from "../types";

export default function MessageList({
  id,
  data,
}: {
  id: string;
  data: Ecommerce[];
}) {
  const [olshop] = useAtom(olshopAtom);
  const [productID, setProductID] = useAtom(productAtom);

  console.log(data);

  // Find the store based on olshop
  const store = data.find((store: { name: string }) => store.name === olshop);

  // Find the product based on id
  const product = store?.products.find(
    (product: { id: string | number }) => product.id === id,
  );

  if (!product) {
    return (
      <div className="relative flex aspect-square w-full items-center justify-center rounded-xl border border-zinc-800 bg-zinc-800 text-zinc-300 shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.05)] shadow-white/20 before:absolute before:inset-0 before:shadow-xl before:shadow-zinc-950/60">
        Pilih produk
      </div>
    );
  }

  // Get messages only for the specific product
  const storeData: Message[] = product.messages;

  return (
    <div className="w-full">
      <div className="relative mb-10 flex aspect-video w-full items-center justify-center rounded-xl border border-zinc-800 bg-zinc-800 text-zinc-300 shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.05)] shadow-white/20 before:absolute before:inset-0 before:shadow-xl before:shadow-zinc-950/60">
        {/* Display the product name */}
        <span className="text-xl font-medium">{product.name}</span>
      </div>
      <p className="font-medium text-white">Message List</p>

      <DataTable columns={columns} data={storeData} />
    </div>
  );
}
