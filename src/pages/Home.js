import { React, useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);

    console.log("value is:", event.target.value);
  };

  const handleClick = (event) => {
    console.log(search);
  };

  const [image, setImage] = useState("");

  const fetchImage = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const imageData = await res.json();
    setImage(imageData);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="Home">
      <div className="div-one">
        <input id="message" type="text" onChange={handleChange} />
      </div>
      <div className="div-two">
        <button onClick={handleClick}>test</button>
      </div>
      <div className="div-three">
        <img src={image.message} alt="" />
      </div>
    </div>
  );
};

export default Home;
