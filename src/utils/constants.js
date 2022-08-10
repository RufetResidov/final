import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import flower1 from "../assets/images/flower/deal1.png"
import flower2 from "../assets/images/flower/deal2.png"
import slider1 from '../assets/images/slider/slider1.webp'
import slider2 from '../assets/images/slider/slider2.webp'
import service1 from '../assets/images/icon/service1.webp'
import service2 from '../assets/images/icon/service2.webp'
import service3 from '../assets/images/icon/service3.webp'
import service4 from '../assets/images/icon/service4.webp'
export const links = [
  {
    id: 1,
    text: 'Home',
    url: '/',
  },
  {
    id: 2,
    text: 'About',
    url: '/about',
  },
  {
    id: 3,
    text: 'Products',
    url: '/products',
  },
  {
    id: 4,
    text: 'Blog',
    url: '/blog',
  },
  {
    id: 5,
    text: 'Contact',
    url: '/contact',
  },
]
export const services = [
  {
    id: 1,
    icon: service1,
    title: 'Free Shipping',
    text:
      'Free shipping on order',
  },
  {
    id: 2,
    icon: service2,
    title: 'Support 24/7',
    text:
      'Contact us 24 hrs a day',
  },
  {
    id: 3,
    icon: service3,
    title: '100% Money Back',
    text:
      'You’ve 30 days to Return',
  },
  {
    id: 4,
    icon: service4,
    title: 'Payment Secure',
    text:
      '100% secure payment',
  },
]
export const social = [
  {
    id: 1,
    icon: <FaFacebook />,
    title: 'facebook',
    url: "https://www.facebook.com/"
  },
  {
    id: 2,
    icon: <FaWhatsapp />,
    title: 'whatsapp',
    url: "https://web.whatsapp.com/"
  },
  {
    id: 3,
    icon: <FaTiktok />,
    title: 'tiktok',
    url: "https://www.tiktok.com/"
  },
  {
    id: 4,
    icon: <FaInstagram />,
    title: 'instagram',
    url: "https://web.instagram.com/"
  },

]
export const homeSlider = [
  {
    id: 1,
    small: "The Stone Series",
    light: "To Your Home",
    bold: "A Great Addition",
    img: slider1,
  },

  {
    id: 2,
    small: "The Stone Series",
    light: "To Your Home",
    bold: "A Great Addition",
    img: slider2,
  },
  {
    id: 3,
    small: "Greaaatae",
    light: "To Your Home",
    bold: "A Great Addition",
    img: slider1,
  },

]
export const product = [
  {
    id: "recEHmzvupvT8ZONH",
    name: "Product 1",
    price: 59,
    "image": "https://themes.pixelstrap.com/voxo/front-end/assets/images/flower/product/1.jpg",
    colors: [
      "#000",
      "#ffb900"
    ],
    description: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    amount: 2,
  },
  {
    id: "2",
    name: "Product 2",
    price: 59,
    "image": "https://themes.pixelstrap.com/voxo/front-end/assets/images/flower/product/2.jpg",
    colors: [
      "#000",
      "#ffb900"
    ],
    description: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    amount: 2,
  },
  {
    id: "ew",
    name: "Product 3",
    price: 59,
    "image": "https://themes.pixelstrap.com/voxo/front-end/assets/images/flower/product/3.jpg",
    colors: [
      "#000",
      "#ffb900"
    ],
    description: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "gift",
    amount: 2,
  },
  {
    id: "4",
    name: "Product 2",
    price: 59,
    image: "https://themes.pixelstrap.com/voxo/front-end/assets/images/flower/product/4.jpg",
    colors: [
      "#000",
      "#ffb900"
    ],
    description: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "food",
    amount: 1,
  },


]
export const dealDay =
{
  id: 1,
  image1: flower2,
  image2: flower1,
  time: "29 September 2022 15:30:25",
  sale: 70
}
export const blogs_url = 'https://course-api.com/react-store-products';

export const single_blogs_url = `https://course-api.com/react-store-single-product?id=`;

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
