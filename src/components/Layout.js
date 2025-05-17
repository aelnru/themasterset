import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // Adjust the path if needed

export default function Layout() {
  return (
    <div className="font-sans bg-masterball-neutral text-masterball-dark dark:bg-masterball-dark dark:text-masterball-white flex flex-col min-h-screen transition-colors duration-300">
      <Navbar />

      {/* Main content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-masterball-main via-masterball-pink to-masterball-dark text-white text-center">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
          <div>
            <h3 className="font-luckiest tracking-widest text-2xl mb-2 text-white">The Master Set</h3>
            
          </div>
          {/*<div>
            <h3 className=" font-luckiest tracking-widest text-lg mb-2">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/sets" className="hover:underline">Browse Sets</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div */}
          <div>
            <h3 className="font-luckiest tracking-wider text-xl mb-2">Visit Us</h3>
            <p className="text-sm leading-relaxed">
              10 Barnham Road<br />
              Barnham, PO22 0ES
            </p>
          </div>
          {/*<div>
            <h3 className="font-luckiest tracking-wider text-xl mb-2">Contact Us</h3>
            <ul className="text-sm space-y-1">
              <li><a href="https://www.instagram.com/the_masterset?igsh=MWU3emgyZTNjazhsZQ==" className="hover:underline">Instagram</a></li>
            </ul>
          </div>*/}
        </div>
        <p className="text-xs pb-4">&copy; {new Date().getFullYear()} The Master Set. All rights reserved.</p>
      </footer>
    </div>
  );
}
