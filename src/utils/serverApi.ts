// 서버 컴포넌트에서 사용할 데이터 페칭 함수를 작성.(예를 들어, 챔피언 목록과 상세 정보를 가져오는 함수를 정의)
// fetchChampionList 함수를 작성하여 챔피언 목록 가져오기

import { Champion } from "@/types/Champion";
import { Item } from "@/types/Item";

// API 정보 가져오기(최신버전으로)
export async function getVersion() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  // json언어를 자스 언어로
  const version = await res.json();
  // 최신버전
  return version[0];
}

// 챔피언 목록 ??
export async function getChampion() {
  try {
    const version = await getVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      {
        next: { revalidate: 86400 },
      }
    );
    const data = await res.json();
    // 챔피언 정보만 가져옴
    const champions: Champion[] = data.data;
    return champions;
  } catch (error) {
    // 에러 처리
    throw new Error(`${error}: 잘못된 페이지 입니다.`);
  }
}

// 상세 정보 불러오는 함수 적고, id 폴더 안에 잇는 디테일 페이지에다가 불러오기

// 특정 챔피언만 가져오는 API
export async function getChampionDetail(id: string) {
  try {
    const version = await getVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`
    );
    const data = await res.json();
    return data.data[id];
  } catch (error) {
    throw new Error(`$(error): 잘못된 페이지 입니다.`);
  }
}

// 아이템 API 가져오기
export async function getItem() {
  try {
    const version = await getVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
    );
    const data = await res.json();
    const items: Item[] = Object.values(data.data)
    // 최신 데이터 가져오기
    return items;
  } catch (error) {
    console.error("getItem 함수 실행 중 오류:", error);
    throw error; // 호출 측에서 처리할 수 있도록 에러를 다시 던짐
  }
}
