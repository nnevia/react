import { http, delay, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:5000/products", ( ) => {
    return HttpResponse.json([
        {
          name: "America",
          imagePath: "/images/america.jpeg",
        },
        {
          name: "England",
          imagePath: "/images/england.jpeg",
        },
      ])
   
  }),
  http.get("http://localhost:5000/options", () => {
    return HttpResponse.json([
        {
          name: "Insurance",
        },
        {
          name: "Dinner",
        },
      ])
   
  }),
  http.post('http://localhost:5000/order', async () => {
    let dummyData = [{orderNumber: 12414124124, price: 2000}];
    await delay(100);
    return HttpResponse.json(dummyData);
  }),
];
