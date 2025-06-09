import React from 'react';

function Moviecard({ allmoviedata, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!allmoviedata.length) {
    return <div>No movies found.</div>;
  }

  return (
    <div>
      <div className='p-5 flex ps-4 flex-wrap'>
        {allmoviedata.map((item) => {
          const { Poster, Title, Year, imdbID } = item; // Correctly destructure API properties
          return (
            <div className='p-2 w-1/4' key={imdbID}>
              <div className='bg-slate-300 p-3 rounded-lg'>
                <img className='rounded-lg mb-2' src={Poster} alt={Title} />
                <h2 className='text-white text-xl font-bold'>{Title}</h2>
                <h2 className='text-white text-xl font-bold'>Year: {Year}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Moviecard;
