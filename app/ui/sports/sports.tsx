import { fetchSports } from "@/app/lib/data";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/solid";

export default async function Sports() {
  const totalSports = await fetchSports();

  return (
    <>
      {totalSports.map((sport) => (
        <div className="border border-outline-medium w-[451px] rounded-lg gap-x-5">
          <div key={sport.id} className="flex items-center w-1/2 p-[16px]">
            <Image
              src={sport.image_url}
              alt={sport.name}
              width={112}
              height={112}
              className="rounded-lg"
            />
            <div className="flex flex-col px-4 gap-y-1">
              <div className="flex">
                <MapPinIcon className="w-4 text-primary-primary mr-1" />
                <p className="text-sm text-primary-primary ">0 Centers</p>
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
