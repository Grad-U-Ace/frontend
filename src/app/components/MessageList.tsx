"use client";

import { olshopAtom, productAtom } from "@/atoms";
import { ecommerceData } from "@/data";
import { useAtom } from "jotai";
import { columns } from "../messages/columns";
import { DataTable } from "../messages/data-table";

interface Message {
  id: string;
  customerName: string;
  message: string;
  time: string;
}

interface Product {
  id: string;
  messages: Message[];
}

export default function MessageList({ id }: { id: string }) {
  const [olshop, setOlshop] = useAtom(olshopAtom);
  const [productID, setProductID] = useAtom(productAtom);

  // Find the store based on olshop
  const store = ecommerceData.stores.find((store) => store.name === olshop);

  if (!store) {
    return <div>Store not found</div>;
  }

  // Find the product based on id
  const product = store.products.find((product) => product.id === id);

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
