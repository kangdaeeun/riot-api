"use server";

import { getChampionDetail } from "@/utils/serverApi";
import Image from "next/image";
type Props = {
  params: {
    id: string;
    title: string;
  }
}

export default async function ChampionDetailList({params}: Props) {
  const championDetail = getChampionDetail(params.id);
  console.log("mmmmmm", championDetail.id)

  return (
    <div>안녕
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