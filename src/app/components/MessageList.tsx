"use client";

import { olshopAtom } from "@/atoms";
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

  // Find the store based on olshop
  const store = ecommerceData.stores.find((store) => store.name === olshop);

  if (!store) {
    return <div>Store not found</div>;
  }

  // Find the product based on id
  const product = store.products.find((product) => product.id === id);

  if (!product) {
    return <div>Pilih produk</div>;
  }

  // Get messages only for the specific product
  const storeData: Message[] = product.messages;

  return (
    <div className="w-full">
      <h1>Message List</h1>

      <DataTable columns={columns} data={storeData} />
    </div>
  );
}
