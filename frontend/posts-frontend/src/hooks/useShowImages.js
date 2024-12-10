import { useState, useEffect } from "react";

const useShowImages = (imagePath) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (imagePath) {
      setImageSrc(`http://localhost:8000${imagePath}`);
    }
  }, [imagePath]);

  return imageSrc;
};

export default useShowImages;
