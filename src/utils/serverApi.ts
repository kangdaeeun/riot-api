// 서버 컴포넌트에서 사용할 데이터 페칭 함수를 작성.(예를 들어, 챔피언 목록과 상세 정보를 가져오는 함수를 정의)
// fetchChampionList 함수를 작성하여 챔피언 목록 가져오기

export async function GET(request: Request) {    //  여기 겟은 사용 불가
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  try {
  } catch {}
}

// export async function GET(request: Request) {
//     // Riot Games API 호출 (엔드포인트, headers에 토큰을 설정하여 API키를 포함시키기)
//     const res = await fetch("https://kr.api.riotgames.com/lol/platform/v3/champion-rotations", {
//       headers: { "X-Riot-Token": process.env.RIOT_API_KEY },
//     });
//     const data = await res.json();
//     return Response.json(data);
//   }
