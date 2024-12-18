"use server";

import { getChampion, getVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export default async function ChampionList() {
  const championVersion = await getVersion();
  const champions = await getChampion();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Object.entries(champions).map(([key, value]) => (
        <Link href={`/champions/${value.id}`}>
          <div
            key={value.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${championVersion}/img/champion/${value.id}.png`}
              width={100}
              height={100}
              alt={value.name}
              className="rounded-lg mx-auto"
            />
            <h2 className="text-lg font-semibold text-center mt-2">
              {value.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
