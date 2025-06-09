import React from "react";

const Card = ({ data, darkMode }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 py-6">
      {data &&
        data.map((currItem, index) => (
          <div
            key={index}
            className={`w-full sm:w-[300px] shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            {currItem.urlToImage && (
              <img
                src={currItem.urlToImage}
                alt="NEWS"
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h1 className="text-lg font-bold mb-2">
                <a
                  href={currItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {currItem.title}
                </a>
              </h1>
              <p className="text-sm mb-4">
                {currItem.description?.slice(0, 100)}...
              </p>
              <a
                href={currItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
