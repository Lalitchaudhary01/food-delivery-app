const resList = [
  {
    id: "1",

    restaurant: {
      name: "KFC",
      // id: "1",
      img: "https://b.zmtcdn.com/data/pictures/7/20287/825ff4ef3e2c838e767392ca8de5cefd.jpg?fit=around|750:500&crop=750:500;*,*",
      location: {
        address: "456 Zomato Avenue",
        city: "Foodtopia",
        state: "Delicious State",
        zip: "54321",
      },
      cuisine: ["Fast Food", "Chicken"],
      menu: [
        // KFC Menu details here
      ],
      rating: 4.5,
      deliveryTime: 30,
      logo: "https://example.com/kfc-logo.jpg",
      deliveryPartner: "Zomato",
      deliveryCharge: 2.99,
      minimumOrderAmount: 15.0,
    },
  },
  {
    id: "1",
    restaurant: {
      name: "Pizza Hut",
      // id: "2",
      img: "https://i.insider.com/5c000538bde70f6551407e6c?width=750&format=jpeg&auto=webp",
      location: {
        address: "789 Pizza Street",
        city: "Pizzaville",
        state: "Pizza State",
        zip: "98765",
      },
      cuisine: ["Pizza", "Italian"],
      menu: [
        // Pizza Hut Menu details here
      ],
      rating: 4.3,
      deliveryTime: 40,
      logo: "https://example.com/pizza-hut-logo.jpg",
      deliveryPartner: "Zomato",
      deliveryCharge: 3.49,
      minimumOrderAmount: 18.0,
    },
  },
  {
    restaurant: {
      name: "Burger King",
      id: 3,
      img: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/08/one-black-womanbk-comp-1296x728-header.jpg?w=1155&h=1528",
      location: {
        address: "123 Burger Avenue",
        city: "Burgertown",
        state: "Burger State",
        zip: "56789",
      },
      cuisine: ["Burgers", "Fast Food"],
      menu: [
        // Burger King Menu details here
      ],
      rating: 4.1,
      deliveryTime: 35,
      logo: "https://example.com/burger-king-logo.jpg",
      deliveryPartner: "Zomato",
      deliveryCharge: 2.99,
      minimumOrderAmount: 12.0,
    },
  },
  {
    restaurant: {
      name: "Sushi Delight",
      id: 4,
      img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: {
        address: "567 Sushi Lane",
        city: "Sushiville",
        state: "Sushi State",
        zip: "23456",
      },
      cuisine: ["Japanese", "Sushi"],
      menu: [
        // Sushi Delight Menu details here
      ],
      rating: 4.7,
      deliveryTime: 28,
      logo: "https://example.com/sushi-delight-logo.jpg",
      deliveryPartner: "Zomato",
      deliveryCharge: 4.99,
      minimumOrderAmount: 22.0,
    },
  },
  {
    restaurant: {
      name: "Mexican Fiesta",
      id: 5,
      img: "https://imgmedia.lbb.in/media/2019/08/5d4fee8a1a7b2b1012e9b259_1565519498206.jpg",
      location: {
        address: "789 Taco Street",
        city: "Mexicoville",
        state: "Spicy State",
        zip: "34567",
      },
      cuisine: ["Mexican", "Tacos"],
      menu: [
        // Mexican Fiesta Menu details here
      ],
      rating: 4.4,
      deliveryTime: 32,
      logo: "https://example.com/mexican-fiesta-logo.jpg",
      deliveryPartner: "Zomato",
      deliveryCharge: 3.29,
      minimumOrderAmount: 17.0,
    },
  },
  {
    restaurant: {
      name: "Veggie Delight",
      id: 6,
      img: "https://content.jdmagicbox.com/comp/bangalore/s5/080pxx80.xx80.180910170021.j6s5/catalogue/north-indian-food-gandhi-nagar-bangalore-fast-food-upy53jysfl.jpg?clr=#524614",
      location: {
        address: "234 Green Street",
        city: "Veggieland",
        state: "Healthy State",
        zip: "87654",
      },
      cuisine: ["Vegetarian", "Healthy"],
      menu: [
        // Veggie Delight Menu details here
      ],
      rating: 4.6,
      deliveryTime: 27,
      logo: "https://example.com/veggie-delight-logo.jpg",
      deliveryPartner: "Zomato",
      deliveryCharge: 3.79,
      minimumOrderAmount: 19.0,
    },
  },
  {
    restaurant: {
      name: "Taco Haven",
      id: 7,
      img: "https://media.istockphoto.com/id/1024558722/photo/group-of-south-indian-food-like-masala-dosa-uttapam-idli-idly-wada-vada-sambar-appam-semolina.jpg?s=612x612&w=0&k=20&c=cbuPAUzlnqlnXhZAa2NbLoSHLUi6OEaVFayHKRAYO7E=",
      location: {
        address: "876 Taco Avenue",
        city: "Tacotown",
        state: "Taco State",
        zip: "34567",
      },
      cuisine: ["Mexican", "Tacos"],
      menu: [
        // Taco Haven Menu details here
      ],
      rating: 4.2,
      deliveryTime: 29,
      logo: "https://example.com/taco-haven-logo.jpg",
      deliveryPartner: "Zomato",
      deliveryCharge: 3.19,
      minimumOrderAmount: 16.0,
    },
  },
  {
    restaurant: {
      name: "Deli Delight",
      id: 8,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bambayya_Pav_bhaji.jpg/640px-Bambayya_Pav_bhaji.jpg",
      location: {
        address: "567 Deli Street",
        city: "Deliville",
        state: "Delicious State",
        zip: "87654",
      },
      cuisine: ["Deli", "Sandwiches"],
      menu: [
        // Deli Delight Menu details here
      ],
      rating: 4.4,
      deliveryTime: 33,
      logo: "https://example.com/deli-delight-logo.jpg",
      deliveryPartner: "Zomato",
      deliveryCharge: 3.39,
      minimumOrderAmount: 18.0,
    },
  },
  {
    restaurant: {
      name: "Curry House",
      id: 9,
      img: "https://redhousespice.com/wp-content/uploads/2021/12/whole-spring-rolls-and-halved-ones-scaled.jpg",
      location: {
        address: "789 Curry Lane",
        city: "Currytown",
        state: "Spicy State",
        zip: "23456",
      },
      cuisine: ["Indian", "Curry"],
      menu: [
        // Curry House Menu details here
      ],
      rating: 4.6,
      deliveryTime: 31,
      logo: "https://example.com/curry-house-logo.jpg",
      deliveryPartner: "Zomato",
      deliveryCharge: 4.09,
      minimumOrderAmount: 20.0,
    },
  },
  {
    restaurant: {
      name: "Seafood Cove",
      id: 10,
      img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/dosa-recipe.jpg.webp",
      location: {
        address: "876 Seafood Avenue",
        city: "Seafoodville",
        state: "Ocean State",
        zip: "56789",
      },
      cuisine: ["Seafood", "Fish"],
      menu: [
        // Seafood Cove Menu details here
      ],
      rating: 4.3,
      deliveryTime: 36,
      logo: "https://example.com/seafood-cove-logo.jpg",
      deliveryPartner: "Zomato",
      deliveryCharge: 3.59,
      minimumOrderAmount: 23.0,
    },
  },
  {
    restaurant: {
      name: "Pasta Paradise",
      id: 11,
      img: "https://www.acouplecooks.com/wp-content/uploads/2023/01/Red-Sauce-Pasta-008.jpg",
      location: {
        address: "234 Pasta Street",
        city: "Pastaville",
        state: "Italian State",
        zip: "87654",
      },
      cuisine: ["Italian", "Pasta"],
      menu: [
        // Pasta Paradise Menu details here
      ],
      rating: 4.7,
      deliveryTime: 28,
      logo: "https://example.com/pasta-paradise-logo.jpg",
      deliveryPartner: "Zomato",
      deliveryCharge: 4.29,
      minimumOrderAmount: 21.0,
    },
  },
  {
    restaurant: {
      name: "Dessert Dreams",
      id: "12",
      img: "https://img.freepik.com/premium-photo/maharashtrian-food-thali-platter-mumbai-style-meal-from-indian_466689-5452.jpg",
      location: {
        address: "789 Sweet Street",
        city: "Sweetville",
        state: "Sugar State",
        zip: "23456",
      },
      cuisine: ["Desserts", "Sweets"],
      menu: [
        // Dessert Dreams Menu details here
      ],
      rating: 4.8,
      deliveryTime: 25,
      logo: "https://example.com/dessert-dreams-logo.jpg",
      deliveryPartner: "Zomato",
      deliveryCharge: 4.79,
      minimumOrderAmount: 25.0,
    },
  },
];
export default resList;
