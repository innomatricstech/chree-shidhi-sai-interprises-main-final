import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const Client = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // 🔥 Realtime Firebase Listener
    const unsubscribe = onSnapshot(
      collection(db, "projects"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClients(data);
      },
      (error) => {
        console.error("Firebase error:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-8 md:my-20">
      {/* Heading */}
      <div className="flex items-center justify-center mb-12 px-6 md:px-32">
        <div className="flex-grow border-t w-[70px] border-black"></div>
        <h1 className="text-2xl md:text-4xl font-semibold mx-4 text-amber-500">
          OUR CLIENTS
        </h1>
        <div className="flex-grow border-t w-[70px] border-black"></div>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-7xl">
        {clients.length > 0 ? (
          <Carousel
            responsive={responsive}
            ssr
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center p-6"
              >
                <img
                  src={client.imageUrl}
                  alt="Client Logo"
                  className="h-24 md:h-32 object-contain transition duration-300"
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <p className="text-center text-gray-500">
            No clients available
          </p>
        )}
      </div>
    </div>
  );
};

export default Client;
