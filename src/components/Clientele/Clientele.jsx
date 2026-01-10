import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import ClientHero from "./ClientHero/ClientHero";

const Clientele = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH PROJECT IMAGES ---------------- */
  const fetchClientImages = async () => {
    try {
      const q = query(
        collection(db, "projects"),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => doc.data().imageUrl);
      setImages(data);
    } catch (error) {
      console.error("Failed to fetch client images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClientImages();
  }, []);

  return (
    <>
      <ClientHero />

      <div className="px-6 py-10 md:px-12 lg:px-24">
        {/* Heading */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-grow border-t w-[70px] border-black"></div>
          <h1 className="text-4xl md:text-2xl font-semibold text-center mx-4 text-amber-500">
            OUR MAJOR CLIENTS
          </h1>
          <div className="flex-grow border-t w-[70px] border-black"></div>
        </div>

        {/* Loader */}
        {loading && (
          <p className="text-center text-gray-500">
            Loading clients...
          </p>
        )}

        {/* Empty state */}
        {!loading && images.length === 0 && (
          <p className="text-center text-gray-500">
            No client images available
          </p>
        )}

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={image}
                alt={`Client ${index + 1}`}
                className="w-full h-40 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/placeholder.svg";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clientele;
