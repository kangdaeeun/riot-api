// Item : 아이템 목록에서 사용하는 기본 정보 타입

// 힌트
// Data Dragon API 의 아이템 구조를 참고
// 아이템의 가격 정보와 스탯 정보를 포함하도록 타입을 정의

export interface Item {
    type: string,
    basic: {
        name: string,
        rune: {
            isrune: boolean,
            tier: number,
            type: string
        },

    }
}