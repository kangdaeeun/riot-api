"use server";

import { getChampion, getVersion } from "@/utils/serverApi";

export default async function ChampionDetail() {
  const championVersion = await getVersion();
  const champions = await getChampion();

  return (
    <div>{Object.entries(champions).find(()=>(
      
    ))}</div>
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