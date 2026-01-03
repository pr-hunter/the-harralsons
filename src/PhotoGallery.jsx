import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import "./PhotoGallery.css";

function PhotoGallery({ images }) {
  const transformRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: transformRef });
  const animatedScrollYProgress = useSpring(scrollYProgress, {
    bounce: 0,
  });
  const yFirst = useTransform(animatedScrollYProgress, [0, 1], ["0vh", "-250vh"]);
  const ySecond = useTransform(animatedScrollYProgress, [0, 1], ["0vh", "-200vh"]);

  return (
    <section ref={transformRef} className="parallax-gallery-section">
      <div className="sticky-container">
        {/* Mobile: Single column with all images */}
        <div className="mobile-gallery">
          {images.map((image, index) => (
            <div key={index} className="parallax-image-wrapper">
              <img
                src={image.src}
                className="parallax-image"
                alt={image.alt || `Gallery image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        
        {/* Desktop: Parallax layout */}
        <div className="desktop-gallery">
          <div className="images-left">
            <motion.div className="images-column" style={{ y: yFirst }}>
              {images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className={clsx("parallax-image-wrapper", {
                    "image-0": index === 0,
                    "image-1": index === 1,
                    "image-2": index === 2,
                    "image-3": index === 3,
                  })}
                >
                  <img
                    src={image.src}
                    className="parallax-image"
                    alt={image.alt || `Gallery image ${index + 1}`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div
            className="images-right"
            style={{ y: ySecond }}
          >
            <div className="images-column">
              {images.slice(4).map((image, index) => (
                <div
                  key={index}
                  className={clsx("parallax-image-wrapper", {
                    "image-right-0": index === 0,
                    "image-right-1": index === 1,
                    "image-right-2": index === 2,
                    "image-right-3": index === 3,
                    "image-right-4": index === 4,
                    "image-right-5": index === 5,
                    "image-right-6": index === 6,
                  })}
                >
                  <img
                    src={image.src}
                    className="parallax-image"
                    alt={image.alt || `Gallery image ${index + 5}`}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
