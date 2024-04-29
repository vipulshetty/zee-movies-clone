import React from 'react';

const FilmCard = ({ imageSrc, title, rating, releaseDate }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg w-40 bg-purple-900 text-white">
      <img className="w-full h-36 object-cover" src={imageSrc} alt={title} />
      <div className="px-4 py-2">
        <div className="font-semibold text-lg mb-2">{title}</div>
        <p className="text-gray-400 text-sm">
          Rating: <span className="bg-white text-purple-900 px-2 py-1 rounded">{rating}</span> | Release Date: {releaseDate}
        </p>
      </div>
    </div>
  );
};

export default FilmCard;
