import { useState } from "react";

export default function Accordian() {
  const data = [
    {
      id: 1,
      title: "What is React.js?",
      content:
        "React.js is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components.",
    },
    {
      id: 2,
      title: "What is Tailwind CSS?",
      content:
        "Tailwind CSS is a utility-first CSS framework that allows developers to build modern, responsive designs quickly by using pre-defined utility classes.",
    },
    {
      id: 3,
      title: "What is Redux Toolkit?",
      content:
        "Redux Toolkit is the official, recommended way to write Redux logic. It simplifies state management and helps developers write scalable Redux applications.",
    },
    {
      id: 4,
      title: "How does React Router work?",
      content:
        "React Router enables navigation between different views in a React application by managing the routing and rendering of components dynamically based on the URL.",
    },
    {
      id: 5,
      title: "What is Firebase Authentication?",
      content:
        "Firebase Authentication is a backend service by Google that provides authentication solutions using email/password, Google, Facebook, and other providers.",
    },
  ];
  const [selected, setSelected] = useState(null);
  const [enableMultiSection, SetenableMultiSection] = useState(false);
  const [multipleOption, SetMultiple] = useState([]);

  function handleSingleClick(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multipleOption];
    const findIndexOfMiltipleId = copyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfMiltipleId);
    if (findIndexOfMiltipleId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfMiltipleId, 1);
    SetMultiple(copyMultiple);
  } 

  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <button
          onClick={() => SetenableMultiSection(!enableMultiSection)}
          className="mt-5 w-96 bg-amber-950 text-amber-50 px-4 py-4"
        >
          Enable Multi Selection
        </button>
        {data && data.length > 0 ? (
          data.map((iteam, index) => (
            <div key={index} className=" ">
              <div className="mt-5 flex justify-between w-96 bg-amber-950 text-amber-50 px-4 py-4">
                <h3
                  className=" font-bold"
                  onClick={
                    enableMultiSection
                      ? () => handleMultiSelection(iteam.id)
                      : () => handleSingleClick(iteam.id)
                  }
                >
                  {iteam.title}
                </h3>
                <span className="">+</span>
              </div>
              {enableMultiSection
                ? multipleOption.includes(iteam.id) && (
                    <p className="px-4 py-4">{iteam.content}</p>
                  )
                : selected === iteam.id && (
                    <div className="w-96 bg-amber-950 text-amber-50">
                      <p className="px-4 py-4">{iteam.content}</p>
                    </div>
                  )}
              {/* {selected === iteam.id ? (
                <div className="w-96 bg-amber-950 text-amber-50">
                  <p className="px-4 py-4">{iteam.content}</p>
                </div>
              ) : (
                <h1>Value is Null</h1>
              )} */}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </>
  );
}
  