import React from 'react';

function Searchbar({ search, setsearch, fetchmoviedata }) {
  return (
    <div className='main mt-4 flex justify-center'>
      <input
        type="text"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        placeholder='Search your movies'
        className='bg-slate-300 px-3 py-1 outline-none border-2 border-grey-500 text-black rounded-l-lg w-80'
      />
      <button
        onClick={fetchmoviedata}
        className='w-20 rounded-r-lg text-white p-2 hover:bg-white hover:text-black'
        style={{ backgroundColor: '#bd9391' }}
      >
        Search
      </button>
    </div>
  );
}

export default Searchbar;
