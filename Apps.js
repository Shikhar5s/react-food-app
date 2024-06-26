import React from "react";
import ReactDOM from "react-dom/client";
import "./Apps.css";


//Header component
const Header=()=>{

    return(
        <div className="header">
           <div className="logo-container">
            <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"/>
            
            </div> 
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

//Restaurant container
//Restaurant Card
//img
// Name ofres,star Rating,cuisins
const RestaurantCard=(props)=>{
    const{resData}=props;
    
    return(
 <div className="res-card">
    <img className="res-logo" alt="res-logo" 
    src="https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"/>
    <h3>{resData.info.name}</h3>
    <div style={{display:"flex", justifyContent:"center"}}>
    <h4 style={{textAlign:"center"}}>{resData.info.cuisines}</h4>
    </div>
    <h4>{resData.info.avgRating}</h4>
    <h4>{resData.info.sla.deliveryTime}</h4>

 </div>
 
    );


};

const resobj=[
    {
      "info": {
        "id": "595300",
        "name": "Wow! Momo",
        "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
        "locality": "Alpha 1",
        "areaName": "Alpha 1",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "1776",
        "avgRatingString": "4.3",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 3.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-27 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Momos.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Momos.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/wow-momo-alpha-1-noida-1-595300",
        "type": "WEBLINK"
      }
    },

   { "info": {
                      "id": "584332",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_584332.JPG",
                      "locality": "Gamma 1",
                      "areaName": "Greater Noida",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.4,
                      "parentId": "547",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-06-27 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/kfc-gamma-1-greater-noida-noida-1-584332",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "364455",
                      "name": "Grameen Kulfi",
                      "cloudinaryImageId": "evuc4bflx4cslbfdngb0",
                      "locality": "Sector alpha 2",
                      "areaName": "Alpha Sector 2",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "12175",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-06-26 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "EVERY ITEM",
                        "subHeader": "@ ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/grameen-kulfi-sector-alpha-2-alpha-sector-2-noida-1-364455",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "703824",
                      "name": "MOJO Pizza - 2X Toppings",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/cc816121-12a5-4fc7-a5ca-01406efd31e2_703824.JPG",
                      "locality": "Ram Bhool Market",
                      "areaName": "Sector Pi",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Fast Food",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "11329",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-35 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-06-27 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-ram-bhool-market-sector-pi-noida-1-703824",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "750459",
                      "name": "Daily Kitchen - Homely Meals",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/8a1d8aae-63c3-4033-a8b4-5d0eac490c8f_750459.JPG",
                      "locality": "Ram Bhool Market",
                      "areaName": "Sector Pi Noida",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Home Food",
                        "Indian",
                        "North Indian",
                        "Thalis"
                      ],
                      "avgRating": 4.4,
                      "parentId": "444382",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-35 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-06-27 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-ram-bhool-market-sector-pi-noida-noida-1-750459",
                      "type": "WEBLINK"
                    }
                  }
                
                ]

const Body=()=>{

    return(
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            
        <RestaurantCard 
        resData={resobj[0]} />
         <RestaurantCard 
        resData={resobj[1]} />
         <RestaurantCard 
        resData={resobj[2]} />
         <RestaurantCard 
        resData={resobj[3]} />
         <RestaurantCard 
        resData={resobj[4]} />
         <RestaurantCard 
        resData={resobj[5]} />
        
      

            
        </div>
    </div>

    );


}
const AppLayout=()=>{
    return(
        <div className="app">
            
        <Header/>
        <Body/>
        </div>
    )




};
const root=ReactDOM.createRoot(document.getElementById("root"));

//console.log(<HeadingComponent/>)

root.render(<AppLayout/>); 


