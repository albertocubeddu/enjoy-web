"use server";

import { fetchSports } from "@/app/lib/data";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/solid";
// import { deleteSport } from "@/app/lib/actions";

export default async function Sports() {
  const totalSports = await fetchSports();

  // const handleDelete = (id: any) => {
  //   deleteSport(id);
  // };

  return (
    <>
      {totalSports.map((sport) => (
        <div
          key={sport.id}
          className="flex-wrap border-[.5px] dark:bg-surface-darkextra-light border-outline-medium w-[451px] rounded-lg gap-x-5"
        >
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
