"use server";

import { ChampionDetail } from "@/types/Champion";
import { getChampionDetail, getVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    id: string;
    name: string;
  };
};

export default async function ChampionDetailList({ params }: Props) {
  const championVersion = await getVersion();
  const championDetail: ChampionDetail = await getChampionDetail(params.id);

  // indexOf 를 사용하여 내가 누른 값의 id와 눌린 id값이 같다면 그 id를 가진 데이터를 보여줘!! 를 작성하고 싶음
  return (
    <div>
      <h2>
        <Link href="/champions">뒤로가기</Link>
      </h2>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${championVersion}/img/champion/${params.id}.png`}
        width={300}
        height={300}
        alt={championDetail.name}
        className="rounded-lg mx-auto"
      />
      <div className="flex ">
        {championDetail.skins.map((skin) => {
          return (
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.id}_${skin.num}.jpg`}
              width={80}
              height={100}
              alt={params.name}
              className="rounded-lg mx-auto"
            />
          );
        })}
      </div>
      <h2>{championDetail.name}</h2>
      <h2>{championDetail.title}</h2>
      <h2>{championDetail.lore}</h2>
    </div>
  );
}

// type Props = {
//   params: {
//     id: number;   // 폴더 대괄호의 명과 같아야 함
//   };
// };

// // 동적 라우팅 예시
// const PageDetailPage = ({ params }: Props) => {
//   return <>ID: {params.id} Page</>;
// };

// export default PageDetailPage;
