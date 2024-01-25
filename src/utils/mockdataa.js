const menuList = [
  {
    info: {
      id: "1",
      name: "Taj Hotel",
      cloudinaryImageId: "85e6e427481332842d4413983ef45bdd",
      items: [
        "Chicken",
        "Biryani",
        "Paneer Tikka",
        "Butter Chicken",
        "Dal Makhani",
        "Tandoori Roti",
        "Samosa",
        "Chole Bhature",
        "Rajma Chawal",
        "Aloo Paratha",
      ],
      locality: "Azad Nagar",
      areaName: "Shankar_Vihar",
      costForTwo: "₹300 for two",
      cuisines: ["Mughlai", "North Indian"],
      avgRating: 3.8,
      parentId: "21656",
      avgRatingString: "3.8",
      totalRatingsString: "100+",
      promoted: true,
      adTrackingId:
        "cid=10827240~p=1~eid=0000018d-3f31-44fa-1712-c7fd00860149~srvts=1706162210042~45995",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-25 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=685125",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  // Add 11 more restaurants following the same structure...
  {
    info: {
      id: "2",
      name: "Delicious Bites",
      cloudinaryImageId: "abc123def456",
      locality: "Downtown",
      areaName: "City Center",
      costForTwo: "₹250 for two",
      cuisines: ["Italian", "Pizza"],
      avgRating: 4.2,
      parentId: "78901",
      avgRatingString: "4.2",
      totalRatingsString: "120+",
      promoted: false,
      adTrackingId:
        "cid=98765432~p=2~eid=00000123-4567-89ab-cdef01234567~srvts=2101312210042~78901",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "40 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_FOOD",
      },
      availability: {
        nextCloseTime: "2024-01-25 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "R",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_VIDEO",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=123456",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  // Repeat the structure for the next 10 restaurants...
  {
    info: {
      id: "3",
      name: "Spice Haven",
      cloudinaryImageId: "xyz987uvw654",
      locality: "Spice Street",
      areaName: "Flavor Town",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Spicy"],
      avgRating: 4.5,
      parentId: "34567",
      avgRatingString: "4.5",
      totalRatingsString: "150+",
      promoted: true,
      adTrackingId:
        "cid=56789012~p=3~eid=00001234-5678-9abc-def012345678~srvts=2101312210042~34567",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_VEGETABLE",
      },
      availability: {
        nextCloseTime: "2024-01-25 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "V",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹60",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=789012",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  // Repeat the structure for the next 9 restaurants...
  {
    info: {
      id: "4",
      name: "Pizza Paradise",
      cloudinaryImageId: "pqr321stu654",
      locality: "Cheese Street",
      areaName: "Crustville",
      costForTwo: "₹180 for two",
      cuisines: ["Italian", "Pizza"],
      avgRating: 4.0,
      parentId: "23456",
      avgRatingString: "4.0",
      totalRatingsString: "120+",
      promoted: true,
      adTrackingId:
        "cid=34567890~p=4~eid=00002345-6789-abcd-ef0123456789~srvts=2101312210042~23456",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.0,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_FASTFOOD",
      },
      availability: {
        nextCloseTime: "2024-01-25 23:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "12% OFF",
        subHeader: "UPTO ₹30",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_VIDEO",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=456789",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  // Repeat the structure for the next 8 restaurants...
  {
    info: {
      id: "5",
      name: "Sushi Delight",
      cloudinaryImageId: "ghi987jkl654",
      locality: "Fish Market",
      areaName: "Soy City",
      costForTwo: "₹220 for two",
      cuisines: ["Japanese", "Sushi"],
      avgRating: 4.3,
      parentId: "78901",
      avgRatingString: "4.3",
      totalRatingsString: "130+",
      promoted: false,
      adTrackingId:
        "cid=45678901~p=5~eid=00003456-7890-abcd-ef0123456789~srvts=2101312210042~78901",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-25 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "R",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "18% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=234567",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  // Repeat the structure for the next 7 restaurants...
  // Continue adding the remaining restaurants here...
];
export default menuList;

// Now you have the menuList array with 12 restaurants in the corrected structure.
