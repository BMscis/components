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
    actualTarget:Buffer
    nonce: Buffer
    constructor(num: number, pHash: string, mRoot: string, tym: string, trg: string, nonc: string) 
    {
        //LITTLE ENDIAN
        //Version of the coin
        let versionBuffer = Buffer.alloc(4)
        versionBuffer[0] = num
        this.version = versionBuffer
        //Previous hash if any
        this.previousHash = Buffer.from(pHash, "hex")
        //merkel root of transactions not yet done
        this.merkelRoot = Buffer.from(mRoot, "hex")
        //Timestamp
        this.tyme = makeTime(tym)
        //Target to mine
        this.target = Buffer.from(trg, "hex")
        //random number to get hash
        this.nonce = Buffer.from(nonc, "hex")
        //get Actual target
        let newTarget = Buffer.from(trg, "hex")
        this.actualTarget = target(reverseEndian(newTarget).toString("hex"))

    }
    /**
     * 
     * @returns Block Hash
     */
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
    /**
     * Checks if mined block hash is less than target
     * @returns A successfully mined block
     */
    async mine() {
        //BIG ENDIAN
        var now = performance.now()
        const targetHeader = this.target.toString("hex")
        let nonceCounter = 2436436149
        while (true){
            //BIG ENDIAN
            let nonce = bigNonce(nonceCounter)
            //console.log("T1: ",this.target.toString("hex"))
            //console.log("T2: ",this.actualTarget.toString("hex"))
            //console.log("NONCE: ",nonce," : ",nonceCounter)
            //LITTLE ENDIAN
            let header =
                this.version.toString("hex") +
                this.previousHash.toString("hex") +
                this.merkelRoot.toString("hex") +
                this.tyme.toString("hex") +
                targetHeader +
                nonce
            //console.log("HEADER: ",header)
            //LITTLE ENDAIN
            let headerHash = await calculateHash(header)
            //console.log("HASH: ", headerHash.toString("hex"))
            //BIG ENDIAN
            if(evaluateTarget(this.actualTarget, reverseEndian(headerHash))){
                var finish = performance.now()
                console.log("SUCCESS: ", reverseEndian(headerHash).toString("hex"), "Time: ",finish - now )
                return "success"
            }
            nonceCounter++
        }
    }


}

/**
 * @method reverseEndian
 * @summary reverse endiannes of a buffer
 * @param bufr: Buffer 
 * @returns Buffer
 */
const reverseEndian = function (bufr: Buffer): Buffer {
    return bufr.reverse()
}
const setNonce = () => {
    let allocatedBuffer = Buffer.alloc(4)
    return allocatedBuffer
}
const littleNonce = (currentNonce:Buffer) => {
    //LITTLE ENDIAN
    let reversedNonce = reverseEndian(currentNonce)
    return reversedNonce.toString("hex")
}

/**
 * Convert nonce actual value to little endian
 * @param counter Nonce actual value as number
 * @returns Little endian nonce value as Buffer
 */
const bigNonce = (counter:number) => {
    let stringNonce = counter.toString(16)
    //BIG ENDIAN
    let bigNonce = Buffer.from(stringNonce,"hex")
    return reverseEndian(bigNonce).toString("hex")
}
/**
 * Calculate the Target
 * @param params: Hexadecimal Target in Big Endian as String
 * @returns target: Actual target value as Hexadecimal String
 */
const target = (params: string) => {
    const paramsIndex = parseInt(params.slice(0, 2), 16)
    const paramsCoefficient = parseInt(params.slice(2,), 16)
    const target = (paramsCoefficient * 2 ** (8 * (paramsIndex - 3))).toString(16)
    return Buffer.from(target,"hex")
}
/**
 * 
 * @param time Current time in Big Endian Unix Time.
 * @returns Buffer
 */
const makeTime = (time:String):Buffer => Buffer.from(time, "hex")

/**
 * 
 * @returns Current Timestamp in Big Endian Unix time
 */
const getCurrentTimestamp = ():number => Math.round(new Date().getTime() / 1000);

/**
 * 
 * @param num String in Big Endian Hex
 * @returns "Unix Time"
 */
const unixTime = (num: string):number => parseInt(num, 16) * 1000;

/**
 * Receive a concat of block params in Little Endian Hex
 * @implements Double SHA-256
 * @param params version + previousHash + merkelRoot + time + targetHeader + nonce
 * @returns Little Endian block hash in Hex as Buffer
 */
const calculateHash = async function (params: string): Promise<Buffer> {
    //console.log("params: ", params)
    let b = Buffer.from(params, "hex")
    let res1 = await crypto.subtle.digest('SHA-256', b)
    let res2 = await crypto.subtle.digest('SHA-256', res1)
    let arr = Buffer.from(res2)
    //console.log("calculateHash: SHABUFFER ==", arr.toString("hex"))
    return arr
}
/**
 * @method return true if block hash value is less than target value
 * @param tarGet Big endian version of target as a hex string
 * @param headHash Big endian version of block hash as hex string
 * @returns Boolean
 */
const evaluateTarget = function (tarGet: Buffer, headHash: Buffer):Boolean {
    console.log("Hash: ",headHash.toString("hex"))
    console.log("Tar: ",tarGet.toString("hex"))
    switch (parseInt(headHash.toString("hex"),16) < parseInt(tarGet.toString("hex"),16)) {
        case true:
            return true
        case false:
            return false
        default:
            return false
    }
}
// const OneBlock = new blockHeader(
//     1,
//     "9500c43a25c624520b5100adf82cb9f9da72fd2447a496bc600b000000000000",
//     "6cd862370395dedf1da2841ccda0fc489e3039de5f1ccddef0e834991a65600e",
//     "a6c8cb4d",
//     "b3936a1a",
//     "e3143991"
// )
//OneBlock.mine()
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

/**
 * time taken 2166.199999988079
 * nonce 2436437219
 * Actual 0000000000002917ed80650c6174aac8dfc46f5fe36480aaef682ff6cd83c3ca
 * result cac383cdf62f68efaa8064e35f6fc4dfc8aa74610c6580ed1729000000000000
 */
/**
 * result 0bf75173c006cc4fe07c46bcac9baf129a21f56f65f8f302aaef34ff02d75898
 */