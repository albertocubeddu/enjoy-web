"use client";

import { XMarkIcon, PlusIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../store/auth-context";
import React, { useRef, useState, useContext } from "react";

const CreateSport = () => {
  const authCtx = useContext(AuthContext);
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddImage = (event) => {
    event.preventDefault(); // Prevent default behavior
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type (optional)
    if (!file.type.match("image/*")) {
      alert("Please select an image file.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleCreateSport = () => {
    // Implement your logic here eventually (commented out for now)
    // console.log("Creating sport...");
  };

  return (
    <div className="gap-y-5">
      <div className="flex justify-between py-2">
        <p className="font-semibold">Create Sport Category</p>
        <button onClick={authCtx.showCreateSport}>
          <XMarkIcon className="w-8 p-2 border border-outline-medium rounded-full" />
        </button>
      </div>

      <form>
        <div className="flex flex-col">
          <label htmlFor="sport-name" className="py-4">
            Sport Name
          </label>
          <input
            type="text"
            placeholder="Enter Sport Name"
            className="block w-full rounded-md border focus:ring-0 focus:outline-none focus:border-primary-primary active:border-primary-primary py-[9px] pl-6 text-sm outline-2 placeholder:text-gray-500"
            max-length="50"
            required
          />
        </div>

        <div className="py-4">
          <p>Sport Image</p>
          <div className="w-36 h-36 bg-primary-light border border-dotted border-primary-primary flex justify-center rounded gap-y-4 mt-3 relative">
            {selectedImage ? (
              <>
                <img
                  src={selectedImage}
                  alt="Selected Sport Image"
                  className="w-36 h-36 object-cover rounded absolute top-0 left-0"
                />
                <button
                  className="absolute top-2 right-2 rounded-full bg-gray-200 hover:bg-gray-300 p-1"
                  onClick={handleRemoveImage}
                >
                  <XMarkIcon className="w-4 text-black hover:text-gray-600" />
                </button>
              </>
            ) : (
              <button
                className="flex items-center text-xs text-primary-primary "
                onClick={handleAddImage}
              >
                Add Photo
                <PlusIcon className="w-3 ml-1" />
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </form>

      <div className="flex justify-end mt-4">
        <button
          className=" text-black font-medium text-sm rounded py-2 px-6 mr-2 border border-black"
          onClick={authCtx.showCreateSport}
        >
          Cancel
        </button>
        <button
          className="bg-primary-primary text-white font-medium text-sm rounded py-2 px-6 border border-transparent"
          onClick={handleCreateSport}
        >
          Create New
        </button>
      </div>
    </div>
  );
};

export default CreateSport;
