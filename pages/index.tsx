//components
import AddNewNote from '@/components/addnewnote'
import Notes from '@/components/notes'

//images

//libraries
import Image from 'next/image'

//3rd party

export default function Home() {
  return (
    <>
      <div className="h-[50vh] 2xl:h-[30vh] px-4 flex flex-col gap-5 items-center justify-center">
        <AddNewNote />
      </div>
      <Notes />
    </>
  )
}
