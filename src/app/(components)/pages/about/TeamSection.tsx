import { TeamMembers } from "@/app/(lib)/constants";
import Image from "next/image";

export default function TeamSection() {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {TeamMembers.map((person) => (
          <div key={person.name} className="text-center bg-white dark:bg-card-dark p-6 rounded-lg border border-gray-200 dark:border-border-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-400 dark:hover:border-blue-400">
            <Image
              className="mx-auto h-24 w-24 rounded-full"
              src={person.imageUrl}
              alt={`${person.name} profile picture`}
              width={96}
              height={96}
            />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-blue-900 dark:text-blue-200">
              {person.name}
            </h3>
            <p className="text-sm leading-6 text-blue-700 dark:text-blue-400">{person.role}</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{person.expertise}</p>
          </div>
        ))}
      </div>
    )
}
