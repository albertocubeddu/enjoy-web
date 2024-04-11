"use server";

import { fetchSports } from "@/app/lib/data";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/solid";

import SportsDeleteActionButtonClient from "./SportsDeleteActionButtonClient";

export default async function Sports() {
  // Server component, therefore using the new pattern to get the data from the database
  // This is useful as soon as we do the revalidatePath and re-update the UI without useEffect!
  const totalSports = await fetchSports();

  // Also ensure this component is always server-side! Normally i would use the first component (therefore /app/sports.tsx) as the server component where i do all the fetching and so on. Then i'll start to drill down splitting all the component and trying to get as many SERVER component as i can. 
  // As soon as you get 1 client component in your "tree" everything else be in the client boundary! 

  return (
    <>
      {totalSports.map((sport) => (
        <div
          key={sport.id}
          className="flex-wrap border-[1px] dark:bg-surface-primary-very-light-dark hover:bg-modal dark:hover:bg-surface-light-dark dark:border-outline-medium-dark w-[451px] rounded-lg gap-x-5"
        >
          <SportsDeleteActionButtonClient id={sport.id} />
          <div className="flex items-center p-[16px]">
            <div className="h-[112px] w-[112px] overflow-hidden">
              <Image
                src={sport.image_url}
                alt={sport.name}
                width={112}
                height={112}
                className="rounded-lg h-[100%] w-[100%] object-cover"
              />
            </div>
            <div className="flex flex-col px-4 gap-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPinIcon className="w-4 text-primary-primary mr-1" />
                  <p className="text-sm text-primary-primary ">0 Centers</p>
                </div>
              </div>
              <h3 className="text-dark-400 font-semibold">{sport.name}</h3>
              <div>
                <p className="text-sm text-on-medium">Last Edited:</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
