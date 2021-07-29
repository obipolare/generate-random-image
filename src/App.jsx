import React, { useState } from "react";

const App = () => {
  const [imageWidth, setImageWidth] = useState(600);
  const [inputWidth, setInputWidth] = useState("");
  const [imageHeight, setImageHeight] = useState(300);
  const [inputHeight, setInputHeight] = useState("");
  const handleInputChangeWidth = (e) => {
    setInputWidth(e.target.value);
  };
  const handleInputChangeHeight = (e) => {
    setInputHeight(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setImageWidth(parseInt(inputWidth));
    setImageHeight(parseInt(inputHeight));
  };

  return (
    <>
      <main className="flex flex-col items-center h-full">
        <h2 className="m-4 text-3xl font-semibold text-center">
          Generates a ramdon image with the width and the height you want
        </h2>
        <form onSubmit={handleSubmit} className="w-11/12 md:w-8/12 lg:w-6/12">
          <label htmlFor="width">Enter the width</label>
          <input
            type="text"
            id="simple-email"
            class="flex-1 py-2 px-4 bg-gray-800 shadow-sm text-base outline-none block w-full"
            placeholder="Your width"
            autoComplete="off"
            onChange={handleInputChangeWidth}
            value={inputWidth}
            id="width"
          />
          <label htmlFor="height" className="block mt-2">
            Enter the height
          </label>
          <input
            type="text"
            id="simple-email"
            class="flex-1 py-2 px-4 bg-gray-800 shadow-sm text-base outline-none block  w-full"
            placeholder="Your height"
            autoComplete="off"
            id="height"
            onChange={handleInputChangeHeight}
            value={inputHeight}
          />

          <button
            type="submit"
            class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mt-2"
          >
            Generate
          </button>
        </form>
        <figure className="m-4">
          <img
            className="pb-8 rounded"
            src={`https://picsum.photos/${imageWidth}/${imageHeight}`}
            alt="Image"
          />
        </figure>
      </main>
    </>
  );
};

export default App;
