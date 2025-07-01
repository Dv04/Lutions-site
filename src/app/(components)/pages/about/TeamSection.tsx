import { TeamMembers } from "@/app/(lib)/constants";
import Image from "next/image";

export default function TeamSection() {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {TeamMembers.map((person) => (
          <div key={person.name} className="flex flex-col text-center bg-white/50 dark:bg-neutral-900/50 backdrop-blur-lg p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
            <div> {/* Added a div to wrap content that shouldn't grow, if image is fixed size */}
              <Image
                className="mx-auto h-24 w-24 rounded-full mb-4"
                src={person.imageUrl}
                alt={`${person.name} profile picture`}
                width={96}
                height={96}
              />
              <h3 className="mt-4 text-base font-semibold leading-7 tracking-tight text-neutral-900 dark:text-neutral-100">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">{person.role}</p>
            </div>
            <p className="mt-2 text-xs leading-5 text-neutral-500 dark:text-neutral-400 flex-grow min-h-[60px]">{person.expertise}</p> {/* Added flex-grow and min-height for alignment */}
            {/* Placeholder for Social Media Icons */}
            <div className="mt-auto pt-4 flex justify-center space-x-3"> {/* mt-auto to push to bottom, pt-4 for spacing */}
              {/* Example: LinkedIn Icon (placeholder) */}
              {/* <a href="#" className="text-neutral-400 hover:text-primary"><span className="sr-only">LinkedIn</span> L </a> */}
              {/* Example: GitHub Icon (placeholder) */}
              {/* <a href="#" className="text-neutral-400 hover:text-primary"><span className="sr-only">GitHub</span> G </a> */}
            </div>
          </div>
        ))}
      </div>
    )
}
