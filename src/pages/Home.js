import { React, useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [image, setImage] = useState("");

  const fetchAllBreeds = async () => {
    const res = await fetch(`https://dog.ceo/api/breeds/list/all`);
    const dogBreeds = await res.json();
    console.log(dogBreeds);
  };

  const fetchImage = async (breed) => {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const imageData = await res.json();
    setImage(imageData);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);

    console.log("value is:", event.target.value);
  };

  const handleClick = (event) => {
    fetchImage(search);
  };

  useEffect(() => {
    fetchImage("boxer");
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
