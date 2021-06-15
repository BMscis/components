import { broadcastLatest } from "./p2p";
import { hexToBinary,hex } from "./util";
const BLOCK_GENERATION_INTERVAL = 10;
// in blocks
const DIFFICULTY_ADJUSTMENT_INTERVAL = 10;
export class Block {
    constructor(version,blockheight, merkelRootHash, previousHash, timestamp, data, nBits, nonce) {
        this.version = Int32Array //int32_t 4bytes
        this.previousHash = previousHash; //char[32] SHA256(SHA256()) 32bytes
        this.timestamp = timestamp; //uint32_t (unix epoch time) 4ytes
        this.blockheight = blockheight;
        this.data = data;
        this.merkelRootHash = merkelRootHash; //char[32] 32bytes
        this.nBits = nBits; //uint32_t 4bytes
        this.nonce = nonce; //uint32_t 4bytes
    }
}
export class BlockChain {
    constructor() {
        const genesisBlock = new Block(1.0,0, '91a73664bc84c0baa1fc75ea6e4aa6d1d20c5df664c724e3159aefc2e1186627', '', 1465154705, 'my genesis block!!', 1, 0);
        this.blockchain = [genesisBlock];
    }
    // in seconds
    getBlockchain = () => this.blockchain;
    getLatestBlock = () => this.blockchain[this.blockchain.length - 1];

    getDifficulty = (aBlockchain) => {
        const latestBlock = aBlockchain[this.blockchain.length - 1];
        if (latestBlock.blockheight % DIFFICULTY_ADJUSTMENT_INTERVAL === 0 && latestBlock.blockheight !== 0) {
            return getAdjustedDifficulty(latestBlock, aBlockchain);
        }
        else {
            return latestBlock.nBits;
        }
    };
    getAdjustedDifficulty = (latestBlock, aBlockchain) => {
        const prevAdjustmentBlock = aBlockchain[this.blockchain.length - DIFFICULTY_ADJUSTMENT_INTERVAL];
        const timeExpected = BLOCK_GENERATION_INTERVAL * DIFFICULTY_ADJUSTMENT_INTERVAL;
        const timeTaken = latestBlock.timestamp - prevAdjustmentBlock.timestamp;
        if (timeTaken < timeExpected / 2) {
            return prevAdjustmentBlock.nBits + 1;
        }
        else if (timeTaken > timeExpected * 2) {
            return prevAdjustmentBlock.nBits - 1;
        }
        else {
            return prevAdjustmentBlock.nBits;
        }
    };
    getCurrentTimestamp = () => Math.round(new Date().getTime() / 1000);
    async generateNextBlock(blockData){
        const previousBlock = this.getLatestBlock();
        const nBits = this.getDifficulty(this.getBlockchain());
        console.log('nBits: ' + nBits);
        const nextblockheight = previousBlock.blockheight + 1;
        const nextTimestamp = this.getCurrentTimestamp();
        const newBlock = await this.findBlock(nextblockheight, previousBlock.merkelRootHash, nextTimestamp, blockData, nBits)
        this.addBlock(newBlock)
        //broadcastLatest();
        console.log("GENBLOCK: ",newBlock)
        return newBlock;
    };
    async findBlock(blockheight, previousHash, timestamp, data, nBits){
        let nonce = 0;
        const hashdigest = await this.calculateHash(blockheight, previousHash, timestamp, data, nBits, nonce)
        console.log("FINDBLOCK: ",hashdigest)
        this.hashMatchesDifficulty(hashdigest,nBits)
        // while (true) {
        //     if (this.hashMatchesDifficulty(hashdigest, nBits)) {
        //         console.log("FINDBLOCK: ",hashdigest)
        //         return new Block(blockheight, hashdigest, previousHash, timestamp, data, nBits, nonce);
        //     }
        //     nonce++;
        // }
        //console.log("FINDBLOCK: ",hashdigest)
        //return new Block(blockheight, hashdigest, previousHash, timestamp, data, nBits, nonce);
    };
    async calculateHashForBlock(block){ 
    var hashPromise = await this.calculateHash(block.blockheight, block.previousHash, block.timestamp, block.data, block.nBits, block.nonce)
    return hashPromise
    }
    async calculateHash(blockheight, previousHash, timestamp, data, nBits, nonce){
        const textEC = new TextEncoder("utf-8")
        const textDC = new TextDecoder("utf-8")
        const buffer = textEC.encode([blockheight , previousHash , timestamp , data , nBits , nonce])
        const blockSer = new Uint32Array([blockheight , previousHash , timestamp , data , nBits , nonce])
        const hashDigest = await crypto.subtle.digest('SHA-256', buffer)
        const hashArray = Array.from(new Uint8Array(hashDigest))
        const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('')
        const hashblock = Array.from(blockSer)
        const blockhex = hashblock.map(b => ('00' + b.toString(16)).slice(-2)).join('')
        return [textDC.decode(buffer),blockSer,hashblock,blockhex]
    };
    addBlock = (newBlock) => {
        console.log(newBlock)
        if (this.isValidNewBlock(newBlock, this.getLatestBlock())) {
            this.blockchain.push(newBlock);
        }
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
    hasValidHash(block){
        if (!this.hashMatchesBlockContent(block)) {
            console.log('invalid merkelRootHash, got:' + block.merkelRootHash);
            return false;
        }
        if (!this.hashMatchesDifficulty(block.merkelRootHash, block.nBits)) {
            console.log('block nBits not satisfied. Expected: ' + block.nBits + 'got: ' + block.merkelRootHash);
        }
        return true;
    };
    async hashMatchesBlockContent(block){
        const blockHash = await this.calculateHashForBlock(block)
        return blockHash ;
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
        }
        else {
            console.log('Received blockchain invalid');
        }
    };
}
//# sourceMappingURL=blockchain.js.map