"use server";

import { ItemData } from "@/types/Item";
import { getItem, getVersion } from "@/utils/serverApi";
import Image from "next/image";

type Props = {
  params: {
    id: string;
    name: string;
  };
};

// SSG
export default async function Item({ params }: Props) {
  const itemVersion = await getVersion();
  const items: ItemData = await getItem();
  console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ", items)
  return (
    <div>
      {Object.entries(items).map(([a, b]) => (
        <div key={b.id}>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${itemVersion}/img/item/${a}.png`}
            width={100}
            height={100}
            alt={b.name}
          />
          <h2>{b.name}</h2>
        </div>
      ))}
    </div>
  );
}
