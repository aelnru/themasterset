// components/CardItem.js
import React, { useEffect, useState } from "react";

export default function CardItem({ card }) {
  const [rate, setRate] = useState(0.8);

  useEffect(() => {
    fetch("https://api.exchangerate.host/convert?from=USD&to=GBP")
      .then(res => res.json())
      .then(data => {
        if (data.result) setRate(data.result);
      })
      .catch(err => console.error("Failed to fetch exchange rate", err));
  }, []);

  const gbpPrice = (card.price * rate).toFixed(2);

  const isOutOfStock = card.quantity === 0;

  return (
    <div className={`border rounded-lg p-4 bg-white shadow-md relative ${isOutOfStock ? 'opacity-50' : ''}`}>
      <img src={card.image} alt={card.name} className="w-full h-48 object-contain mb-4" />
      <h2 className="text-lg font-bold">{card.name}</h2>
      <p className="text-sm">Quantity: {card.quantity}</p>
      <p className="text-sm font-semibold">
        {isOutOfStock ? "Out of Stock" : `£${card.price}`}
      </p>
    </div>
  );
}