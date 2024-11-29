export enum Rank{
    // berikan value, jika ingin tetap number outputnya maka valuenya diatur menjadi number saja
    PLATINUM = 'Platinum',
    GOLD = 'Gold',
    SILVER = 'Silver'
}

export type Customer = {
    id: number
    name: string
    class: Rank
}