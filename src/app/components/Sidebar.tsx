"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { olshopAtom, productAtom } from "../../atoms";
import type { Ecommerce } from "../types";
import MessageList from "./MessageList";

export default function Sidebar({ data }: { data: Ecommerce[] }) {
  const [value, setValue] = useAtom(olshopAtom);
  const [productID, setProductID] = useAtom(productAtom);

  const getColor = (value: string) => {
    switch (value) {
      case "Tokopedia":
        return "bg-emerald-500 border-emerald-500";
      case "Shopee":
        return "bg-orange-500 border-orange-500";
      case "Lazada":
        return "bg-purple-500 border-purple-500";
      case "Blibli":
        return "bg-blue-500 border-blue-500";
    }
  };

  return (
    <aside className="h-svh p-5">
      <div className="relative flex h-full w-[280px] flex-col items-center gap-10 overflow-hidden rounded-xl bg-zinc-900 px-3 pt-5 before:pointer-events-none before:absolute before:left-1/2 before:z-0 before:size-[600px] before:-translate-x-1/2 before:-translate-y-[90%] before:rounded-full before:bg-white/10 before:blur-[80px]">
        <p className="font-semibold text-white">Bangtuin</p>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger
            className={cn(
              "font-medium capitalize text-white shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.05)] shadow-white/70",
              getColor(value),
            )}
          >
            <SelectValue>{value}</SelectValue>
          </SelectTrigger>
          <SelectContent className="border-none bg-white/10 text-white backdrop-blur-xl">
            <SelectItem
              value="Tokopedia"
              className="cursor-pointer transition-colors focus:bg-white/20 focus:text-white"
            >
              Tokopedia
            </SelectItem>
            <SelectItem
              value="Shopee"
              className="cursor-pointer transition-colors focus:bg-white/20 focus:text-white"
            >
              Shopee
            </SelectItem>
            <SelectItem
              value="Lazada"
              className="cursor-pointer transition-colors focus:bg-white/20 focus:text-white"
            >
              Lazada
            </SelectItem>
            <SelectItem
              value="Blibli"
              className="cursor-pointer transition-colors focus:bg-white/20 focus:text-white"
            >
              Blibli
            </SelectItem>
          </SelectContent>
        </Select>
        <MessageList id={productID} data={data}/>
      </div>
    </aside>
  );
}
