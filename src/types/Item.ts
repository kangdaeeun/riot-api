// Item : 아이템 목록에서 사용하는 기본 정보 타입

// 힌트
// Data Dragon API 의 아이템 구조를 참고
// 아이템의 가격 정보와 스탯 정보를 포함하도록 타입을 정의

export type ItemData = {
    type: string;
    version: string;
    basic: BasicItemInfo;
    data: {
      [key: string]: Item; // 아이템 ID를 키로 가지는 아이템 데이터
    };
    groups: ItemGroup[];
    tree: ItemTree[];
  };
  
  export type BasicItemInfo = {
    name: string;
    rune: RuneInfo | null;
    gold: GoldInfo;
    group: string;
    description: string;
    colloq: string;
    plaintext: string;
    consumed: boolean;
    stacks: number;
    depth: number;
    consumeOnFull: boolean;
    from?: string[];
    into?: string[];
    specialRecipe: number;
    inStore: boolean;
    hideFromAll: boolean;
    requiredChampion?: string;
    requiredAlly?: string;
    stats: ItemStats;
    tags: string[];
    maps: {
      [key: string]: boolean; // 맵 ID를 키로 하는 맵 활성화 여부
    };
  };
  
  export type Item = {
    name: string;
    description: string;
    colloq: string;
    plaintext: string;
    into?: string[];
    image: ItemImage;
    gold: GoldInfo;
    tags: string[];
    maps: {
      [key: string]: boolean; // 맵 ID를 키로 하는 맵 활성화 여부
    };
    stats: ItemStats;
    effect?: {
      [key: string]: string | number; // 효과 정보 (키-값 구조)
    };
    depth?: number;
    stacks?: number;
    consumed?: boolean;
    consumeOnFull?: boolean;
    from?: string[];
    requiredChampion?: string;
    requiredAlly?: string;
    inStore?: boolean;
    hideFromAll?: boolean;
    specialRecipe?: number;
  };
  
  export type ItemImage = {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  
  export type GoldInfo = {
    base: number;
    total: number;
    sell: number;
    purchasable: boolean;
  };
  
  export type ItemStats = {
    [key: string]: number; // 스탯 속성과 값 (예: 공격력, 방어력 등)
  };
  
  export type ItemGroup = {
    id: string;
    MaxGroupOwnable: string;
  };
  
  export type ItemTree = {
    header: string;
    tags: string[];
  };
  
  export type RuneInfo = {
    isrune: boolean;
    tier: number;
    type: string;
  };
  