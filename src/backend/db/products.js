import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    badge: "Trending",
    img: "/img/feature1.jpg",
    title: "Black Hoodie",
    discountPrice: "500",
    price: "1000",
    offerPercent: "50%",
    category: "Tshirt",
    ratings: "3.5"
  },
  {
    _id: uuid(),
    badge: "Trending",
    img: "/img/feature3.png",
    title: "Wrist Watch",
    discountPrice: "1000",
    price: "1500",
    offerPercent: "50%",
    category: "Acessories",
    ratings: "4.5"
  },
  {
    _id: uuid(),
    badge: "Trending",
    img: "/img/feature4.jpg",
    title: "Pen Drive",
    discountPrice: "300",
    price: "600",
    offerPercent: "50%",
    category: "Acessories",
    ratings: "5"
  },
  {
    _id: uuid(),
    badge: "Trending",
    img: "/img/feature5.jpeg",
    title: "Pair of Socks",
    discountPrice: "1500",
    price: "2000",
    offerPercent: "50%",
    category: "Acessories",
    ratings: "2"
  },
  {
    _id: uuid(),
    badge: "Trending",
    img: "/img/feature6.jpg",
    title: "Stickers Pack",
    discountPrice: "1500",
    price: "2500",
    offerPercent: "50%",
    category: "Toys",
    ratings: "1"
  },
  {
    _id: uuid(),
    badge: "Trending",
    img: "/img/feature8.jpg",
    title: " Women Hand Bag",
    discountPrice: "500",
    price: "1000",
    offerPercent: "50%",
    category: "Acessories",
    ratings: "1.5"
  },
  {
    _id: uuid(),
    badge: "Trending",
    img: "/img/feature10.jpg",
    title: " Mini Toys Pack",
    discountPrice: "500",
    price: "1000",
    offerPercent: "50%",
    category: "Acessories",
    ratings: "3.5"
  },
];
