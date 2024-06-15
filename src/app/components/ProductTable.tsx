"use client";

import { olshopAtom } from "@/atoms";
import { ecommerceData } from "@/data";
import { useAtom } from "jotai";
import { columns, Product } from "../products/columns";
import { DataTable } from "../products/data-table";

export default function ProductTable() {
  const [olshop, setOlshop] = useAtom(olshopAtom);
  const store = ecommerceData.stores.find((store) => store.name === olshop);
  const storeData: Product[] = store ? store.products : [];

  return <DataTable columns={columns} data={storeData} />;
}
