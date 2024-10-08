import { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [data, setData] = useState("");
  const url = "https://api.chucknorris.io/jokes/random";

  const fetchJoke = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data.value);
    } catch (e) {
      console.log(`Error fetching joke: ${e}`);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <div>
        <h1>{data}</h1>
        <button onClick={fetchJoke}>Get Another Joke</button>
      </div>
    </>
  );
};

export default FetchData;
