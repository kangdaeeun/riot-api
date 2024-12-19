// 챔피언 타입 정의

// Champion : 챔피언 목록에서 사용하는 기본 정보 타입
// ChampionDetail : 챔피언 상세 정보에 사용하는 타입

// 힌트
// Riot의 Data Dragon API 에서 제공하는 챔피언 데이터 구조를 참고
// 필요한 경우 타입을 확장하거나 새로운 인터페이스를 생헝할 수 있음

export type ChampionData = {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: Champion; // 챔피언 이름이 키가 됨
  };
};

export type Champion = {
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

// 챔피언 데이터 전체 구조
export type ChampionDetailData = {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: ChampionDetail; // 챔피언 ID를 키로 하는 챔피언 상세 데이터
  };
};

// 챔피언 상세 데이터
export type ChampionDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: ChampionImage;
  skins: ChampionSkin[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  info: ChampionInfo;
  stats: ChampionStats;
  spells: ChampionSpell[];
  passive: ChampionPassive;
  recommended: any[]; // 사용 여부에 따라 상세 타입을 정의하거나 빈 배열로 둡니다.
};

// 챔피언 이미지 데이터
export type ChampionImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

// 챔피언 스킨 데이터
export type ChampionSkin = {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
};

// 챔피언 능력치
export type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

// 챔피언 상세 능력치
export type ChampionStats = {
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

// 챔피언 스킬 데이터
export type ChampionSpell = {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: {
    label: string[];
    effect: string[];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: Record<string, any>;
  effect: (number[] | null)[];
  effectBurn: (string | null)[];
  vars: any[]; // 상세 구조를 정의할 수 있지만, 필요 시 정의
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: ChampionImage;
  resource: string;
};

// 챔피언 패시브 데이터
export type ChampionPassive = {
  name: string;
  description: string;
  image: ChampionImage;
};
