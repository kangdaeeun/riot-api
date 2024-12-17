// 챔피언 타입 정의

// Champion : 챔피언 목록에서 사용하는 기본 정보 타입
// ChampionDetail : 챔피언 상세 정보에 사용하는 타입

// 힌트
// Riot의 Data Dragon API 에서 제공하는 챔피언 데이터 구조를 참고
// 필요한 경우 타입을 확장하거나 새로운 인터페이스를 생헝할 수 있음

type ChampionData = {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: Champion; // 챔피언 이름이 키가 됨
  };
};

type Champion = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfo;
  image: ChampionImage;
  tags: string[];
  partype: string;
  stats: ChampionStats;
};

type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

type ChampionImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type ChampionStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};
