/*
    Target = coefficient * 2 ^ (8 * (index - 3))
*/
const target = function (params:number) {
    const paramsHex = params.toString(16)
    const paramsIndex = parseInt(paramsHex.slice(0,2),16)
    const paramsCoefficient = parseInt(paramsHex.slice(2,),16)
    const target = (paramsCoefficient * 2 ** (8 * (paramsIndex - 3))).toString(16)
    return target
}