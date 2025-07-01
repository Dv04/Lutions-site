import { TeamMembers } from "@/app/(lib)/constants";
import Image from "next/image";

export default function TeamSection() {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {TeamMembers.map((person) => (
          <div key={person.name} className="text-center bg-white/50 dark:bg-neutral-900/50 backdrop-blur-lg p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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
            <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">{person.role}</p>
          </div>
        ))}
      </div>
    )
}
