type Message = {
  id: string;
  customerName: string;
  message: string;
  time: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  messages: Message[];
};

type Store = {
  name: string;
  products: Product[];
};

export type EcommerceData = {
  stores: Store[];
};

export const ecommerceData: EcommerceData = {
  stores: [
    {
      name: "tokopedia",
      products: [
        {
          id: "p1",
          name: "Product 1",
          price: 50000,
          description: "Description of Product 1",
          messages: [
            {
              id: "m1",
              customerName: "Alice",
              message: "Is this product available?",
              time: "2024-06-01 10:00:00",
            },
            {
              id: "m2",
              customerName: "Bob",
              message: "Can I get a discount?",
              time: "2024-06-01 10:15:00",
            },
          ],
        },
        {
          id: "p2",
          name: "Product 2",
          price: 80000,
          description: "Description of Product 2",
          messages: [
            {
              id: "m3",
              customerName: "Carol",
              message: "Does this come in different colors?",
              time: "2024-06-02 11:00:00",
            },
            {
              id: "m4",
              customerName: "Dave",
              message: "What's the return policy?",
              time: "2024-06-02 11:30:00",
            },
          ],
        },
        {
          id: "p3",
          name: "Product 3",
          price: 120000,
          description: "Description of Product 3",
          messages: [
            {
              id: "m5",
              customerName: "Eve",
              message: "Is this product new?",
              time: "2024-06-03 12:00:00",
            },
            {
              id: "m6",
              customerName: "Frank",
              message: "Can I return this product?",
              time: "2024-06-03 12:45:00",
            },
          ],
        },
      ],
    },
    {
      name: "shopee",
      products: [
        {
          id: "p4",
          name: "Product 4",
          price: 75000,
          description: "Description of Product 4",
          messages: [
            {
              id: "m7",
              customerName: "Grace",
              message: "What is the warranty period?",
              time: "2024-06-04 13:00:00",
            },
            {
              id: "m8",
              customerName: "Hank",
              message: "Is there free shipping?",
              time: "2024-06-04 13:30:00",
            },
          ],
        },
        {
          id: "p5",
          name: "Product 5",
          price: 60000,
          description: "Description of Product 5",
          messages: [
            {
              id: "m9",
              customerName: "Ivy",
              message: "Does it include accessories?",
              time: "2024-06-05 14:00:00",
            },
            {
              id: "m10",
              customerName: "Jack",
              message: "What are the dimensions?",
              time: "2024-06-05 14:30:00",
            },
          ],
        },
        {
          id: "p6",
          name: "Product 6",
          price: 90000,
          description: "Description of Product 6",
          messages: [
            {
              id: "m11",
              customerName: "Kim",
              message: "Is this eco-friendly?",
              time: "2024-06-06 15:00:00",
            },
            {
              id: "m12",
              customerName: "Liam",
              message: "What are the payment options?",
              time: "2024-06-06 15:30:00",
            },
          ],
        },
      ],
    },
    {
      name: "lazada",
      products: [
        {
          id: "p7",
          name: "Product 7",
          price: 60000,
          description: "Description of Product 7",
          messages: [
            {
              id: "m13",
              customerName: "Mike",
              message: "Is this product new?",
              time: "2024-06-07 16:00:00",
            },
            {
              id: "m14",
              customerName: "Nina",
              message: "Can I return this product?",
              time: "2024-06-07 16:45:00",
            },
          ],
        },
        {
          id: "p8",
          name: "Product 8",
          price: 85000,
          description: "Description of Product 8",
          messages: [
            {
              id: "m15",
              customerName: "Oscar",
              message: "What is the material?",
              time: "2024-06-08 17:00:00",
            },
            {
              id: "m16",
              customerName: "Pam",
              message: "Is it available in other sizes?",
              time: "2024-06-08 17:30:00",
            },
          ],
        },
        {
          id: "p9",
          name: "Product 9",
          price: 100000,
          description: "Description of Product 9",
          messages: [
            {
              id: "m17",
              customerName: "Quinn",
              message: "Does it come with a warranty?",
              time: "2024-06-09 18:00:00",
            },
            {
              id: "m18",
              customerName: "Ray",
              message: "Can I get expedited shipping?",
              time: "2024-06-09 18:30:00",
            },
          ],
        },
      ],
    },
    {
      name: "blibli",
      products: [
        {
          id: "p10",
          name: "Product 10",
          price: 90000,
          description: "Description of Product 10",
          messages: [
            {
              id: "m19",
              customerName: "Sara",
              message: "What colors are available?",
              time: "2024-06-10 19:00:00",
            },
            {
              id: "m20",
              customerName: "Tom",
              message: "Do you ship internationally?",
              time: "2024-06-10 19:30:00",
            },
          ],
        },
        {
          id: "p11",
          name: "Product 11",
          price: 70000,
          description: "Description of Product 11",
          messages: [
            {
              id: "m21",
              customerName: "Uma",
              message: "Is it durable?",
              time: "2024-06-11 20:00:00",
            },
            {
              id: "m22",
              customerName: "Victor",
              message: "What is the return policy?",
              time: "2024-06-11 20:30:00",
            },
          ],
        },
        {
          id: "p12",
          name: "Product 12",
          price: 95000,
          description: "Description of Product 12",
          messages: [
            {
              id: "m23",
              customerName: "Wendy",
              message: "How long is the delivery time?",
              time: "2024-06-12 21:00:00",
            },
            {
              id: "m24",
              customerName: "Xander",
              message: "Can I change my order after placing it?",
              time: "2024-06-12 21:30:00",
            },
          ],
        },
      ],
    },
  ],
};
