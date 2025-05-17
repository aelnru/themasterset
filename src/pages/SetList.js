// pages/SetList.js
import React from "react";
import CardSetTile from "../components/CardSetTile";

const mockSets = [
  { id: "base", name: "Base Set" },
  { id: "jungle", name: "Jungle" },
  { id: "fossil", name: "Fossil" }
];

export default function SetList() {
  return (
    <div className="min-h-screen p-8 bg-gray-100 pt-24"> {/* Added pt-20 to avoid navbar covering content */}
      <h1 className="text-4xl font-bold text-center mb-8">All Pokémon Card Sets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockSets.map(set => (
          <CardSetTile key={set.id} set={set} />
        ))}
      </div>
    </div>
  );
}
