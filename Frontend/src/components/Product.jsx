import React, { useState } from "react";
import { Header } from "./Header";
import "../styles/Product.css";

export const Product = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      productname: "Laptop",
      price: 59999,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 2,
      productname: "Smartphone",
      price: 24999,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 3,
      productname: "Headphones",
      price: 1999,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 4,
      productname: "Smartwatch",
      price: 8999,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 5,
      productname: "Tablet",
      price: 15999,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 6,
      productname: "Keyboard",
      price: 1499,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 7,
      productname: "Mouse",
      price: 999,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 8,
      productname: "Monitor",
      price: 11999,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 9,
      productname: "Speakers",
      price: 2499,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 10,
      productname: "Camera",
      price: 34999,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 11,
      productname: "Tripod",
      price: 799,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 12,
      productname: "Charger",
      price: 499,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 13,
      productname: "Power Bank",
      price: 1299,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 14,
      productname: "Router",
      price: 1899,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 15,
      productname: "USB Cable",
      price: 299,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 16,
      productname: "SSD",
      price: 3499,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 17,
      productname: "External Hard Drive",
      price: 5499,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 18,
      productname: "Graphics Card",
      price: 39999,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 19,
      productname: "Gaming Chair",
      price: 12999,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 20,
      productname: "Microphone",
      price: 2199,
      image:
        "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    },
  ]);
 
  const[cart,setCart]=useState(0);

  const[watch,setWatch]=useState(0);
  const handleCart=()=>{
    setCart(prev=>prev+1)
  }
  return (
    <div>
      <div>
        <Header  cart={cart} watch={watch}/>
      </div>
      <div className="product-grid">
        {product.map((item, index) => (
          <div className="product-card" key={index}>
            <div>
              <img src={item.image} alt={item.productname} />
            </div>
            <div className="pricing-div">
              <div>{item.productname}</div>
              <div className="pricing-div-right">
                <div>₹{item.price}</div>
                <div className="cart" onClick={handleCart}>add to cart</div>
                <div className="watchlist">watchlist</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
