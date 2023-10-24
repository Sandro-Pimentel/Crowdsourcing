declare interface IAction {
    img?: string,
    title?: string,
    author?: string, 
    description?: string,
    address?: AddressType,
    amountCollected?: number,
    totalGoal?: number,
    finalDate?: string
}

declare type AddressType = {
    uf?: string,
    city?: string, 
    neighborhood?: string
}