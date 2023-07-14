import { useState } from "react";
import NewNoteModal from "./newnotemodal";

export default function AddNewNote() {
  const [isModalOpen, setIsModalOpen] =
    useState(false);

  return (
    <>
      <h2 className="text-5xl font-extrabold text-center md:text-6xl lg:text-7xl">
        jot down your thoughts
      </h2>
      <div
        className="w-4/5 md:w-2/5 border-[1px] dark:bg-slate-800 border-cyan-600 border-opacity-10 hover:border-opacity-50 transition py-2 px-4 rounded-full dark:text-white text-opacity-50 backdrop-blur-md"
        onClick={() => {
          document.body.style.overflowY = "hidden"; 
          setIsModalOpen(true)
        }}
      >
        Add a new note...
      </div>
      <NewNoteModal 
        open={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
}
