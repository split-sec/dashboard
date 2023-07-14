import { useState } from "react";
import Note from "./note";
import data from "@/mockdata/data.json";
import ViewNoteModal from "./viewnotemodal";

export default function Notes() {
  const [isViewNoteModalOpen, setIsViewNoteModalOpen] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null)

  const openModal = (id: number) => {
    setSelectedNoteId(id);
    setIsViewNoteModalOpen(true);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 px-32 py-6 md:grid-cols-2 lg:grid-cols-3">
        {
          data.map((item, index) => {
            return (
              <Note 
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                onClick={() => {
                  document.body.style.overflowY = "hidden";
                  openModal(item.id - 1);
                }}
              />
            )
          })
        }
      </div>

      <ViewNoteModal 
        open={isViewNoteModalOpen}
        closeModal={() => setIsViewNoteModalOpen(false)}
        title={selectedNoteId === null ? "" : data[selectedNoteId].title}
        description={selectedNoteId === null ? "" : data[selectedNoteId].description}
        id={selectedNoteId === null ? NaN : data[selectedNoteId].id}
      />
    </>
  )
}