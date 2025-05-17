// pages/SetPage.js
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import CardItem from "../components/CardItem";

const mockCardsBySet = {
  base: [
    { id: 1, name: "Charizard", price: 300, image: "https://images.pokemontcg.io/base1/4.png", quantity: 5 },
    { id: 2, name: "Blastoise", price: 150, image: "https://images.pokemontcg.io/base1/2.png", quantity: 3 },
    { id: 5, name: "Venusaur", price: 120, image: "https://images.pokemontcg.io/base1/15.png", quantity: 0 }
  ],
  jungle: [
    { id: 3, name: "Vileplume", price: 40, image: "https://images.pokemontcg.io/jungle/15.png", quantity: 2 }
  ],
  fossil: [
    { id: 4, name: "Dragonite", price: 100, image: "https://images.pokemontcg.io/fossil/4.png", quantity: 4 }
  ]
};

export default function SetPage() {
  const { setId } = useParams();
  const cards = mockCardsBySet[setId] || [];
  const allSets = Object.keys(mockCardsBySet);

  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [selectedSets, setSelectedSets] = useState([setId]);

  const toggleSet = (set) => {
    setSelectedSets(prev =>
      prev.includes(set) ? prev.filter(s => s !== set) : [...prev, set]
    );
  };

  const filteredCards = Object.entries(mockCardsBySet)
    .filter(([key]) => selectedSets.includes(key))
    .flatMap(([_, cards]) => cards)
    .filter(card => {
      const matchesSearch = card.name.toLowerCase().includes(search.toLowerCase());
      const matchesPrice =
        priceFilter === "all" ||
        (priceFilter === "under100" && card.price < 100) ||
        (priceFilter === "100to200" && card.price >= 100 && card.price <= 200) ||
        (priceFilter === "over200" && card.price > 200);
      const matchesStock = !showInStockOnly || card.quantity > 0;
      return matchesSearch && matchesPrice && matchesStock;
    });

  return (
    <div className="min-h-screen p-8 pt-24 bg-gray-100">
      <div className="text-sm text-gray-600 mb-4">
        <Link to="/" className="text-purple-700 hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/sets" className="text-purple-700 hover:underline">Sets</Link>
        <span className="mx-2">/</span>
        <span className="font-semibold text-gray-800 capitalize">{setId}</span>
      </div>


      <h1 className="text-3xl font-bold mb-6">Cards for Sale</h1>

      <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search cards by name..."
            className="px-4 py-2 rounded border w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div>
            <label className="block font-medium mb-1">Price</label>
            <select
              className="px-4 py-2 rounded border w-full"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="under100">Under £100</option>
              <option value="100to200">£100 - £200</option>
              <option value="over200">Over £200</option>
            </select>
          </div>

          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={showInStockOnly}
                onChange={() => setShowInStockOnly(!showInStockOnly)}
              />
              Only show in-stock cards
            </label>
          </div>

          <div>
            <label className="block font-medium mb-1">Card Sets</label>
            {allSets.map(set => (
              <label key={set} className="block">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedSets.includes(set)}
                  onChange={() => toggleSet(set)}
                />
                {set.charAt(0).toUpperCase() + set.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCards.length > 0 ? (
            filteredCards.map(card => (
              <CardItem key={card.id} card={card} />
            ))
          ) : (
            <p>No cards match your search/filter.</p>
          )}
        </div>
      </div>
    </div>
  );
}
