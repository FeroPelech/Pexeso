import "./SinglePicture.css";

export default function SinglePicture({ picture }) {
  return (
    <div className="photo">
      <div>
        <img
          className="front"
          src={picture.src}
          alt="Arsenal player from 2023/24 season."
        ></img>
        <img className="back" src="/img/AL2.jpg" alt="Arsenal logo."></img>
      </div>
    </div>
  );
}
