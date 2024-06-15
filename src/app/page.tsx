import ProductTable from "./components/ProductTable";

export default function Home() {
  return (
    <main className="flex min-h-svh grow flex-col px-12 py-28">
      <h1 className="text-4xl font-semibold">Daftar produk</h1>
      <ProductTable />
    </main>
  );
}
