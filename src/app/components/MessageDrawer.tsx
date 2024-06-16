import { olshopAtom } from "@/atoms";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { TableCell, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { flexRender, Row } from "@tanstack/react-table";
import { useAtom } from "jotai";
import { useState } from "react";
import { fetchAIAnswer, fetchSentiment, fetchSummary, fetchTranslation } from "../actions";
import type { Message } from "../types";

export default function MessageDrawer({ row }: { row: Row<any> }) {
  const [olshop] = useAtom(olshopAtom);
  const message: Message = row.original;
  const [answer, setAnswer] = useState<string>("");
  const [translation, setTranslation] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [sentiment, setSentiment] = useState<string>("");

  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <TableRow
          key={row.id}
          data-state={row.getIsSelected() ? "selected" : undefined}
          className="h-20 cursor-pointer rounded-xl py-5 hover:bg-white/5"
        >
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id} className="w-5 p-0">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      </DrawerTrigger>
      <DrawerContent className="right-5 w-[calc(100%-360px)] border-0 bg-zinc-900 shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.05)] shadow-white/20 outline-none ring-offset-0 focus-visible:border-0 focus-visible:outline-none focus-visible:ring-offset-0">
        <DrawerHeader>
          <DrawerTitle className="px-5 text-3xl text-white">
            {message.customer_name}
          </DrawerTitle>
          <DrawerDescription className="flex flex-col gap-4 p-5">
            <div className="text-zinc-300">
              {message.replies.map((reply, index) => (
                <div key={index}>
                  <p>
                    <strong>{reply.sender}:</strong> {reply.content}
                  </p>
                  <p>
                    <strong>Time:</strong> {reply.created_at}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Button
                className="border border-teal-500 bg-teal-500 shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.05)] shadow-teal-200 hover:border-teal-600 hover:bg-teal-600 hover:shadow-teal-300"
                onClick={async () => {
                  const ecommerce = olshop;
                  const product = message.product_id.toString();
                  const messageId = message.id.toString();
                  const reply =
                    message.replies[message.replies.length - 1].id.toString();
                  const answer = await fetchAIAnswer({
                    ecommerce,
                    product,
                    message: messageId,
                    reply,
                  });
                  console.log(reply);
                  console.log(answer);
                  setAnswer(answer.content);
                }}
              >
                Tanya AI
              </Button>
              <Button
                className="border border-zinc-500 bg-zinc-500 shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.05)] shadow-zinc-400 hover:border-zinc-600 hover:bg-zinc-600 hover:shadow-zinc-400"
                onClick={async () => {
                  console.log("Terjemahkan");
                  const ecommerce = olshop;
                  const product = message.product_id.toString();
                  const messageId = message.id.toString();
                  const reply = message.replies[0].id.toString();
                  const translation = await fetchTranslation({
                    ecommerce,
                    product,
                    message: messageId,
                    reply,
                  });
                  console.log(translation);
                  setTranslation(translation.content);
                }}
              >
                Terjemahkan
              </Button>
              <Button
                className="border border-zinc-500 bg-zinc-500 shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.05)] shadow-zinc-400 hover:border-zinc-600 hover:bg-zinc-600 hover:shadow-zinc-400"
                onClick={async () => {
                  const ecommerce = olshop;
                  const product = message.product_id.toString();
                  const messageId = message.id.toString();
                  const summary = await fetchSummary({
                    ecommerce,
                    product,
                    message: messageId,
                  });
                  console.log(summary);
                  setSummary(summary.content);
                }}
              >
                Rangkumkan
              </Button>
              <Button
                className="border border-zinc-500 bg-zinc-500 shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.05)] shadow-zinc-400 hover:border-zinc-600 hover:bg-zinc-600 hover:shadow-zinc-400"
                onClick={async () => {
                  const ecommerce = olshop;
                  const product = message.product_id.toString();
                  const messageId = message.id.toString();
                  const reply = message.replies[0].id.toString();
                  const sentiment = await fetchSentiment({
                    ecommerce,
                    product,
                    message: messageId,
                    reply,
                  });
                  console.log(sentiment);
                  setSentiment(sentiment.content);
                }}
              >
                Sentiment
              </Button>
            </div>
            {answer && (
              <div className="flex items-center justify-between rounded-xl bg-teal-500 p-5">
                <p className="text-white">{answer}</p>
                <Button
                  variant={"ghost"}
                  className="text-white hover:bg-white/10 hover:text-white"
                  onClick={() => navigator.clipboard.writeText(answer)}
                >
                  Copy
                </Button>
              </div>
            )}
            {translation && (
              <div className="flex items-center justify-between rounded-xl bg-zinc-500 p-5">
                <p className="text-white">{translation}</p>
                <Button
                  variant={"ghost"}
                  className="text-white hover:bg-white/10 hover:text-white"
                  onClick={() => navigator.clipboard.writeText(translation)}
                >
                  Copy
                </Button>
              </div>
            )}
            {summary && (
              <div className="flex items-center justify-between rounded-xl bg-zinc-500 p-5">
                <p className="text-white">{summary}</p>
              </div>
            )}
            {sentiment && (
              <div className="flex items-center justify-between rounded-xl bg-zinc-500 p-5">
                <p className="text-white">{sentiment}</p>
              </div>
            )}
          </DrawerDescription>
          <Textarea className="border-none bg-zinc-950 text-zinc-300 shadow-[inset_0_-1px_3px_-1px_rgba(0,0,0,0.05)] shadow-white/70 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0" />
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
