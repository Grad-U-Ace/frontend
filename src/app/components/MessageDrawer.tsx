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
import { flexRender, Row } from "@tanstack/react-table";

export default function MessageDrawer({ row }: { row: Row<any> }) {
  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <TableRow
          key={row.id}
          data-state={row.getIsSelected() ? "selected" : undefined}
          // Leave this blank for now
          onClick={() => {}}
          className="h-auto cursor-pointer py-5"
        >
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id} className="w-5 p-0">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      </DrawerTrigger>
      <DrawerContent className="w-[calc(100%-360px)] right-5 bg-zinc-800 focus-visible:border-zinc-800">
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
