"use server";

import { Item } from "@/types/Item";
import { getItem, getVersion } from "@/utils/serverApi";
import Image from "next/image";

export default async function ItemPage() {
  const itemVersion = await getVersion();
  const items: Item[] = await getItem();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">아이템 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.image.full}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="p-4">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${itemVersion}/img/item/${item.image.full}`}
                width={100}
                height={100}
                alt={item.image.full}
                className="mx-auto"
              />
              <h2 className="text-lg font-semibold text-gray-800 mt-4 text-center">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
