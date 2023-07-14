import { NoteProps } from "@/types/NoteProps";

export default function Note({
  title,
  description,
  onClick
}: NoteProps) {
  return (
    <>
      <div
        className="w-full flex flex-col justify-between flex-grow flex-shrink 
                    border-[1px] border-cyan-500 border-opacity-10
                    transition hover:border-opacity-50 hover:dark:bg-slate-800 hover:bg-opacity-50 rounded-md p-2 cursor-pointer h-40"
        onClick={onClick}
      >
        <div className="font-semibold truncate text-md sm:text-lg">
          {title}
        </div>
        <div className="text-sm font-normal sm:text-md line-clamp-4">
          {description}
        </div>
      </div>
    </>
  );
}
