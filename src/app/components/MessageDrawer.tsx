import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
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

interface Message {
  id: string;
  customerName: string;
  message: string;
  time: string;
}

export default function MessageDrawer({ row }: { row: Row<any> }) {
  const message: Message = row.original;

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
          <DrawerTitle className="text-3xl text-white px-5">
            {message.customerName}
          </DrawerTitle>
          <DrawerDescription className="p-5">
            <div className="text-zinc-300">
              <p>
                <strong>Message:</strong> {message.message}
              </p>
              <p>
                <strong>Time:</strong> {message.time}
              </p>
            </div>
            <Button className="bg-teal-500 shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.05)] shadow-teal-200 hover:bg-teal-600 hover:shadow-teal-300">
              Ask AI
            </Button>
          </DrawerDescription>
          <Textarea className="border-none bg-zinc-950 text-zinc-300 shadow-[inset_0_-1px_3px_-1px_rgba(0,0,0,0.05)] shadow-white/70 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0" />
        </DrawerHeader>
        <DrawerFooter>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
