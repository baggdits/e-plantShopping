import React, { useState, useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, addItem, removeItem } from "./CartSlice";

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const plantsArray = [
        {
            category: "Piano",
            plants: [
                {
                    name: "Piano 1",
                    image: "https://cdn.pixabay.com/photo/2017/01/31/15/38/amigos-2025167_1280.png",
                    description: "Grand piano.",
                    cost: "$350"
                },
                {
                    name: "Piano 2",
                    image: "https://cdn.pixabay.com/photo/2015/08/24/17/24/piano-905287_1280.jpg",
                    description: "Vintage Piano.",
                    cost: "$320"
                },
                {
                    name: "Piano 3",
                    image: "https://cdn.pixabay.com/photo/2020/04/10/10/45/audio-5025179_1280.jpg",
                    description: "Digital piano.",
                    cost: "$280"
                },
                {
                    name: "Piano 4",
                    image: "https://cdn.pixabay.com/photo/2022/02/22/13/25/instrument-7028787_1280.jpg",
                    description: "Vintage Digital piano.",
                    cost: "$200"
                },
                {
                    name: "Piano 5",
                    image: "https://cdn.pixabay.com/photo/2014/06/27/10/56/spinet-378257_1280.jpg",
                    description: "Spinet piano.",
                    cost: "$170"
                },
                {
                    name: "Piano 6",
                    image: "https://cdn.pixabay.com/photo/2017/12/06/09/55/piano-3001357_1280.jpg",
                    description: "Babygrand piano.",
                    cost: "$140"
                }
            ]
        },
        {
            category: "Clarinets",
            plants: [
                {
                    name: "Clarinet 1",
                    image: "https://cdn.pixabay.com/photo/2016/10/16/04/51/music-1744419_1280.jpg",
                    description: "Eb clarinet.",
                    cost: "$200"
                },
                {
                    name: "Clarinet 2",
                    image: "https://cdn.pixabay.com/photo/2015/04/14/21/26/clarinet-722815_1280.jpg",
                    description: "Eb Clarinet gold.",
                    cost: "$280"
                },
                {
                    name: "Clarinet 3",
                    image: "https://cdn.pixabay.com/photo/2016/10/16/04/51/music-1744419_1280.jpg",
                    description: "G clarinet.",
                    cost: "$150"
                },
                {
                    name: "Clarinet 4",
                    image: "https://cdn.pixabay.com/photo/2017/07/14/21/57/instrument-2505102_1280.jpg",
                    description: "Eb clarinet.",
                    cost: "$120"
                },
                {
                    name: "Clarinet 5",
                    image: "https://cdn.pixabay.com/photo/2019/03/31/11/33/clarinet-4092904_1280.jpg",
                    description: "Alto clarinet.",
                    cost: "$140"
                },
                {
                    name: "Clarinet 6",
                    image: "https://cdn.pixabay.com/photo/2014/10/07/18/40/clarinet-478168_1280.jpg",
                    description: "Eb learning clarinet.",
                    cost: "$220"
                }
            ]
        },
        {
            category: "Guitars",
            plants: [
                {
                    name: "Guitar 1",
                    image: "https://cdn.pixabay.com/photo/2017/05/01/18/18/guitar-2276181_1280.jpg",
                    description: "Classic guitar.",
                    cost: "$100"
                },
                {
                    name: "Guitar 2",
                    image: "https://cdn.pixabay.com/photo/2020/12/16/16/32/guitar-5837061_1280.jpg",
                    description: "Vintage classic guitar.",
                    cost: "$80"
                },
                {
                    name: "Guitar 3",
                    image: "https://cdn.pixabay.com/photo/2017/08/06/07/28/guitar-2589863_1280.jpg",
                    description: "White Electric guitar.",
                    cost: "$200"
                },
                {
                    name: "Guitar 4",
                    image: "https://cdn.pixabay.com/photo/2016/10/12/23/22/electric-guitar-1736291_1280.jpg",
                    description: "Vintage electric guitar.",
                    cost: "$90"
                },
                {
                    name: "Guitar 5",
                    image: "https://cdn.pixabay.com/photo/2017/11/07/00/22/guitar-2925282_1280.jpg",
                    description: "Brown and White Electric guitar.",
                    cost: "$200"
                },
                {
                    name: "Guitar 6",
                    image: "https://cdn.pixabay.com/photo/2019/07/15/17/30/guitar-4339969_1280.jpg",
                    description: "Classic guitar.",
                    cost: "$130"
                }
            ]
        },
        {
            category: "Drums",
            plants: [
                {
                    name: "Drum 1",
                    image: "https://cdn.pixabay.com/photo/2017/01/02/13/11/drum-kit-1946753_1280.jpg",
                    description: "Classic drum kit.",
                    cost: "$140"
                },
                {
                    name: "Drum 2",
                    image: "https://cdn.pixabay.com/photo/2019/05/23/04/29/drum-4223136_1280.jpg",
                    description: "Classic drum kit.",
                    cost: "$160"
                },
                {
                    name: "Drum 3",
                    image: "https://cdn.pixabay.com/photo/2021/06/23/14/32/drums-6358910_1280.jpg",
                    description: "Classic drum kit 3 parts.",
                    cost: "$100"
                },
                {
                    name: "Drum 4",
                    image: "https://cdn.pixabay.com/photo/2020/12/23/09/56/electronic-drum-pad-5854409_1280.jpg",
                    description: "Drum pad.",
                    cost: "$140"
                },
                {
                    name: "Drum 5",
                    image: "https://cdn.pixabay.com/photo/2014/05/28/15/10/eletronica-356598_1280.jpg",
                    description: "Electronic drum.",
                    cost: "$150"
                },
                {
                    name: "Drum 6",
                    image: "https://cdn.pixabay.com/photo/2021/09/23/13/59/drum-6649933_1280.jpg",
                    description: "Vintage drum 2 parts.",
                    cost: "$90"
                }
            ]
        },
        {
            category: "Microphones",
            plants: [
                {
                    name: "Microphone 1",
                    image: "https://cdn.pixabay.com/photo/2020/06/25/17/57/microphone-5340340_1280.jpg",
                    description: "Studio recording microphone.",
                    cost: "$250"
                },
                {
                    name: "Microphone 2",
                    image: "https://cdn.pixabay.com/photo/2015/02/06/22/08/microphone-626618_1280.jpg",
                    description: "Wired microphone.",
                    cost: "$100"
                },
                {
                    name: "Microphone 3",
                    image: "https://cdn.pixabay.com/photo/2021/05/24/14/46/old-microphone-6279518_1280.jpg",
                    description: "Studio recording microphone.",
                    cost: "$150"
                },
                {
                    name: "Microphone 4",
                    image: "https://cdn.pixabay.com/photo/2017/08/06/17/48/microphone-2594599_1280.jpg",
                    description: "Gold wired microphone.",
                    cost: "$200"
                },
                {
                    name: "Microphone 5",
                    image: "https://cdn.pixabay.com/photo/2019/01/18/15/03/podcast-3939905_1280.jpg",
                    description: "Professional studio recording microphone.",
                    cost: "$400"
                },
                {
                    name: "Microphone 6",
                    image: "https://cdn.pixabay.com/photo/2014/06/11/20/37/microphone-367041_1280.jpg",
                    description: "Boom microphone.",
                    cost: "$220"
                }
            ]
        }
    ];
    const styleObj = {
        backgroundColor: 'blue',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        marginLeft: '220px',
        textDecoration: 'none',
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false); // just hide the cart
    };
    
      

    const handleAddToCart = (product) => {
        dispatch(addItem(product)); // Dispatch the action to add the product to the cart (Redux action)
      
        setAddedToCart((prevState) => ({ // Update the local state to reflect that the product has been added
          ...prevState, // Spread the previous state to retain existing entries
          [product.name]: true, // Set the current product's name as a key with value 'true' to mark it as added
        }));
      };
      const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
      };
      
      const handleDecrement = (item) => {
        if (item.quantity > 1) {
          dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
          dispatch(removeItem(item.name));
        }
      };
      
      const handleRemove = (item) => {
        dispatch(removeItem(item.name));
      };
        

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4NC0yMzYtcF8xLnBuZw.png" alt="" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Evan e-shop</h3>
                                <i style={{ color: 'white' }}>The World of Music!</i>
                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Instruments</a></div>
                    <div style={{ position: 'relative' }}>
  <a href="#" onClick={(e) => handleCartClick(e)} >
    <h1 className='cart'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
        <rect width="156" height="156" fill="none"></rect>
        <circle cx="80" cy="216" r="12"></circle>
        <circle cx="184" cy="216" r="12"></circle>
        <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
    </h1>
    {totalQuantity > 0 && (
      <span style={{
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '4px 8px',
        fontSize: '14px',
        fontWeight: 'bold',
      }}>
        {totalQuantity}
      </span>
    )}
  </a>
</div>

                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => ( // Loop through each category in plantsArray
  <div key={index}> {/* Unique key for each category div */}
    <h1>
    <div
  style={{
    textAlign: 'center',     // centers the text horizontally
        // spacing below
  }}
>
  {category.category}
</div> {/* Display the category name */}
    </h1>
    <div className="product-list"> {/* Container for the list of plant cards */}
      {category.plants.map((plant, plantIndex) => ( // Loop through each plant in the current category
        <div className="product-card" key={plantIndex}> {/* Unique key for each plant card */}
          <img 
            className="product-image" 
            src={plant.image} // Display the plant image
            alt={plant.name} // Alt text for accessibility
          />
          <div className="product-title">{plant.name}</div> {/* Display plant name */}
          {/* Display other plant details like description and cost */}
          <div className="product-description">{plant.description}</div> {/* Display plant description */}
          <div className="product-cost">{plant.cost}</div> {/* Display plant cost */}
          <button
            className="product-button"
            onClick={() => handleAddToCart(plant)} // Handle adding plant to cart
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
))}

                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
        
    );
}

export default ProductList;
