"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import ProductTable from "./components/ProductTable";

export default function Home() {
  return (
    <AuroraBackground>
      <motion.main
        vaul-drawer-wrapper=""
        className="flex min-h-svh w-full flex-col gap-5 px-12 py-28"
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <h1 className="text-4xl font-semibold text-white">Daftar produk</h1>
        <ProductTable />
      </motion.main>
    </AuroraBackground>
  );
}
