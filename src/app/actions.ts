"use server";

export async function fetchEcommerceData() {
  const response = await fetch("http://127.0.0.1:8000/ecommerce/");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}
