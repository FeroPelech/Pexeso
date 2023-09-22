import "./App.css";
import { useEffect, useState } from "react";
import SinglePicture from "./components/SinglePicture";

const images = [
  { src: "/img/Bukayo.png", matched: false },
  { src: "/img/Jesus.png", matched: false },
  { src: "/img/BW.png", matched: false },
  { src: "/img/Gabriel.png", matched: false },
  { src: "/img/Wilo.png", matched: false },
  { src: "/img/MO.png", matched: false },
];

function App() {
  const [pictures, setPictures] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  let prevTurns = turns;

  const doubleImages = () => {
    const doubledImages = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((image) => ({ ...image, id: Math.random() }));
    setPictures(doubledImages);
    setTurns(0);
  };

  const handleChoice = (picture) => {
    firstChoice ? setSecondChoice(picture) : setFirstChoice(picture);
  };

  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.src === secondChoice.src) {
        setPictures((prevPictures) => {
          return prevPictures.map((picture) => {
            if (picture.src === firstChoice.src) {
              return { ...picture, matched: true };
            } else {
              return picture;
            }
          });
        });
        resetTurn();
      } else {
        resetTurn();
      }
    }
  }, [firstChoice, secondChoice]);

  console.log(pictures);

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns((prevTurns) => prevTurns++);
  };
  return (
    <div className="App">
      <h1>Pexeso</h1>
      <button onClick={doubleImages}>New Game</button>
      <div className="picture-grid">
        {pictures.map((picture) => (
          <SinglePicture
            key={picture.id}
            picture={picture}
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
