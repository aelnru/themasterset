import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // Adjust the path if needed

export default function Layout() {
  return (
    <div className="font-sans bg-masterball-dark text-masterball-white flex flex-col min-h-screen transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      {/* Main content */}
      <main className="flex-1 w-full max-w-none px-0 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-masterball-main via-masterball-pink to-masterball-dark text-white text-center">
        <div className="w-full max-w-none px-4 py-8 flex flex-col sm:flex-row justify-center items-center gap-8">
          <div>
            <h3 className="font-luckiest tracking-widest text-2xl mb-2 text-masterball-neutral">The Master Set Collectables</h3>
          </div>

          <div>
            <h3 className="font-luckiest tracking-wider text-xl mb-2">Visit Us</h3>
            <p className="text-sm leading-relaxed">
              Barnham Trading Post<br/>
              10 Barnham Road<br />
              Barnham, PO22 0ES
            </p>
          </div>
        </div>

        <p className="text-xs pb-4">&copy; {new Date().getFullYear()} The Master Set Collectables. All rights reserved.</p>
      </footer>
    </div>
  );
}

