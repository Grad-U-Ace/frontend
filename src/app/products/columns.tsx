"use client";

import { ColumnDef } from "@tanstack/react-table";

// Define the shape of the data
export type Product = {
  id: string;
  name: string;
  thumbnail: string;
  price: number;
  description: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "thumbnail",
    header: "Thumbnail",
    cell: ({ row }) => (
      <img
        src={row.original.thumbnail}
        alt={row.original.name}
        className="size-12 rounded-full"
      />
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];
