"use client";

import { olshopAtom } from "@/atoms";
import { useAtom } from "jotai";
import { DataTable } from "../products/data-table";
import { Ecommerce, Product as ProductType } from "../types";
import { columns } from "../products/columns";

export default function ProductTable({ data }: { data: Ecommerce[] }) {
  const [olshop] = useAtom(olshopAtom);

  const store = data.find((store: Ecommerce) => store.name === olshop);
  console.log(store);

  // Assuming that DataTable accepts an array of products
  return <DataTable columns={columns} data={store?.products || []} />;
}