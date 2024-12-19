트러블 슈팅
1. fetch를 어느 정도는 알고 있으나 어떻게 쓰이는지 헷갈려하는 모습을 보임

2. Image 컴포넌트를 불러와서 가져오려고 했으나 되지 않았다.
- next.config.mjs 파일에서 보안 문제로 인해 next가 만들어놓은 규칙을 따르지 않아 오류가 났다. 규칙을 따라 도메인을 넣어줘서 해결함
3. 파라미터, 파람스 로 불러오는 데이터에 타입 정의를 준거 같은데 정의가 안됨..
"use server";

import { getChampionDetail } from "@/utils/serverApi";
type Props = {
  params: {
    id: string;
    title: string;
  }
}

export default async function ChampionDetailList({params}: Props): Promise<Props> {
  const championDetail = getChampionDetail(params.id);
  console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ", championDetail.title)

  return (
    <div>안녕
    </div> 
  );
}
- 콘솔에 어떤 데이터를 찍어도 undefined가 나와서 어떤 이유인가 찾아보니 getChampionDetail은 Promise를 반환하는 비동기 함수이므로, 데이터를 가져오려면 반드시 await를 사용해야 함. 이 문제의 원인은 championDetail은 아직 데이터를 가져오기 전의 Promise 객체 상태였기 때문에 undefined가 출력되었음. async와 await는 항상 같이 다닌다는 것을 잊지 말자

4. 챔피언 상세 페이지에 이미지와 스킨 이미지를 가져오고 싶은데 map을 사용해야하는데 태그안에 있는 내용을 돌리는 방식은 처음인거 같아서 헤맴
- <div className="flex ">
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

5. 아이템 이미지가 나오지 않은 문제가 발생
- 이미지 주소를 엔드포인트로 줘서 나오지 않았음. 사이트에 나와있는 주소 형식으로 바꾸니 해결됨

6. map 사용 시 key 값이 중복 사용이 되는 오류가 발생
- 아예 다른 키값으로 줘서 해결했음