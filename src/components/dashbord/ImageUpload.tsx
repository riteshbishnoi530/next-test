"use client";
import { useState } from "react";

const UploadImage = () => {
  const [uploadImgs, setUploadImgs] = useState<string[]>([]);

  // Event handler for the file input change
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setUploadImgs((prevImgs) => [...prevImgs, ...newImages]);
    }
  };

  // Handler to remove all images
  const removeHandler = () => {
    setUploadImgs([]);
    const fileInput = document.getElementById("upload") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  // Handler to remove individual image
  const removeImage = (index: number) => {
    setUploadImgs((prevImgs) => prevImgs.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-5">
      
        <div className="relative">
          <input
            type="file"
            id="upload"
            hidden
            multiple
            onChange={(e) => handlerChange(e)}
          />
          <label
            htmlFor="upload"
            className={`px-6 py-4 border-2  border-teal-500 rounded-md cursor-pointer hover:bg-teal-100 transition duration-300 ease-in-out`}
          >
            <span className="text-teal-500 text-lg">
              Click to Upload Images
            </span>
          </label>

          {uploadImgs.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-4">
              {uploadImgs.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    className="w-full h-32 object-cover rounded-md shadow-md transition-transform duration-300"
                    src={img}
                    alt="Uploaded image"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-0 right-0 bg-black min-w-[20px] text-white px-2 py-1 rounded-full"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
          {uploadImgs.length > 0 && (
            <button
              onClick={removeHandler}
              className="mt-6 w-fit px-4 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition duration-300"
            >
              Remove All Images
            </button>
          )}
        </div>
      </div>
  );
};

export default UploadImage;