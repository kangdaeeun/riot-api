"use server";

import { Champion } from "@/types/Champion";
import Image from "next/image";

export default async function ChampionList() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );

  const version = await res.json();

  const res2 = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/champion.json`,
    {
      next: { revalidate: 86400 },
    }
  );
  const data = await res2.json();
  const champions: Champion[] = data.data;

  return (
    <div>
      {Object.entries(champions).map(([key, value]) => (
        <div key={value.id}>
          <p>{value.name}</p>
          <p>{value.blurb}</p>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${version[0]}/img/champion/${value.id}.png`}
            width={100}
            height={100}
            alt={value.name}
          />
        </div>
      ))}
    </div>
  );
}
