const products = [
  {
    name: "USB Mini connector Cable",
    image: "https://live.staticflickr.com/1345/897282770_ad55879502_b.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 5,
    countInStock: 15,
    rating: 4,
  },
  {
    name: "USB drive Cable",
    image: "https://live.staticflickr.com/2102/2418503818_25f24c0640_k.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 4,
    countInStock: 5,
    rating: 4,
  },
  {
    name: "Cable",
    image: "https://live.staticflickr.com/4043/4385642149_47aec5b105_b.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 6,
    countInStock: 13,
    rating: 4,
  },
  {
    name: "Cerberus USB Cable - 6ft",
    image: "https://live.staticflickr.com/3813/10158943655_f7672f36cd_z.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 5,
    countInStock: 5,
    rating: 5,
  },
  {
    name: "Micro USB Cable",
    image: "https://live.staticflickr.com/7640/16855955052_56d91a5a17_z.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 4,
    countInStock: 10,
    rating: 4,
  },
  {
    name: "Lenovo PC",
    image: "https://live.staticflickr.com/8321/8069960020_2888e9dbb3_n.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 400,
    countInStock: 20,
    rating: 4,
  },
  {
    name: "Chuwi HiGame PC",
    image: "https://live.staticflickr.com/1735/40996621900_4a8edda262_z.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 450,
    countInStock: 0,
    rating: 4,
  },
  {
    name: "Sennheiser GSP 350 Headphones",
    image: "https://live.staticflickr.com/65535/49689257706_afc835c268_c.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 105,
    countInStock: 14,
    rating: 4,
  },
  {
    name: "Corsair Void USB 7.1 Headphones",
    image: "https://live.staticflickr.com/65535/49688726408_1affaf45a2_c.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 99,
    countInStock: 0,
    rating: 4,
  },
  {
    name: "Audio-Technica ATH-M50 Headphones",
    image: "https://live.staticflickr.com/7152/6591879127_21913d6255.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 89,
    countInStock: 10,
    rating: 2,
  },
  {
    name: "R.O.GNT Headphones",
    image: "https://live.staticflickr.com/8110/8589379742_26c9d84b69_k.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 80,
    countInStock: 20,
    rating: 1,
  },
  {
    name: "Corsair HS50 STEREO Headphones",
    image: "https://live.staticflickr.com/65535/49689257676_5b5a2ab55d_c.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 89,
    countInStock: 17,
    rating: 3,
  },
  {
    name: "GENIUS KB-M200 Keyboard",
    image: "https://live.staticflickr.com/3723/12717346683_7be5924d7b_b.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 20,
    countInStock: 16,
    rating: 3,
  },
  {
    name: "Razer BlackWidow Gaming Keyboard",
    image: "https://live.staticflickr.com/3838/14714880858_058c6f9cf0_h.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 50,
    countInStock: 6,
    rating: 5,
  },
  {
    name: "Logitech G910 Keyboard",
    image: "https://live.staticflickr.com/8578/16475940137_fb128d8e87_c.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 40,
    countInStock: 13,
    rating: 4,
  },
  {
    name: "ZX Spectrum+ 128 Keyboard",
    image: "https://live.staticflickr.com/5032/6945755966_ceabfe47c6_k.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 40,
    countInStock: 18,
    rating: 2,
  },
  {
    name: "Ducky Shine 4 Keyboard",
    image: "https://live.staticflickr.com/3931/15504767475_6902168d05_z.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 45,
    countInStock: 10,
    rating: 4,
  },
  {
    name: "HP 1000-1204TU Laptop",
    image: "https://live.staticflickr.com/7323/13634050314_62c6e01049_w.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 300,
    countInStock: 16,
    rating: 4,
  },
  {
    name: "Asus K53SC-SX054R Laptop",
    image: "https://live.staticflickr.com/7069/13475650205_a4fc23a162_w.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 329,
    countInStock: 6,
    rating: 4,
  },
  {
    name: "Asus X53U-SX358D Laptop",
    image: "https://live.staticflickr.com/7098/13413650883_d675e7b5b6_w.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 319,
    countInStock: 13,
    rating: 5,
  },
  {
    name: "HP 2000-2d01TU Laptop",
    image: "https://live.staticflickr.com/5090/13654817284_5f3a48d2bb_w.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 349,
    countInStock: 17,
    rating: 3,
  },
  {
    name: "pi-top Laptop with Inventor's Kit",
    image: "https://live.staticflickr.com/7812/46743325104_247058f266_z.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 339,
    countInStock: 0,
    rating: 4,
  },
  {
    name: "BenQ XL2430T Monitor",
    image: "https://live.staticflickr.com/7485/16075855998_eb3954b5b6_c.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 170,
    countInStock: 14,
    rating: 3,
  },
  {
    name: "AOC 19'' Monitor",
    image: "https://live.staticflickr.com/6240/6426972913_3d23fac30f_k.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 189,
    countInStock: 10,
    rating: 4,
  },
  {
    name: "Logitech MX518 Gaming Mouse",
    image: "https://live.staticflickr.com/4096/4777334208_bbd8bd6c33_w.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 13,
    countInStock: 18,
    rating: 3,
  },
  {
    name: "Razer Naga 2014 Gaming Mouse",
    image: "https://live.staticflickr.com/5570/14714867599_3cdfdb09d8_h.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 17,
    countInStock: 0,
    rating: 4,
  },
  {
    name: "Logitech G9 Laser Mouse",
    image: "https://live.staticflickr.com/1047/1077711272_9ba47a6714_h.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 14,
    countInStock: 14,
    rating: 4,
  },
  {
    name: "Toshiba 2.4GHz Wireless Mouse ",
    image: "https://live.staticflickr.com/2522/4059322832_8237ef10f2_k.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 10,
    countInStock: 16,
    rating: 3,
  },
  {
    name: "Logitech G9x Mouse",
    image: "https://live.staticflickr.com/1352/5140988940_5d7c1d7b02_c.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 11,
    countInStock: 0,
    rating: 4,
  },
  {
    name: "Sony Xperia Tablet Z",
    image: "https://live.staticflickr.com/7435/10669145395_115484ce36_c.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 119,
    countInStock: 11,
    rating: 4,
  },
  {
    name: "ToriPRO Tablet",
    image: "https://live.staticflickr.com/7282/16191582780_f14b88e375_b.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 109,
    countInStock: 15,
    rating: 3,
  },
  {
    name: "Wishtel IRA Thing Tablet ",
    image: "https://live.staticflickr.com/7228/7007864695_d6dce40ee0_k.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 119,
    countInStock: 15,
    rating: 3,
  },
  {
    name: "Suomi TV iPad Tablet",
    image: "https://live.staticflickr.com/1053/4732799470_c53ac678d5_h.jpg",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    price: 129,
    countInStock: 1,
    rating: 5,
    numReviews: 4,
  },
];
export default products;
