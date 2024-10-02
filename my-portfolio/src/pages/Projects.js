/**
 * File: Projects.js
 * Author: Jhon Vasquez
 * Student ID: 300901949
 * Date: September 28, 2024
 */

import React, { useState } from 'react';
import './Projects.css'; 

const Projects = () => {
  const [currentPaolaImage, setCurrentPaolaImage] = useState(0);
  const [currentDokiImage, setCurrentDokiImage] = useState(0);

  const paolaImages = ['/Naturals1.jpg', '/paola2.png', '/paola3.png'];
  const dokiImages = ['/doki1.png', '/doki2.png', '/doki3.png'];
  const foodImages = ['/fareph pasta.jpg', '/fareph cake.jpg', '/fareph bowl.jpg', '/toast.jpg'];

  const handleImageClick = (images, currentIndex, setCurrentIndex) => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="projects-page">
      {/* Project 1: Naturals by Paola */}
      <section className="project">
        <div className="project-container">
          <h2 className="project-title">Naturals by Paola</h2>
          <div className="carousel">
            <img
              src={paolaImages[currentPaolaImage]}
              alt="Naturals by Paola"
              onClick={() => handleImageClick(paolaImages, currentPaolaImage, setCurrentPaolaImage)}
            />
          </div>
          <p className="project-description">
            Naturals by Paola is a yogurt, cereal, and jam brand where I developed the entire branding and labels. 
            These labels are currently in use on all their products.
          </p>
        </div>
      </section>

      {/* Project 2: Doki Doki */}
      <section className="project">
        <div className="project-container">
          <h2 className="project-title">Doki Doki</h2>
          <div className="carousel">
            <img
              src={dokiImages[currentDokiImage]}
              alt="Doki Doki"
              onClick={() => handleImageClick(dokiImages, currentDokiImage, setCurrentDokiImage)}
            />
          </div>
          <p className="project-description">
            Doki Doki is a candle brand that wanted a rebranding. I helped them achieve an aesthetic, edgy, 
            and punk style which now reflects in their packaging and future accessory expansions.
          </p>
        </div>
      </section>

      {/* Project 3: Food Photography */}
      <section className="project">
        <div className="project-container">
          <h2 className="project-title">Food Photography</h2>
          <div className="image-grid">
            {foodImages.map((image, index) => (
              <img key={index} src={image} alt={`Food Photography ${index + 1}`} />
            ))}
          </div>
          <p className="project-description">
            Various food photography projects I shot for potential clients and cookbooks.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;

