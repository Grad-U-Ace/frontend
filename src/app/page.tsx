import { AuroraBackground } from "@/components/ui/aurora-background";
import { fetchEcommerceData } from "./actions";
import ProductTable from "./components/ProductTable";
import Sidebar from "./components/Sidebar";

export default async function Home() {
  const data = await fetchEcommerceData();
  console.log(data);

  return (
    <>
      <Sidebar data={data}/>

      <AuroraBackground>
        <main
          vaul-drawer-wrapper=""
          className="flex min-h-svh w-full flex-col gap-5 px-12 py-28"
        >
          <h1 className="text-4xl font-semibold text-white">Daftar produk</h1>
          <ProductTable data={data} />
        </main>
      </AuroraBackground>
    </>
  );
}
