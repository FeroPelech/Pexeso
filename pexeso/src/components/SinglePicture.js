import "./SinglePicture.css";

export default function SinglePicture({ picture, handleChoice }) {
  const handleClick = () => {
    handleChoice(picture);
  };

  return (
    <div className="photo">
      <div>
        <img
          className="front"
          src={picture.src}
          alt="Arsenal player from 2023/24 season."
        ></img>
        <img
          className="back"
          src="/img/AL2.jpg"
          onClick={handleClick}
          alt="Arsenal logo."
        ></img>
      </div>
    </div>
  );
}
