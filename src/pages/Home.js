import { React, useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [image, setImage] = useState("");

  const fetchAllBreeds = async () => {
    const res = await fetch(`https://dog.ceo/api/breeds/list/all`);
    const dogBreeds = await res.json();
    const breedArray = [];
    for (let key in dogBreeds) {
      for (let key1 in dogBreeds[key]) {
        if (breedArray.includes(key1)) {
          break;
        }
        breedArray.push(key1);
      }
      setBreeds(breedArray);
    }
  };

  const fetchImage = async (breed) => {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const imageData = await res.json();
    setImage(imageData);
  };

  const handleChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const handleClick = (event) => {
    if (breeds.includes(search)) {
      fetchImage(search);
    } else {
      alert("Please enter a correct breed");
    }
  };

  useEffect(() => {
    fetchImage("boxer");
    fetchAllBreeds();
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
