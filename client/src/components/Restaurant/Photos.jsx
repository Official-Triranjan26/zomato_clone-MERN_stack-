import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// components
import PhotoCollection from "./PhotoCollection";

const Photos = () => {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/1/18624001/a26ce254d26a3c73d83fa91f01d8f29c.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/1/18624001/d34cbcc796c1fc940aa0f919da4c71c9.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/1/18624001/3a65e3e2c0e69b928f063514a951a6a2.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/fde/935301ac668dfc7c7d313a13f8093fde_1652181956.jpg",
    "https://b.zmtcdn.com/data/pictures/0/19555120/5a90905be6d0467990f545e06be73643.jpeg",
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImage}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {photos.map((photo, index) => (
          <PhotoCollection
            key={index}
            openViewer={openViewer}
            index={index}
            image={photo}
            setCurrentImage={setCurrentImage}
          />
        ))}
      </div>
    </>
  );
};
export default Photos;