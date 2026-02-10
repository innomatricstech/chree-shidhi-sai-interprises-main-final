import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import "./Home.css";
import HomeHeroText from "./HomeHeroText";

const HomeHero = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch banners from Firestore
  const fetchBanners = async () => {
    try {
      const q = query(
        collection(db, "banners"),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBanners(data);
    } catch (err) {
      console.error("Banner fetch error:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  // ⏳ Loading state
  if (loading) {
    return (
      <div className="h-[300px] md:h-[500px] flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading banners...</p>
      </div>
    );
  }

  // ❌ No banners
  if (banners.length === 0) {
    return (
      <div className="h-[300px] md:h-[500px] flex items-center justify-center">
        <p className="text-gray-500 text-lg">No banners available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[300px] md:h-[500px]">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows
        showThumbs={false}
        showStatus={false}
        interval={4000}
        stopOnHover={false}
        swipeable
        emulateTouch
        className="h-full"
      >
        {banners.map((banner) => (
          <div key={banner.id} className="relative">
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="object-cover w-full h-[300px] md:h-[500px]"
            />

            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Optional text */}
            {banner.title && (
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
                  {banner.title}
                </h2>
              </div>
            )}
          </div>
        ))}
      </Carousel>

      {/* Optional extra hero text component */}
      <HomeHeroText />
    </div>
  );
};

export default HomeHero;
