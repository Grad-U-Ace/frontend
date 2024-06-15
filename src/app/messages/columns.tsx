"use client";

import { generateThumbnail } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

// Define the shape of the data
export type Message = {
  id: string;
  customerName: string;
  message: string;
  time: string;
};

export const columns: ColumnDef<Message>[] = [
  {
    accessorKey: "profilePicture",
    header: "Profile Picture",
    cell: ({ row }) => (
      <img
        src={generateThumbnail(row.original.id, row.original.customerName)}
        alt={row.original.customerName}
        className="size-8 rounded-full"
      />
    ),
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => (
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-white">{row.original.customerName}</span>
          <span className="text-zinc-500">{row.original.time}</span>
        </div>
        <div className="line-clamp-1 text-zinc-400">{row.original.message}</div>
      </div>
    ),
  },
];
