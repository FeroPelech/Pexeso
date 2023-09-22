import "./App.css";
import { useState } from "react";
import SinglePicture from "./components/SinglePicture";

const images = [
  { src: "/img/Bukayo.png" },
  { src: "/img/Jesus.png" },
  { src: "/img/BW.png" },
  { src: "/img/Gabriel.png" },
  { src: "/img/Wilo.png" },
  { src: "/img/MO.png" },
];

function App() {
  const [pictures, setPictures] = useState([]);
  const [turns, setTurns] = useState(0);

  const doubleImages = () => {
    const doubledImages = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((image) => ({ ...image, id: Math.random() }));
    setPictures(doubledImages);
    setTurns(0);
  };

  console.log(pictures);
  console.log(turns);

  return (
    <div className="App">
      <h1>Pexeso</h1>
      <button onClick={doubleImages}>New Game</button>
      <div className="picture-grid">
        {pictures.map((picture) => (
          <SinglePicture key={picture.id} picture={picture} />
        ))}
      </div>
    </div>
  );
}

export default App;
