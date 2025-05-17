import React from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Home() {
  // Dummy cards for Best Cards of the Week section
  const bestCards = [
    { id: 1, name: "Charizard", image: "https://images.pokemontcg.io/base1/4.png", price: 300 },
    { id: 2, name: "Blastoise", image: "https://images.pokemontcg.io/base1/2.png", price: 150 },
    { id: 3, name: "Dragonite", image: "https://images.pokemontcg.io/fossil/4.png", price: 100 },
  ];

  return (
    <div className="min-h-screen p-8 bg-masterball-neutral dark:bg-masterball-dark dark:text-masterball-neutral text-masterball-main pt-24">
      {/* Welcome Section */}
      <div className="py-6 sm:py-10 px-4">
        <div className="max-w-5xl mx-auto text-center bg-white  dark:bg-[#3A3A3A] rounded-2xl shadow-lg px-6 sm:px-12 py-10 sm:py-16 border border-masterball-accent">
          <h1 className="text-3xl sm:text-5xl text-masterball-main dark:text-masterball-neutral mb-6 font-luckiest">Welcome to The Master Set</h1>
          <p className="text-lg sm:text-xl text-gray-700  dark:text-[#cccccc] mb-4">
            Your one-stop shop for premium Pokémon cards — browse by set, find rare gems, and track your collection.
          </p>
          {/*<p className="text-md text-gray-600 dark:text-[#cccccc]">
            Start exploring the collection using the navigation bar above.
          </p>
          <a
            href="/sets"
            className="inline-block bg-masterball-main text-white dark:text-[#cccccc] px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-masterball-primary transform transition-all duration-300 hover:scale-105 mt-6"
          >
            Browse Sets
          </a>*/}
        </div>
      </div>

      {/* Best Cards of the Week Section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-luckiest mb-6">Best Pulls of the Month</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bestCards.map(card => (
            <div key={card.id} className="border border-masterball-pink rounded-lg p-4 bg-white dark:bg-[#3A3A3A] shadow-lg">
              <img src={card.image} alt={card.name} className="w-full h-48 object-contain mb-4" />
              <h3 className="text-lg font-bold">{card.name}</h3>
              
            </div>
          ))}
        </div>
      </div>

      {/* How to Find Us Section */}
      <div className="py-6 sm:py-10 px-4 bg-masterball-neutral dark:bg-masterball-dark">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-6xl mx-auto space-y-10"
          >
            {/* Side-by-side cards */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* How to Find Us */}
              <div className="md:w-1/2 bg-white dark:bg-[#3A3A3A] rounded-2xl shadow-lg p-6 border border-masterball-pink">
                <h2 className="text-2xl text-center dark:text-masterball-neutral text-masterball-main mb-4 font-luckiest">How to Find Us</h2>
                <p className="text-lg text-center text-gray-700 dark:text-[#cccccc] mb-2">
                  We are located at <strong>10 Barnham Road, Barnham, PO22 0ES</strong>. Visit us in person or reach out online!
                </p>
                <p className="text-md text-center text-gray-600 dark:text-[#cccccc] mb-4">
                  Open during business hours for all your card-collecting needs.
                </p>
              </div>

              {/* Social Media */}
              <div className="md:w-1/2 bg-white dark:bg-[#3A3A3A] rounded-2xl shadow-lg p-6 border border-masterball-pink">
                <h3 className="text-2xl font-luckiest dark:text-masterball-neutral text-masterball-main mb-6 text-center">Follow Us</h3>
                <div className="flex flex-col items-center gap-6">
                  <a href="https://www.instagram.com/the_masterset?igsh=MWU3emgyZTNjazhsZQ==" className="flex items-center gap-4 text-masterball-main dark:text-masterball-lilac hover:text-masterball-pink transition hover:scale-105">
                    <i className="fab fa-instagram text-2xl"></i>
                    <span className="text-md text-masterball-dark dark:text-[#e0cfff]">@the_masterset</span>
                  </a>
                  <a href="https://www.youtube.com/@the_masterset" className="flex items-center gap-4 text-masterball-main dark:text-masterball-lilac hover:text-masterball-pink transition hover:scale-105">
                    <i className="fab fa-youtube text-2xl"></i>
                    <span className="text-md text-masterball-dark dark:text-[#e0cfff]">@The_MasterSet</span>
                  </a>
                  <a href="https://www.tiktok.com/@the_masterset?_t=ZN-8wPjUZxF0gI&_r=1" className="flex items-center gap-4 text-masterball-main dark:text-masterball-lilac hover:text-masterball-pink transition hover:scale-105">
                    <i className="fab fa-tiktok text-2xl"></i>
                    <span className="text-md text-masterball-dark dark:text-[#e0cfff]">@the_masterset</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map underneath both cards */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-masterball-pink">
              <iframe
                title="Barnham Trading Post Map"
                src="https://maps.google.com/maps?q=10%20Barnham%20Road,%20Barnham,%20PO22%200ES&output=embed"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
  </div>
  );
}

