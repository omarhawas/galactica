import { useState, useEffect } from 'react';

function AstronomyPicture() {
  const [pictureData, setPictureData] = useState(null);

  useEffect(() => {
    async function fetchPictureData() {
      const response = await fetch('/api/nasa');
      const data = await response.json();
      setPictureData(data);
    }

    fetchPictureData();
  }, []);

  if (!pictureData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pictureData.title}</h1>
      <img src={pictureData.url} alt={pictureData.title} />
      <p>{pictureData.explanation}</p>
    </div>
  );
}

export default AstronomyPicture;