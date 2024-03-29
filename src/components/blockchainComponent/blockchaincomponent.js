import { removeAllChildren } from '../../ComponentKontrol/removeChildKontrol';
import { hide } from '../../ComponentKontrol/showKontrol';
import {BlockChain} from '../../Blockchain/blockchain';
//import {connectToPeers, getSockets, initP2PServer} from '../../blockchain/p2p';

const p2pPort = "ws:/localhost:6001";
export class BlockchainComponent extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = {}
        this.setup()
        return
    }
    static get observedAttributes() {
        return [""]
    }
    setup(){
        this.getComponents
        // this.block = new BlockChain()
        // this.block.generateNextBlock("this is a new block")
        // this.webserver = initP2PServer(p2pPort);
        return
    }
    //
    set newblock(val){
        generateNextBlock(val)
        return
    }
    get peers(){
        return getSockets().map((s) => s._socket.remoteAddress + ':' + s._socket.remotePort)
    }
    set addPeers(val){
        connectToPeers(val)
        return
    }
    get getComponents(){
        return
    }
    //
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        return
    }
    render(){
        this.innerHTML = `
        `
        return
    }
    get styleTemplate(){
        return``
    }
    get htmlTemplate(){
        return``
    }
    disconnectedCallback(){
        //hide(this)
        removeAllChildren(this)
        return
    }
}
customElements.define('es-blockchaincomponent', BlockchainComponent);