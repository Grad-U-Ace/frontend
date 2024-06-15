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
import MessageList from "./MessageList";

export default function Sidebar() {
  const [value, setValue] = useAtom(olshopAtom);
  const [productID, setProductID] = useAtom(productAtom);

  const getColor = (value: string) => {
    switch (value) {
      case "tokopedia":
        return "bg-emerald-500 border-emerald-500";
      case "shopee":
        return "bg-orange-500 border-orange-500";
      case "lazada":
        return "bg-purple-500 border-purple-500";
      case "blibli":
        return "bg-blue-500 border-blue-500";
    }
  };

  return (
    <aside className="h-svh p-5">
      <div className="relative flex h-full w-[280px] flex-col items-center overflow-hidden rounded-xl bg-zinc-900 px-3 py-20 before:pointer-events-none before:absolute before:left-1/2 before:z-0 before:size-[600px] before:-translate-x-1/2 before:-translate-y-[90%] before:rounded-full before:bg-white/5 before:blur-[80px]">
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
              value="tokopedia"
              className="cursor-pointer transition-colors focus:bg-white/20 focus:text-white"
            >
              Tokopedia
            </SelectItem>
            <SelectItem
              value="shopee"
              className="cursor-pointer transition-colors focus:bg-white/20 focus:text-white"
            >
              Shopee
            </SelectItem>
            <SelectItem
              value="lazada"
              className="cursor-pointer transition-colors focus:bg-white/20 focus:text-white"
            >
              Lazada
            </SelectItem>
            <SelectItem
              value="blibli"
              className="cursor-pointer transition-colors focus:bg-white/20 focus:text-white"
            >
              Blibli
            </SelectItem>
          </SelectContent>
        </Select>
        <MessageList id={productID}/>
      </div>
    </aside>
  );
}
