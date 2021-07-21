import { Buffer } from "buffer";
//Computers read in Little Endian
//Bitcoin data is in little Endian
//reverse to BigEndian or LittleEndian

const blockHeader = class {
    version: Buffer
    previousHash: Buffer
    merkelRoot: Buffer
    tyme: Buffer
    target: Buffer
    nonce: Buffer
    constructor(num: number, pHash: string, mRoot: string, tym: string, trg: string, nonc: string) {
        //LITTLE ENDIAN
        let versionBuffer = Buffer.alloc(4)
        versionBuffer[0] = num
        this.version = versionBuffer

        this.previousHash = Buffer.from(pHash, "hex")

        this.merkelRoot = Buffer.from(mRoot, "hex")

        this.tyme = Buffer.from(tym, "hex")

        this.target = Buffer.from(trg, "hex")

        this.nonce = Buffer.from(nonc, "hex")
    }
    hashBlockHeader() {
        //LITTLE ENDIAN
        let header2 =
            this.version.toString("hex") +
            this.previousHash.toString("hex") +
            this.merkelRoot.toString("hex") +
            this.tyme.toString("hex") +
            this.target.toString("hex") +
            this.nonce.toString("hex")
        console.log("Header2: ", header2)
        calculateHash(header2)
        return
    }
    async mine() {
        //BIG ENDIAN
        const targetHeader = this.target.toString("hex")
        const tarGet = target(reverseEndian(this.target).toString("hex"))
        let nonceCounter = 2436436149
        while (true){
            //BIG ENDIAN
            let nonce = bigNonce(nonceCounter)
            console.log("NONCE: ",nonce," : ",nonceCounter)
            //LITTLE ENDIAN
            let header =
                this.version.toString("hex") +
                this.previousHash.toString("hex") +
                this.merkelRoot.toString("hex") +
                this.tyme.toString("hex") +
                targetHeader +
                nonce
            console.log("HEADER: ",header)
            //LITTLE ENDAIN
            let headerHash = await calculateHash(header)

            console.log("HASH: ", headerHash.toString("hex"))
            //BIG ENDIAN
            if(evaluateTarget(tarGet, reverseEndian(headerHash).toString("hex"))){
                console.log("SUCCESS")
                return "success"
            }
            nonceCounter++
        }
    }


}

const reverseEndian = function (bufr: Buffer): Buffer {
    return bufr.reverse()
}
const setNonce = () =>{
    let allocatedBuffer = Buffer.alloc(4)
    return allocatedBuffer
}
const littleNonce = (currentNonce:Buffer) =>{
    //LITTLE ENDIAN
    let reversedNonce = reverseEndian(currentNonce)
    return reversedNonce.toString("hex")
}
const bigNonce = (counter:number) =>{
    let stringNonce = counter.toString(16)
    //BIG ENDIAN
    let bigNonce = Buffer.from(stringNonce,"hex")
    return reverseEndian(bigNonce).toString("hex")
}
const target = (params: string) => {
    const paramsIndex = parseInt(params.slice(0, 2), 16)
    const paramsCoefficient = parseInt(params.slice(2,), 16)
    const target = (paramsCoefficient * 2 ** (8 * (paramsIndex - 3))).toString(16)
    return target
}
const getCurrentTimestamp = () => Math.round(new Date().getTime() / 1000);
const unixTime = (num: string) => parseInt(num, 16) * 1000;

const calculateHash = async function (params: string) {
    console.log("params: ", params)
    let b = Buffer.from(params, "hex")
    let res1 = await crypto.subtle.digest('SHA-256', b)
    let res2 = await crypto.subtle.digest('SHA-256', res1)
    let arr = Buffer.from(res2)
    console.log("calculateHash: SHABUFFER ==", arr.toString("hex"))
    return arr
}
const evaluateTarget = function (tarGet: string, headHash: string) {
    switch (parseInt(headHash, 16) < parseInt(tarGet, 16)) {
        case true:
            return true
        case false:
            return false
        default:
            return false
    }
}
const OneBlock = new blockHeader(
    1,
    "9500c43a25c624520b5100adf82cb9f9da72fd2447a496bc600b000000000000",
    "6cd862370395dedf1da2841ccda0fc489e3039de5f1ccddef0e834991a65600e",
    "a6c8cb4d",
    "b3936a1a",
    "e3143991"
)
OneBlock.mine()
/*
INPUT Little endian
    "010000" - LE,
    "9500c43a25c624520b5100adf82cb9f9da72fd2447a496bc600b000000000000" - LE,
    "6cd862370395dedf1da2841ccda0fc489e3039de5f1ccddef0e834991a65600e" - LE,
    "a6c8cb4d" - LE,
    "b3936a1a" - LE,
    "e3143991 - LE"
INPUT

OUTPUT 1

00000001 -BE
0000000000000b60bc96a44724fd72daf9b92cf8ad00510b5224c6253ac40095 - BE
0e60651a9934e8f0decd1c5fde39309e48fca0cd1c84a21ddfde95033762d86c - BE
4dcbc8a6 - BE
1a6a93b3 - BE
913914e3 - BE
`
*/