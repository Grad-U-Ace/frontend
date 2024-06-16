"use server";

export async function fetchEcommerceData() {
  const response = await fetch("http://127.0.0.1:8000/ecommerce/");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}

export async function fetchAIAnswer({
  ecommerce,
  product,
  message,
  reply,
}: {
  ecommerce: string;
  product: string;
  message: string;
  reply: string;
}) {
  const response = await fetch(
    `http://127.0.0.1:8000/ecommerce/${ecommerce}/product/${product}/message/${message}/reply/${reply}/ask`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}

export async function fetchTranslation({
  ecommerce,
  product,
  message,
  reply,
}: {
  ecommerce: string;
  product: string;
  message: string;
  reply: string;
}) {
  const response = await fetch(
    `http://127.0.0.1:8000/ecommerce/${ecommerce}/product/${product}/message/${message}/reply/${reply}/translate`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}
