export type Reply = {
  sender: "customer" | "seller";
  content: string;
  created_at: string;
  id: number;
  message_id: number;
};

export type Message = {
  customer_name: string;
  tags: string;
  id: number;
  product_id: number;
  replies: Reply[];
};

export type Product = {
  name: string;
  price: number;
  description: string;
  id: number;
  ecommerce_id: number;
  messages: Message[];
};

export type Ecommerce = {
  name: string;
  id: number;
  products: Product[];
};

export type EcommerceData = Ecommerce[];
