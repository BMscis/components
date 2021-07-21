//import { broadcastLatest } from "./p2p.js";
//import { hexToBinary } from "./util.js";
import { Buffer } from "buffer";
//Target nBits
/*
Target threshold is a 256-bit unsigned integer which a header hash must be equal to or less than
The header field for target provides 32bit space thus it is compacted in a 256 base version of scientific notation
0x181bc330 => 0x1bc330 *    256 **  (0x18       - 3)
Big Indian    Significand   Base     Exponential  Bytes in Significand
Output toString(16) => '1bc330000000000000000000000000000000000000000000'
As bytes => Buffer.from(af.toString(16),"hex")
Output => <Buffer 1b c3 30 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
*/
const BLOCK_GENERATION_INTERVAL = 10;
// in blocks
const DIFFICULTY_ADJUSTMENT_INTERVAL = 10;

type HexString = string

declare global{interface TextEncoder{
    encode(input?: string | number): Uint8Array;
}}

const textEncoder = new TextEncoder()
// Convert from utf8 to hex
const toHex = (arr: Array<number>): string => {
    return arr.map(b => ('00' + b.toString(16)).slice(-2)).join('')
}

//create Buffer from string
const encodeStringBuffer = (charCode: string | number): Buffer => {
    let arrayCode = textEncoder.encode(charCode)
    let bfr = Buffer.from(arrayCode)
    return bfr
}
//get string from UINT8Array
const decodeStringBuffer = (stringCode: Buffer): string => {
    return stringCode.toString()
}
function runDemo() {
    const n = 60;
    const b1 = new Uint8Array(n);
    const b2 = new Uint8Array(n+10);
  
    const str = 'This is a string in the ArrayBuffer :)!'
    for (var i = 0; i < str.length; ++i) {
      b1[i] = str.charCodeAt(i);
      b2[i] = i + 33;
    }
  
    // Opening this buffer in the Memory Inspector
    // will open the same view as for opening one for
    // b1.
    const buffer = b1.buffer;
    
    for (var i = str.length; i < n; ++i) {
      b1[i] = i;
      b2[i] = n - i - 1; 
    }
  }
interface EspiiBlock {
    version: Buffer
    previousHash: Buffer
    timestamp: Buffer
    blockheight: Buffer
    data: Buffer
    merkelRootHash: Buffer
    nBits: Buffer
    nonce: Buffer
}
declare var EspiiBlock: {
    prototype: EspiiBlock;
    new(version: Buffer, previousHash: Buffer, timestamp: Buffer, blockheight: Buffer, data: Buffer, merkelRootHash: Buffer, nBits: Buffer, nonce: Buffer): EspiiBlock
}
class Block implements EspiiBlock {
    version: Buffer
    previousHash: Buffer
    timestamp: Buffer
    blockheight: Buffer
    data: Buffer
    merkelRootHash: Buffer
    nBits: Buffer
    nonce: Buffer
    constructor(version: number, previousHash: string, timestamp: number, blockheight: number, data: string, merkelRootHash: string, nBits: number, nonce: number) {
        runDemo()
        const versionBuffer = Buffer.alloc(4)
        versionBuffer[0] = version
        this.version = versionBuffer
        const VersionArray = versionBuffer.buffer
        //this.version=encodeStringBuffer(version.toString()),
        this.previousHash=encodeStringBuffer(previousHash),
        this.timestamp=encodeStringBuffer(timestamp.toString()),
        this.blockheight=encodeStringBuffer(blockheight.toString()),
        this.data=encodeStringBuffer(data),
        this.merkelRootHash=encodeStringBuffer(merkelRootHash),
        this.nBits=encodeStringBuffer(nBits.toString()),
        this.nonce=encodeStringBuffer(nonce.toString())
        // this.version  //int32_t 4bytes
        // this.previousHash; //char[32] SHA256(SHA256()) 32bytes
        // this.timestamp; //uint32_t (unix epoch time) 4ytes
        // this.blockheight;
        // this.data;
        // this.merkelRootHash; //char[32] 32bytes
        // this.nBits; //uint32_t 4bytes
        // this.nonce; //uint32_t 4bytes
    }

    public get HVersion(): HexString {
        return this.version.toString('hex')
    }
    public get HPreviousHash(): HexString {
        return this.previousHash.toString()
    }
    public get HTimestamp(): HexString {
        return parseInt(this.timestamp.toString()).toString(16)
    }
    public get HBlockheight(): HexString {
        return this.blockheight.toString('hex')
    }
    public get HData(): HexString {
        return this.data.toString('hex')
    }
    public get HMerkelRootHash(): HexString {
        return this.merkelRootHash.toString()
    }
    public get HNBits(): HexString {
        return this.nBits.toString('hex')
    }
    public get HNonce(): HexString {
        return this.nonce.toString('hex')
    }

    public get UVersion(): number {
        return parseInt(decodeStringBuffer(this.version))
    }
    public get UPreviousHash(): string {
        return decodeStringBuffer(this.previousHash)
    }
    public get UTimestamp(): number {
        return parseInt(decodeStringBuffer(this.timestamp))
    }
    public get UBlockheight(): number {
        return parseInt(decodeStringBuffer(this.blockheight))
    }
    public get UData(): string {
        return decodeStringBuffer(this.data)
    }
    public get UMerkelRootHash(): string {
        return decodeStringBuffer(this.merkelRootHash)
    }
    public get UNBits(): number {
        return parseInt(decodeStringBuffer(this.nBits))
    }
    public get UNonce(): number {
        return parseInt(decodeStringBuffer(this.nonce))
    }


}
interface EspiiBlockChain {
    genesisblock: Block
    blockchain: Array<Block>
    getBlockchain: () => Array<Block>
    getLatestBlock: () => Block
    getDifficulty: () => number
    getAdjustedDifficulty: () => number
    getCurrentTimestamp: () => number
    generateNextBlock: (potentialBlock: string) => Promise<Block>
    findBlock: (version:Buffer,previousHash: Buffer,timestamp: number,blockheight: number,potentialBlock: string,nBits: number,nonce: number
    ) => Promise<Block>
    calculateHashForBlock:(potentialBlock:Block) => Promise<string>
    calculateHash: (version: HexString, previousHash: HexString, timestamp: HexString, blockheight: HexString, data: HexString, nBits: HexString, nonce: HexString) => Promise<HexString>
    addBlock: (newBlock: Block) => Promise<Boolean>
    isValidBlockStructure: (block:Block) => Boolean
    isValidNewBlock: (newBlock:Block,previousBlock:Block) => Promise<Boolean>
    isValidTimestamp: (newBlock:Block,previousBlock:Block) => Boolean
    hasValidHash: (block:Block) => Promise<Boolean>
    hashMatchesBlockContent: (block:Block) => Promise<Boolean>
    hashMatchesDifficulty: (merkelRootHash:string, nBits:number) => Boolean
    isValidChain: (blockchainToValidate:Array<Block>) => Boolean
    getAccumulatedDifficulty: (block:Array<Block>) => number
    replaceChain: (block:Array<Block>) => Boolean
}
declare var EspiiBlockChain: {
    prototype: EspiiBlockChain
    new(genesisblock: Block): EspiiBlockChain
}
export class BlockChain implements EspiiBlockChain {
    genesisblock: Block
    blockchain: Array<Block>
    
    constructor() {
        this.blockchain = []
        this.genesisblock = new Block(1, '0', 1465154705, 0, 'my genesis block!!', '91a73664bc84c0baa1fc75ea6e4aa6d1d20c5df664c724e3159aefc2e1186627', 0, 0)
        this.blockchain.push(this.genesisblock)
    }
    getBlockchain = () => this.blockchain;
    getLatestBlock = () => this.blockchain[this.blockchain.length - 1];
    getDifficulty = () => {
        if (this.blockchain[this.blockchain.length - 1].UBlockheight % DIFFICULTY_ADJUSTMENT_INTERVAL === 0 && this.blockchain[this.blockchain.length - 1].UBlockheight) {
            return this.getAdjustedDifficulty();
        }
        else {
            return this.blockchain[this.blockchain.length - 1].UNBits;
        }
    };
    getAdjustedDifficulty = () => {
        return 0
    };
    getCurrentTimestamp = () => Math.round(new Date().getTime() / 1000);
    generateNextBlock = async (potentialBlock: string) => {
        const previousBlock = this.blockchain[this.blockchain.length - 1];
        const nBits = this.getDifficulty();
        const nextblockheight =previousBlock.UBlockheight + 1;
        const nextTimestamp = this.getCurrentTimestamp();
                // this.version  //int32_t 4bytes
        // this.previousHash; //char[32] SHA256(SHA256()) 32bytes
        // this.timestamp; //uint32_t (unix epoch time) 4ytes
        // this.blockheight;
        // this.data;
        // this.merkelRootHash; //char[32] 32bytes
        // this.nBits; //uint32_t 4bytes
        // this.nonce; //uint32_t 4bytes
        const newBlock = await this.findBlock(
            previousBlock.version,
            previousBlock.merkelRootHash,
            nextTimestamp,
            nextblockheight, 
            potentialBlock,
            nBits,
            0)
        this.addBlock(newBlock)
        //broadcastLatest();
        console.log("GENBLOCK: ", newBlock)
        return newBlock;
    };
            // this.version  //int32_t 4bytes
        // this.previousHash; //char[32] SHA256(SHA256()) 32bytes
        // this.timestamp; //uint32_t (unix epoch time) 4ytes
        // this.blockheight;
        // this.data;
        // this.merkelRootHash; //char[32] 32bytes
        // this.nBits; //uint32_t 4bytes
        // this.nonce; //uint32_t 4bytes
    findBlock = async (
        version:Buffer,
        previousHash: Buffer,
        timestamp: number,
        blockheight: number,
        potentialBlock: string,
        nBits: number,
        nonce: number
        ) => {
        const hashdigest = await this.calculateHash(
            version.toString("hex"),
            previousHash.toString(),
            timestamp.toString(16), 
            encodeStringBuffer(blockheight).toString("hex"), 
            encodeStringBuffer(potentialBlock).toString("hex"), 
            encodeStringBuffer(nBits).toString("hex"), 
            encodeStringBuffer(nonce).toString("hex"))
        console.log("FINDBLOCK: ", hashdigest)
        //this.hashMatchesDifficulty(hashdigest, nBits)
        //  while (true) {
        //      if (this.hashMatchesDifficulty(hashdigest, nBits)) {
        //          console.log("FINDBLOCK: ",hashdigest)
        //          return new Block(blockheight, hashdigest, previousHash, timestamp, data, nBits, nonce);
        //      }
        //      nonce++;
        //  }
        //console.log("FINDBLOCK: ", hashdigest)
        return new Block(parseInt(version.toString()), previousHash.toString(), timestamp, blockheight, potentialBlock, hashdigest, nBits, nonce);
    };
    calculateHashForBlock = async(block:Block) =>{
        var hashPromise = await this.calculateHash(
            block.HVersion,
            block.HPreviousHash,
            block.HTimestamp, 
            block.HBlockheight, 
            block.HData, 
            block.HNBits, 
            block.HNonce)
            console.log("HASHPROMISE: ",hashPromise)
        return hashPromise
    }
    calculateHash = async (version: HexString, previousHash: HexString, timestamp: HexString, blockheight: HexString, data: HexString, nBits: HexString, nonce: HexString) => {
        const header = version + previousHash + timestamp + blockheight + data + nBits + nonce
        console.log("HEADER: ",header)
        const hexArr = Buffer.from(header,"hex")
        //Test
        const testText = textEncoder.encode("hello")
        const shb1 = await crypto.subtle.digest('SHA-256', testText)
        const bfr = Buffer.from(shb1)
        console.log("Test Hash: ",bfr.toString("hex"))
        const shb2 = await crypto.subtle.digest('SHA-256', shb1)
        const bfr2 = Buffer.from(shb2)
        console.log("Test Hash: ",bfr2.toString("hex"))

        crypto.subtle.verify
        //
        const sha1 = await crypto.subtle.digest('SHA-256', hexArr)
        const sha2 = await crypto.subtle.digest('SHA-256', sha1)

        const hashArray = Buffer.from(sha2)
        const hashHex = hashArray.toString("hex")
        //const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('')
        // const textDC = new TextDecoder()
        // const buffer = textEC.encode(blockheight + previousHash + timestamp + data + nBits + nonce)
        // const hashDigest = await crypto.subtle.digest('SHA-256', buffer)
        // const x = new Int8Array(hashDigest)
        // console.log("HASHDIGEST: ", hashDigest)
        // console.log(textDC.decode(x))
        //const hashArray = Array.from(new Buffer(hashDigest))
        //const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('')
        //const hashblock = Array.from(blockSer)
        //const blockhex = hashblock.map(b => ('00' + b.toString(16)).slice(-2)).join('')
        return hashHex
    };
    addBlock = async (newBlock: Block) => {
        if (await this.isValidNewBlock(newBlock, this.getLatestBlock())) {
            this.blockchain.push(newBlock);
            return true
        }
        else{
            return false
        }
    };
    isValidBlockStructure = (block:Block) => {
        if(typeof block.UBlockheight === 'number' && typeof block.UMerkelRootHash === 'string' && typeof block.UPreviousHash === 'string' && typeof block.UTimestamp === 'number' && typeof block.UData === 'string'){
            return true
        }
        else{
            return false
        }
    };
    isValidNewBlock = async (newBlock:Block, previousBlock:Block) => {
        if (!this.isValidBlockStructure(newBlock)) {
            console.log('invalid structure');
            return false;
        }
        if (previousBlock.UBlockheight + 1 !== newBlock.UBlockheight) {
            console.log('invalid blockheight');
            return false;
        }
        else if (!previousBlock.merkelRootHash.equals(newBlock.previousHash)) {
            console.log('invalid previoushash');
            return false;
        }
        else if (!this.isValidTimestamp(newBlock, previousBlock)) {
            console.log('invalid timestamp');
            return false;
        }
        else{
            const validBlock = await this.hasValidHash(newBlock)
            if(validBlock){
                console.log("success")
                return true
            }
            else{
                console.log("fail")
                return false;

            }
        }
    };
    getAccumulatedDifficulty = (aBlockchain:Array<Block>) => {
        return aBlockchain
            .map((block) => block.UNBits)
            .map((nBits) => Math.pow(2, nBits))
            .reduce((a, b) => a + b);
    };
    isValidTimestamp = (newBlock:Block, previousBlock:Block) => {
        return (previousBlock.UTimestamp - 60 < newBlock.UTimestamp)
            && newBlock.UTimestamp - 60 < this.getCurrentTimestamp();
    };
    hasValidHash = async (block:Block) => {
        if (!this.hashMatchesDifficulty(block.UMerkelRootHash, block.UNBits)) {
            console.log('block nBits not satisfied. Expected: ' + block.UNBits + 'got: ' + block.UMerkelRootHash);
            return false
        }
        else{
            const merkelHash = await this.hashMatchesBlockContent(block)
            switch(merkelHash){
                case true:
                    console.log("MerkelsMatch")
                    return true
                case false:
                    console.log("merkerls no Mas")
                    return false

            }
        }
    };
    hashMatchesBlockContent = async (block:Block) => {
        const blockHash = await this.calculateHashForBlock(block)
        console.log(blockHash)
        console.log()
        console.log(block.HMerkelRootHash)
        return blockHash == block.HMerkelRootHash;
    };
    hashMatchesDifficulty = (merkelRootHash:string, nBits:number) => {
        // const hashInBinary = hexToBinary(merkelRootHash);
        // console.log(hashInBinary)
        // const requiredPrefix = '0'.repeat(nBits);
        // console.log('nBits:', nBits)
        // console.log(requiredPrefix)
        // hashInBinary.startsWith(requiredPrefix);
        return true
    };
    isValidChain = (blockchainToValidate:Array<Block>) => {
        const isValidGenesis = (block:Block) => {
            return JSON.stringify(block) === JSON.stringify(this.blockchain[0]);
        };
        if (!isValidGenesis(blockchainToValidate[0])) {
            return false;
        }
        for (let i = 1; i < blockchainToValidate.length; i++) {
            if (!this.isValidNewBlock(blockchainToValidate[i], blockchainToValidate[i - 1])) {
                return false;
            }
        }
        return true;
    };
    addBlockToChain = (newBlock:Block) => {
        if (this.isValidNewBlock(newBlock, this.getLatestBlock())) {
            this.blockchain.push(newBlock);
            return true;
        }
        else{
            return false
        }
    };
    replaceChain = (newBlocks:Array<Block>) => {
        if (this.isValidChain(newBlocks) &&
            this.getAccumulatedDifficulty(newBlocks) > this.getAccumulatedDifficulty(this.getBlockchain())) {
            console.log('Received blockchain is valid. Replacing current blockchain with received blockchain');
            this.blockchain = newBlocks;
            //broadcastLatest();
            return true
        }
        else {
            console.log('Received blockchain invalid');
            return false
        }
    };
}
