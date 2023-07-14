import { NewNoteModalProps } from "@/types/NewNoteModalProps";
import { useEscapeKey } from "@/utils/useEscapeKey";

export default function NewNoteModal({ 
  open, 
  closeModal 
}: NewNoteModalProps) {
  if (open) {
    useEscapeKey(() => {
      closeModal();
      document.body.style.overflowY = "inherit"; 
    });
    
    return (
      <>
        <div 
          className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center w-full h-full bg-transparent backdrop-blur-md z-[50] overflow-y-hidden"
        >
          <div className="w-4/5 md:w-3/4 h-3/4 z-[3000] bg-white dark:bg-slate-900 p-6 sm:px-10 sm:py-12 border-[1px] border-opacity-50 border-cyan-600 rounded-xl relative">
            <div 
              className="absolute w-4 h-4 cursor-pointer sm:w-6 sm:h-6 top-6 right-6"
              onClick={() => {
                closeModal();
                document.body.style.overflowY = "inherit"; 
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                  fill="hsl(var(--foreground))"
                />
              </svg>
            </div>
            <form>
              <input
                name="title-input"
                className="w-full pt-2 font-semibold bg-transparent outline-none text:xl sm:text-3xl active:outline-none placeholder:text-gray-400 text-ellipsis"
                placeholder="Add title"
                autoComplete="off"
                spellCheck="false"
              />
              <textarea
                className="w-full scroll-m-4 no-scrollbar h-[50vh] pt-4 text-sm sm:text-lg font-normal bg-transparent outline-none resize-none active:outline-none placeholder:text-gray-400"
                placeholder="Add description"
                spellCheck="false"
              />
            </form>
          </div>
        </div>
      </>
    );
  } else return <></>;
}
