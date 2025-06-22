import { TeamMembers } from "@/app/(lib)/constants";
import Image from "next/image";

export default function TeamSection() {
    return (
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {TeamMembers.map((person) => (
          <div key={person.name} className="text-center">
            <Image
              className="mx-auto h-24 w-24 rounded-full"
              src={person.imageUrl}
              alt={`${person.name} profile picture`}
              width={96}
              height={96}
            />
            <h3 className="mt-4 text-base font-semibold leading-7 tracking-tight">
              {person.name}
            </h3>
            <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">{person.role}</p>
          </div>
        ))}
      </div>
    )
}
