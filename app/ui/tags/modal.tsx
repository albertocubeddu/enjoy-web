"use client";

import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal}>Create Tag</button>
      {isOpen && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto hidden"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed bg-gray-500 opacity-75 inset-0 z-10 rounded-lg sm:h-screen sm:fixed"
              aria-hidden="true"
            ></div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-5 sm:p-6 sm:rounded-t-lg">
                <h1
                  className="text-xl font-bold text-gray-900 leading-tight sm:text-2xl sm:leading-9"
                  id="modal-title"
                >
                  Create Tag
                </h1>
              </div>
              <div className="sm:block sm:m-1 sm:p-6">
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase text-xs font-bold text-gray-700 mb-2"
                      htmlFor="grid-first-name"
                    >
                      Tag Name
                    </label>
                    <input
                      type="text"
                      id="grid-first-name"
                      name="grid-first-name"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white-500"
                      placeholder="Enter tag name"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase text-xs font-bold text-gray-700 mb-2"
                      htmlFor="grid-last-name"
                    >
                      Tag Icon
                    </label>
                    <select
                      id="grid-last-name"
                      name="grid-last-name"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white-500"
                    >
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:py-4">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:leading-4 font-medium"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:leading-4 font-medium ml-4"
                  onClick={toggleModal}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
