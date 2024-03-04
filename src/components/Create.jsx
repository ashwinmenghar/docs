import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Create() {
  const [description, setDescription] = useState();
  const [fileSize, setFileSize] = useState();
  const [tagTitle, setTagTitle] = useState();
  const [footerClose, setFooterClose] = useState(false);
  const [tagContentEnable, setTagContentEnable] = useState(false);
  const navigate = useNavigate();

  const handleDescription = () => {
    if (!description || !fileSize || !tagTitle) {
      alert("Something went wrong");
      return;
    }

    let data = [
      {
        desc: description,
        fileSize: fileSize,
        close: footerClose,
        tag: {
          isOpen: tagContentEnable,
          tagTitle: tagTitle,
          tagColor: "green",
        },
      },
    ];

    const oldData = localStorage.getItem("docs-data");
    if (oldData !== null) {
      const modify = JSON.parse(oldData);
      modify.push(data[0]);
      data = modify;
    }
    localStorage.setItem("docs-data", JSON.stringify(data));
    setTagTitle("");
    setFileSize("");
    setDescription("");
    setFooterClose(false);
    setTagContentEnable(false);

    navigate("/");
    alert("Save Data");
    return;
  };
  return (
    <>
      <div className="container mx-auto p-10">
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900 text-white"
          >
            Description
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <textarea
              name="description"
              id="description"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <hr className="mt-5 mb-5" />
        <div>
          <label
            htmlFor="size"
            className="block text-sm font-medium leading-6 text-gray-900 text-white"
          >
            File Size
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="number"
              className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="size"
              onChange={(e) => setFileSize(e.target.value)}
            />
          </div>
        </div>
        <hr className="mt-5 mb-5" />
        <div>
          <label
            htmlFor="tagTitle"
            className="block text-sm font-medium leading-6 text-gray-900 text-white"
          >
            Tag Title
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="tagTitle"
              onChange={(e) => setTagTitle(e.target.value)}
            />
          </div>
        </div>

        <hr className="mt-5 mb-5" />
        <div>
          <div className="inline-flex items-center">
            <label
              className="block text-sm font-medium mb-2 dark:text-white"
              htmlFor="checkbox"
            >
              Footer Close
            </label>
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="checkbox"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="checkbox"
                onClick={(e) => setFooterClose(!footerClose)}
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
        </div>

        <hr className="mt-5 mb-5" />
        <div>
          <div className="inline-flex items-center">
            <label
              className="block text-sm font-medium mb-2 dark:text-white"
              htmlFor="checkbox1"
            >
              Tag Content Enable
            </label>
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="checkbox1"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="checkbox1"
                onClick={(e) => setTagContentEnable(!tagContentEnable)}
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
          <button
            className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 flex items-center justify-center"
            onClick={handleDescription}
          >
            Save changes
          </button>
        </div>
      </div>
    </>
  );
}

export default Create;
