import React from 'react'
import bgImg from "../../assets/coverHero.png";
import GallerySection2 from './GallerySection2';

const Gallery = () => {
  return (
    <main>
      <section
        className="bg-center bg-cover bg-no-repeat relative h-[30vh] sm:h-[40vh] md:h-[40vh] lg:h-[40vh]"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-45 flex items-center justify-center p-4">
          <h1 className="uppercase text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
            Gallery
          </h1>
        </div>
      </section>

      <section>
        <GallerySection2/>
      </section>
    </main>
  );
}

export default Gallery
