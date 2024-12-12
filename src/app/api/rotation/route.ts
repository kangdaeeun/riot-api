// 1. 환경 변수에서 API 키 가져오기
// process.env.RIOT_API_KEY 를 사용하여 API 키를 가져온다
// API 키가 없는 경우 에러를 발생시킨다
// 2. Riot Games API 호출
// 엔드포인트 : http://kr.api.riotgames.com/lol/platform/v3/champion-rotation
// 요청 헤더에 X-Riot-Token 을 설정하여 API 키를 포함시킨다
// 3. 데이터 변환 및 응답
// 응답 데이터를 ChampionRotation 타입으로 변환
// NextResponse.json() 을 사용하여 JSON 형태로 응답
// 힌트
// 요청 시 headers 옵션을 사용하여 인증 헤더를 설정
// 에러 발생 시 상태 코드와 메시지를 정확히 반환

