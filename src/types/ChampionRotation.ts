// ChampionRotation : 챔피언 로테이션 응답 데이터 타입

// 힌트
// Riot API 문서에서 챔피언 로테이션 엔드포인트의 응답 구조를 확인
// 숫자 배열과 같은 기본 타입을 정확히 명시
// 만약, API 문서에서 원하는 값을 제대로 찾지 못한다면, 6번을 먼저 구현해보고 응답값을 확인하면서 타입 완성하기

// export interface ChampionRotation {
//   freeChampionIds: number[];
//   freeChampionIdsForNewPlayers: number[];
//   maxNewPlayerLevel: number;
// }


import { Champion } from "./Champion";

// // 챔피언 로테이션 데이터를 위한 타입 정의
export type ChampionBase = Pick<Champion, "id" | "name" | "title" | "key">;
export interface ChampionRotation {
  freeChampionIds: number[];
  freeChampionIdsForNewPlayers: number[];
  maxNewPlayerLevel: number;
}