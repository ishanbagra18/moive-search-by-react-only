import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import Moviecard from "./Components/Moviecard";

function App() {
  const [allmoviedata, setallmoviedata] = useState([]);
  const [search, setsearch] = useState('');
  const [loading, setloading] = useState(false);

  const fetchmoviedata = async () => {
    try {
      setloading(true);
      const res = await fetch(`https://omdbapi.com/?s=${search}&apikey=8778a198`);
      const data = await res.json();
      setallmoviedata(data.Search || []); // Handle undefined Search property
      console.log(data.Search);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg">
        <Navbar />
        <Searchbar search={search} setsearch={setsearch} fetchmoviedata={fetchmoviedata} />
        <Moviecard allmoviedata={allmoviedata} loading={loading} />
      </div>
    </>
  );
}

export default App;
