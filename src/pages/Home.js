import React from "react";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden bg-masterball-dark text-masterball-neutral m-0 p-0">
      {/* Hero Section */}
      <div
        className="w-screen h-[45vh] bg-cover bg-[position:center_46%] relative"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/b9/7a/25/b97a25fe13f3aa8a128f9bcbba0b0d60.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-masterball-neutral text-4xl sm:text-5xl font-luckiest text-center">
            Welcome to The Master Set Collectables
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-12 px-4 sm:px-8 md:px-16 lg:px-20">
        {/* Row 1: About Us & Follow Us */}
        <div className="flex flex-col md:flex-row gap-6 py-8 w-full">
          {/* About Us (2/3) */}
          <div className="md:w-2/3 w-full bg-[#3A3A3A] rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl text-center font-luckiest mb-4 tracking-widest">About Us</h2>
            <p className="text-lg text-center text-[#cccccc] mb-2">
              We are a small independent business here to supply you with all your Pokemon needs. <br/>
              We offer a range of products from single cards to sealed booster packs and other TCG essentials,
              ideal for those trying to complete their master set, looking for a particular card, or who just want to browse our collection.
              
            </p>
            <p className="text-md text-center text-[#cccccc]">
              Whether you're new to the hobby or a seasoned collector, swing by our store today!
            </p>
          </div>

          {/* Follow Us (1/3) */}
          <div className="md:w-1/3 w-full bg-[#3A3A3A] rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-luckiest mb-6 text-center tracking-widest">Follow Us</h3>
            <div className="flex flex-col items-center gap-6">
              <a
                href="https://www.instagram.com/the_masterset"
                className="flex items-center gap-4 text-masterball-main hover:text-masterball-pink transition hover:scale-105"
              >
                <i className="fab fa-instagram text-2xl"></i>
                <span className="text-md text-[#cccccc]">@the_masterset</span>
              </a>
              <a
                href="https://www.youtube.com/@the_masterset"
                className="flex items-center gap-4 text-masterball-main hover:text-masterball-pink transition hover:scale-105"
              >
                <i className="fab fa-youtube text-2xl"></i>
                <span className="text-md text-[#cccccc]">@The_MasterSet</span>
              </a>
              <a
                href="https://www.tiktok.com/@the_masterset"
                className="flex items-center gap-4 text-masterball-main hover:text-masterball-pink transition hover:scale-105"
              >
                <i className="fab fa-tiktok text-2xl"></i>
                <span className="text-md text-[#cccccc]">@the_masterset</span>
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: How to Find Us, Map, Opening Hours */}
        <div className="flex flex-col md:flex-row gap-6 w-full pb-12">
          {/* How to Find Us */}
          <div className="md:w-1/4 bg-[#3A3A3A] rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-2xl text-masterball-neutral mb-4 font-luckiest tracking-widest text-center">
              How to Find Us
            </h2>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col space-y-3 text-center">
                <p className="text-[#cccccc] text-lg leading-relaxed tracking-wide">
                  We are located at <strong>10 Barnham Road, Barnham, PO22 0ES</strong>.
                </p>
                <p className="text-[#cccccc] text-md leading-relaxed tracking-wide">
                  Come visit us on the second floor of the Barnham Trading Post!
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="md:md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Barnham Trading Post Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.9732899922465!2d-0.640752423131852!3d50.83165865984269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875ae08c5b22abf%3A0x7627fd075ca26d2c!2sBarnham%20Trading%20Post!5e0!3m2!1sen!2suk!4v1748392685010!5m2!1sen!2suk"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>

          {/* Opening Hours */}
          <div className="md:w-1/4 bg-[#3A3A3A] rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-2xl text-masterball-neutral mb-4 font-luckiest tracking-widest text-center">
              Opening Hours
            </h2>
            <div className="flex-1 flex items-center justify-center">
              <ul className="text-[#cccccc] text-xl space-y-3 leading-relaxed tracking-wide">
                <li className="py-1">Monday - Friday: Closed</li>
                <li className="py-1">Saturday: 9:00 AM - 5:30 PM</li>
                <li className="py-1">Sunday: 10:00 AM - 3:30 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
