//import { broadcastLatest } from "./p2p.js";
//import { hexToBinary } from "./util.js";
const BLOCK_GENERATION_INTERVAL = 10;
// in blocks
const DIFFICULTY_ADJUSTMENT_INTERVAL = 10;

const textEncoder = new TextEncoder()
const textDecoder = new TextDecoder()

ype

const toHex = (arr:Array<number>):string =>{
    return arr.map(b => ('00' + b.toString(16)).slice(-2)).join('')
}

const hexStringBuffer = (hxstr:string):Uint8Array =>{
    return textEncoder.encode(hxstr)
}
const hexNumberBuffer = (hxstr:number):Uint8Array =>{
    return textEncoder.encode(toHex([hxstr]))
}

interface EspiiBlock {
    version: Uint8Array
    previousHash: Uint8Array
    timestamp: Uint8Array
    blockheight: Uint8Array
    data: Uint8Array
    merkelRootHash: Uint8Array
    nBits: Uint8Array
    nonce: Uint8Array
    getheight(): number
}
declare var EspiiBlock: {
    prototype: EspiiBlock;
    new(version: Uint8Array, previousHash: Uint8Array, timestamp: Uint8Array, blockheight: Uint8Array, data: Uint8Array, merkelRootHash: Uint8Array, nBits: Uint8Array, nonce: Uint8Array): EspiiBlock
}
class Block extends EspiiBlock {
    constructor(version: number, previousHash: string, timestamp: number, blockheight: number, data: string, merkelRootHash: string, nBits: number, nonce: number) {
        super(
            hexNumberBuffer(version),
            hexStringBuffer(previousHash),
            hexNumberBuffer(timestamp),
            hexNumberBuffer(blockheight),
            hexStringBuffer(data),
            hexStringBuffer(merkelRootHash),
            hexNumberBuffer(nBits),
            hexNumberBuffer(nonce),
            )
        // this.version  //int32_t 4bytes
        // this.previousHash; //char[32] SHA256(SHA256()) 32bytes
        // this.timestamp; //uint32_t (unix epoch time) 4ytes
        // this.blockheight;
        // this.data;
        // this.merkelRootHash; //char[32] 32bytes
        // this.nBits; //uint32_t 4bytes
        // this.nonce; //uint32_t 4bytes
    }
    getheight = () => this.blockheight

}
interface EspiiBlockChain {
    genesisblock: Block
    blockchain: Array<Block>
    getBlockchain: () => Array<Block>
    getLatestBlock: () => Block
    getDifficulty: () => number
    getAdjustedDifficulty: () => number
    getCurrentTimestamp: () => number
    generateNextBlock: (potentialBlock:Block) => Promise<Block>
    findBlock: (nextblockheight:number, merkelRootHash:string, nextTimestamp:number, blockData:Block, nBits:number) => Promise<Block>
    calculateHashForBlock: () => string
    calculateHash: (version: Uint8Array, previousHash: Uint8Array, timestamp: string, blockheight: string, data: Uint8Array, nBits: string, nonce: string) => Promise<string>
    addBlock: (newBlock:Block) => Boolean
    isValidBlockStructure: () => Boolean
    isValidNewBlock: () => Boolean
    isValidTimestamp: () => Boolean
    hasValidHash: () => Boolean
    hashMatchesBlockContent: () => Boolean
    hashMatchesDifficulty: () => Boolean
    isValidChain: () => Boolean
    getAccumulatedDifficulty: () => string
    replaceChain: () => Boolean
}
declare var EspiiBlockChain: {
    prototype: EspiiBlockChain
    new(genesisblock: Block): EspiiBlockChain
}
class BlockChain extends EspiiBlockChain {
    getBlockchain = () => this.blockchain;
    getLatestBlock = () => this.blockchain[this.blockchain.length - 1];
    constructor() {
        super(new Block(1, '91a73664bc84c0baa1fc75ea6e4aa6d1d20c5df664c724e3159aefc2e1186627', 1465154705, 0, 'my genesis block!!', "0", 0, 0))
        this.blockchain.push(this.genesisblock)
    }
    getDifficulty = () => {
        if (this.blockchain[this.blockchain.length - 1].blockheight % DIFFICULTY_ADJUSTMENT_INTERVAL === 0 && this.blockchain[this.blockchain.length - 1].blockheight !== 0) {
            return this.getAdjustedDifficulty();
        }
        else {
            return this.blockchain[this.blockchain.length - 1].nBits;
        }
    };
    getAdjustedDifficulty = () => {
        return 0
    };
    getCurrentTimestamp = () => Math.round(new Date().getTime() / 1000);
    generateNextBlock = async (potentialBlock:Block) => {
        const previousBlock = this.blockchain[this.blockchain.length - 1];
        const nBits = this.getDifficulty();
        const nextblockheight = previousBlock.blockheight + 1;
        const nextTimestamp = this.getCurrentTimestamp();
        const newBlock = await this.findBlock(nextblockheight, previousBlock.merkelRootHash, nextTimestamp, potentialBlock, nBits)
        this.addBlock(newBlock)
        //broadcastLatest();
        console.log("GENBLOCK: ", newBlock)
        return newBlock;
    };
    findBlock = async (blockheight:number, previousHash:string, timestamp:number, potentialBlock:Block, nBits:number) => {
        let nonce = 0;
        let version = 0
        const hashdigest = await this.calculateHash(version.toString(), previousHash, timestamp.toString(), blockheight.toString(), potentialBlock.data, nBits.toString(), nonce.toString())
        console.log("FINDBLOCK: ", hashdigest)
        this.hashMatchesDifficulty(hashdigest, nBits)
        //  while (true) {
        //      if (this.hashMatchesDifficulty(hashdigest, nBits)) {
        //          console.log("FINDBLOCK: ",hashdigest)
        //          return new Block(blockheight, hashdigest, previousHash, timestamp, data, nBits, nonce);
        //      }
        //      nonce++;
        //  }
        console.log("FINDBLOCK: ", hashdigest)
        return new Block(version, previousHash, timestamp, blockheight, potentialBlock.data, hashdigest, nBits, nonce);
    };
    async calculateHashForBlock(block) {
        var hashPromise = await this.calculateHash(block.blockheight, block.previousHash, block.timestamp, block.data, block.nBits, block.nonce)
        return hashPromise
    }
    calculateHash = async (version:string, previousHash:string, timestamp:string, blockheight:string, data:string, nBits:string, nonce:string) => {
        const header = version + previousHash + timestamp + blockheight + data + nBits + nonce
        const textEC = new TextEncoder().encode(header)

        const sha1 = await crypto.subtle.digest('SHA-256', textEC)
        const sha2 = await crypto.subtle.digest('SHA-256', sha1)

        const hashArray = Array.from(new Uint32Array(sha2))
        const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('')
        // const textDC = new TextDecoder()
        // const buffer = textEC.encode(blockheight + previousHash + timestamp + data + nBits + nonce)
        // const hashDigest = await crypto.subtle.digest('SHA-256', buffer)
        // const x = new Int8Array(hashDigest)
        // console.log("HASHDIGEST: ", hashDigest)
        // console.log(textDC.decode(x))
        //const hashArray = Array.from(new Uint8Array(hashDigest))
        //const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('')
        //const hashblock = Array.from(blockSer)
        //const blockhex = hashblock.map(b => ('00' + b.toString(16)).slice(-2)).join('')
        return hashHex
    };
    addBlock = (newBlock:Block) => {
        if (this.isValidNewBlock(newBlock, this.getLatestBlock())) {
            this.blockchain.push(newBlock);
            return true
        }
        return false
    };
    isValidBlockStructure = (block) => {
        return typeof block.blockheight === 'number'
            && typeof block.merkelRootHash === 'string'
            && typeof block.previousHash === 'string'
            && typeof block.timestamp === 'number'
            && typeof block.data === 'string';
    };
    isValidNewBlock = (newBlock, previousBlock) => {
        if (!this.isValidBlockStructure(newBlock)) {
            console.log('invalid structure');
            return false;
        }
        if (previousBlock.blockheight + 1 !== newBlock.blockheight) {
            console.log('invalid blockheight');
            return false;
        }
        else if (previousBlock.merkelRootHash !== newBlock.previousHash) {
            console.log('invalid previoushash');
            return false;
        }
        else if (!this.isValidTimestamp(newBlock, previousBlock)) {
            console.log('invalid timestamp');
            return false;
        }
        else if (!this.hasValidHash(newBlock)) {
            return false;
        }
        return true;
    };
    getAccumulatedDifficulty = (aBlockchain) => {
        return aBlockchain
            .map((block) => block.nBits)
            .map((nBits) => Math.pow(2, nBits))
            .reduce((a, b) => a + b);
    };
    isValidTimestamp = (newBlock, previousBlock) => {
        return (previousBlock.timestamp - 60 < newBlock.timestamp)
            && newBlock.timestamp - 60 < this.getCurrentTimestamp();
    };
    hasValidHash(block) {
        if (!this.hashMatchesBlockContent(block)) {
            console.log('invalid merkelRootHash, got:' + block.merkelRootHash);
            return false;
        }
        if (!this.hashMatchesDifficulty(block.merkelRootHash, block.nBits)) {
            console.log('block nBits not satisfied. Expected: ' + block.nBits + 'got: ' + block.merkelRootHash);
        }
        return true;
    };
    async hashMatchesBlockContent(block) {
        const blockHash = await this.calculateHashForBlock(block)
        return blockHash;
    };
    hashMatchesDifficulty = (merkelRootHash, nBits) => {
        const hashInBinary = hexToBinary(merkelRootHash);
        console.log(hashInBinary)
        const requiredPrefix = '0'.repeat(nBits);
        console.log('nBits:', nBits)
        console.log(requiredPrefix)
        return hashInBinary.startsWith(requiredPrefix);
    };
    isValidChain = (blockchainToValidate) => {
        const isValidGenesis = (block) => {
            return JSON.stringify(block) === JSON.stringify(genesisBlock);
        };
        if (!isValidGenesis(blockchainToValidate[0])) {
            return false;
        }
        for (let i = 1; i < blockchainToValidate.length; i++) {
            if (!isValidNewBlock(blockchainToValidate[i], blockchainToValidate[i - 1])) {
                return false;
            }
        }
        return true;
    };
    addBlockToChain = (newBlock) => {
        if (this.isValidNewBlock(newBlock, this.getLatestBlock())) {
            this.blockchain.push(newBlock);
            return true;
        }
        return false;
    };
    replaceChain = (newBlocks) => {
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
