// components/CardSetTile.js
import React from "react";
import { Link } from "react-router-dom";

export default function CardSetTile({ set }) {
  return (
    <Link
      to={`/set/${set.id}`}
      className="block bg-white shadow-md p-6 rounded-lg text-center hover:bg-purple-700 hover:text-white"
    >
      <h2 className="text-xl font-semibold">{set.name}</h2>
    </Link>
  );
}