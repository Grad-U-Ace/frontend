"use client";

import { formatDate, generateThumbnail } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import type { Message } from "../types";

export const columns: ColumnDef<Message>[] = [
  {
    accessorKey: "profilePicture",
    header: "Profile Picture",
    cell: ({ row }) => (
      <img
        src={generateThumbnail(
          row.original.id.toString(),
          row.original.customer_name,
        )}
        alt={row.original.customer_name}
        className="size-8 rounded-full"
      />
    ),
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => {
      const lastReply = row.original.replies[row.original.replies.length - 1];
      return (
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white">
              {row.original.customer_name}
            </span>
            <span className="text-zinc-500">
              {formatDate(lastReply.created_at)}
            </span>
          </div>
          <div className="line-clamp-1 text-zinc-400">{lastReply.content}</div>
        </div>
      );
    },
  },
];
