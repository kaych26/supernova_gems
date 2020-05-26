const db = require("../db");
const Product = require("../models/product");
const faker = require("faker");
let fs = require("fs");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  let products = [
    {
      name: 'Total Eclipse of the Heart',
      imgURL: 'https://i.imgur.com/e8x3pMI.jpg',
      description: 'Nothing I can say...',
      price: '695.00',
      jType: 'necklace',
      jCollection: 'women',
      featured: true
    }
    ,
    {
      name: 'Shooting Star',
      imgURL: 'https://i.imgur.com/EDQGcUQ.jpg',
      description: 'Molestias dignissimos eum ut in labore consequatur.',
      price: '275.00',
      jType: 'necklace',
      jCollection: 'women',
      featured: false
    }
    ,
    {
      name: 'Elemental Rose',
      imgURL: 'https://i.imgur.com/7dzvwge.jpg',
      description: 'Sunt eligendi iste.',
      price: '331.00',
      jType: 'necklace',
      jCollection: 'women',
      featured: false
    }
    ,
    {
      name: 'Total Recall',
      imgURL: 'https://i.imgur.com/isYU2CA.jpg',
      description: 'Aut dolorum tenetur cum consequatur ab numquam tempore.',
      price: '581.00',
      jType: 'earrings',
      jCollection: 'women',
      featured: false
    }
    ,
    {
      name: 'Interstellar Sparkle',
      imgURL: 'https://i.imgur.com/16QJsA8.jpg',
      description: 'Occaecati fugiat maxime magnam rerum laborum ab molestiae delectus.',
      price: '682.00',
      jType: 'necklace',
      jCollection: 'women',
      featured: false
    }
    ,
    {
      name: 'Deimos Fury',
      imgURL: 'https://i.imgur.com/xeIQPve.jpg',
      description: 'Enim accusantium ex.',
      price: '554.00',
      jType: 'necklace',
      jCollection: 'women',
      featured: false
    }
    ,
    {
      name: 'Shooting Star',
      imgURL: 'https://i.imgur.com/raborD0.jpg',
      description: 'Numquam est eum sunt eius.',
      price: '306.00',
      jType: 'earrings',
      jCollection: 'women',
      featured: true
    }
    ,
    {
      name: 'Celestial Light',
      imgURL: 'https://i.imgur.com/bxgUjN7.jpg',
      description: 'Ex impedit enim culpa velit.',
      price: '318.00',
      jType: 'earrings',
      jCollection: 'women',
      featured: true
    }
    ,
    {
      name: 'Zathura',
      imgURL: 'https://i.imgur.com/LVt27mz.jpg',
      description: 'Tempora delectus officiis quia quisquam.',
      price: '726.00',
      jType: 'bracelet',
      jCollection: 'women',
      featured: false
    }
    ,
    {
      name: 'Space Jam',
      imgURL: 'https://i.imgur.com/BzutjV4.jpg',
      description: 'Reprehenderit quia modi voluptas modi non omnis consequatur delectus.',
      price: '362.00',
      jType: 'cufflinks',
      jCollection: 'men',
      featured: true
    }
    ,
    {
      name: 'Sol Ascending',
      imgURL: 'https://i.imgur.com/hmqsgAc.jpg',
      description: 'Debitis perferendis nemo excepturi delectus est recusandae aut quaerat.',
      price: '67.00',
      jType: 'necklace',
      jCollection: 'women',
      featured: false
    }
    ,
    {
      name: 'Shooting Star',
      imgURL: 'https://i.imgur.com/b8ZKoFb.jpg',
      description: 'Voluptatum odio nam quos nulla quos recusandae temporibus voluptatem.',
      price: '602.00',
      jType: 'bracelet',
      jCollection: 'women',
      featured: true
    }
    ,
    {
      name: 'Space Adventure',
      imgURL: 'https://i.imgur.com/jXK0ul5.jpg',
      description: 'Quis neque facilis rerum molestiae nulla qui repellendus.',
      price: '944.00',
      jType: 'earrings',
      jCollection: 'women',
      featured: false
    }
    ,
    {
      name: 'Gattaca',
      imgURL: 'https://i.imgur.com/dqTmzdZ.png',
      description: 'Qui aut numquam incidunt consequuntur.',
      price: '890.00',
      jType: 'cufflinks',
      jCollection: 'men',
      featured: true
    }
    ,
    {
      name: 'Neptune Accent',
      imgURL: 'https://i.imgur.com/TYISVuh.jpg',
      description: 'Cumque corrupti provident.',
      price: '39.00',
      jType: 'earrings',
      jCollection: 'women',
      featured: false
    }
    ,
    {
      name: 'Sunflare',
      imgURL: 'https://i.imgur.com/UcECphU.jpg',
      description: 'Animi eos nihil incidunt vero saepe ullam quo.',
      price: '449.00',
      jType: 'earrings',
      jCollection: 'women',
      featured: false
    }
    ,
    {
      name: 'Polaris Rose',
      imgURL: 'https://i.imgur.com/61bXd8n.jpg',
      description: 'Id quo modi illo explicabo voluptatem praesentium quia quia.',
      price: '194.00',
      jType: 'necklace',
      jCollection: 'women',
      featured: true
    }
    ,
    {
      name: 'Celestial Cluster',
      imgURL: 'https://i.imgur.com/LoiCvUi.jpg',
      description: 'Nihil id architecto magnam.',
      price: '611.00',
      jType: 'necklace',
      jCollection: 'women',
      featured: true
    }
    ,
    {
      name: 'Space Bling',
      imgURL: 'https://i.imgur.com/3nbi8aR.jpg',
      description: 'Nam temporibus excepturi qui.',
      price: '892.00',
      jType: 'cufflinks',
      jCollection: 'men',
      featured: false
    }
    ,
    {
      name: 'Laika Dog Tag',
      imgURL: 'https://i.imgur.com/J9cbKVQ.jpg',
      description: 'Ipsa eveniet est.',
      price: '705.00',
      jType: 'pendant',
      jCollection: 'men',
      featured: true
    }
    ,
    {
      name: 'Galaxy Knots',
      imgURL: 'https://i.imgur.com/uooF06y.jpg',
      description: 'Beatae delectus facere odio recusandae.',
      price: '619.00',
      jType: 'bracelet',
      jCollection: 'men',
      featured: false
    }
    ,
    {
      name: 'The Force Awakens',
      imgURL: 'https://i.imgur.com/G81kifT.jpg',
      description: 'Quia eligendi rerum non est.',
      price: '570.00',
      jType: 'ring',
      jCollection: 'men',
      featured: true
    }
    ,
    {
      name: 'Intergalactic Rose',
      imgURL: 'https://i.imgur.com/xcOWNYc.jpg',
      description: 'Voluptate sint rerum voluptatem rerum assumenda dolor et.',
      price: '943.00',
      jType: 'ring',
      jCollection: 'engagement',
      featured: true
    }
    ,
    {
      name: 'Shooting Star',
      imgURL: 'https://i.imgur.com/qnCscUY.jpg',
      description: 'Veritatis error ipsa expedita.',
      price: '746.00',
      jType: 'ring',
      jCollection: 'engagement',
      featured: true
    }
    ,
    {
      name: 'Classy Martian',
      imgURL: 'https://i.imgur.com/mGlIFMa.jpg',
      description: 'Possimus aut omnis.',
      price: '617.00',
      jType: 'ring',
      jCollection: 'women',
      featured: false
    }
    ,
    {
      name: 'Armageddon',
      imgURL: 'https://i.imgur.com/IUxr4OV.jpg',
      description: 'Ea natus corporis.',
      price: '938.00',
      jType: 'ring',
      jCollection: 'engagement',
      featured: true
    }
    ,
    {
      name: 'Eternal Love',
      imgURL: 'https://i.imgur.com/54bPuBi.jpg',
      description: 'Temporibus mollitia tempora adipisci voluptas ex id recusandae nulla.',
      price: '168.00',
      jType: 'ring',
      jCollection: 'engagement',
      featured: true
    }
    ,
    {
      name: 'Supernova Heart',
      imgURL: 'https://i.imgur.com/omPy2Mg.jpg',
      description: 'Aut animi illum rerum temporibus.',
      price: '511.00',
      jType: 'ring',
      jCollection: 'engagement',
      featured: true
    }
    ,
    {
      name: 'Neptune Accent',
      imgURL: 'https://i.imgur.com/r9PM5FW.jpg',
      description: 'Omnis fuga repudiandae et qui eum consequuntur sint error.',
      price: '182.00',
      jType: 'ring',
      jCollection: 'engagement',
      featured: true
    }
    ,
    {
      name: 'Luna',
      imgURL: 'https://i.imgur.com/AaQQV07.jpg',
      description: 'Incidunt magnam quam et provident rerum.',
      price: '830.00',
      jType: 'ring',
      jCollection: 'engagement',
      featured: false
    }
    ,
    {
      name: 'Venusian Mist',
      imgURL: 'https://i.imgur.com/Wi7vpBY.jpg',
      description: 'Quis ad dignissimos excepturi iusto ut vel ipsum odit iusto.',
      price: '129.00',
      jType: 'ring',
      jCollection: 'engagement',
      featured: false
    }
    ,
    {
      name: 'Sol Ascending',
      imgURL: 'https://i.imgur.com/Wj7w6ED.jpg',
      description: 'Ut quod minus ea libero.',
      price: '473.00',
      jType: 'ring',
      jCollection: 'engagement',
      featured: false
    }
    ,
    {
      name: 'Borg Cube',
      imgURL: 'https://i.imgur.com/fjUI62x.jpg',
      description: 'Ut saepe voluptates dolorem.',
      price: '979.00',
      jType: 'cufflinks',
      jCollection: 'men',
      featured: false
    }
    ,
    {
      name: 'Manacles of Heaven',
      imgURL: 'https://i.imgur.com/fcKqf8F.jpg',
      description: 'Suscipit rerum aliquid sit rem similique.',
      price: '600.00',
      jType: 'bracelet',
      jCollection: 'men',
      featured: true
    }
    ,
    {
      name: 'Space Odyssey',
      imgURL: 'https://i.imgur.com/1rPI6HD.jpg',
      description: 'Fugit voluptatem rerum occaecati asperiores.',
      price: '398.00',
      jType: 'ring',
      jCollection: 'men',
      featured: true
    }
  ]

  await Product.deleteMany();
  await Product.insertMany(products);
  console.log("Created products!");
};
const run = async () => {
  await main();
  db.close();
};

run();
