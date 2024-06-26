import { FaShippingFast } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
export const items = [
  { name: "Item 1", price: 10.99, image: "/images/item1.jpg" },
  { name: "Item 2", price: 12.99, image: "/images/item2.jpg" },
  { name: "Item 3", price: 8.49, image: "/images/item3.jpg" },
  { name: "Item 4", price: 15.0, image: "/images/item4.jpg" },
  { name: "Item 5", price: 7.25, image: "/images/item5.jpg" },
  { name: "Item 6", price: 9.99, image: "/images/item6.jpg" },
  { name: "Item 7", price: 13.49, image: "/images/item7.jpg" },
  { name: "Item 8", price: 11.0, image: "/images/item8.jpg" },
  { name: "Item 9", price: 6.99, image: "/images/item9.jpg" },
  { name: "Item 10", price: 14.5, image: "/images/item10.jpg" },
  { name: "Item 11", price: 5.75, image: "/images/item11.jpg" },
  { name: "Item 12", price: 16.99, image: "/images/item12.jpg" },
  { name: "Item 13", price: 4.99, image: "/images/item13.jpg" },
];
export const whyData = [
  {
    icon: <FaShippingFast className='text-3xl text-[#024E82]' />,
    heading: "free shipping",
    text: "Enjoy free shipping on all orders above $100",
  },
  {
    icon: <MdSupportAgent className='text-4xl text-[#024E82]' />,
    heading: "support 24/7",
    text: "Our support team is there to help you for queries",
  },
  {
    icon: <FaArrowRotateLeft className='text-3xl text-[#024E82]' />,
    heading: "30 days return",
    text: "Simply return it within 30 days of exchange",
  },
  {
    icon: <RiSecurePaymentFill className='text-4xl text-[#024E82]' />,
    heading: "100% payment secure",
    text: "Our payments are fully secured using encryption",
  },
];
