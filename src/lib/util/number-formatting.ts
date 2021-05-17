import numeral from 'numeral'

export const simplifyNumber = (number: number): string => {
    let simplifiedNum: string = numeral(number).format('0a')
    return simplifiedNum
}