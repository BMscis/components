(self.webpackChunkespii_components=self.webpackChunkespii_components||[]).push([[33],{"./src/blockchain/blockchain.js":(c,e,o)=>{"use strict";o("./src/blockchain/p2p.js")},"./src/blockchain/p2p.js":(c,e,o)=>{"use strict";o.d(e,{eH:()=>l,g6:()=>u}),o("./src/blockchain/blockchain.js");const n=[];var s;!function(c){c[c.QUERY_LATEST=0]="QUERY_LATEST",c[c.QUERY_ALL=1]="QUERY_ALL",c[c.RESPONSE_BLOCKCHAIN=2]="RESPONSE_BLOCKCHAIN"}(s||(s={}));const l=()=>n,i=c=>{try{return JSON.parse(c)}catch(c){return console.log(c),null}},t=c=>{c.on("message",(e=>{const o=i(e);if(null!==o)switch(console.log("Received message"+JSON.stringify(o)),o.type){case s.QUERY_LATEST:a(c,b());break;case s.QUERY_ALL:a(c,k());break;case s.RESPONSE_BLOCKCHAIN:const e=i(o.data);if(null===e){console.log("invalid blocks received:"),console.log(o.data);break}g(e)}else console.log("could not parse received JSON message: "+e)}))},a=(c,e)=>c.send(JSON.stringify(e)),r=c=>n.forEach((e=>a(e,c))),h=()=>({type:s.QUERY_LATEST,data:null}),k=()=>({type:s.RESPONSE_BLOCKCHAIN,data:JSON.stringify(blockchain.getBlockchain())}),b=()=>({type:s.RESPONSE_BLOCKCHAIN,data:JSON.stringify([blockchain.getLatestBlock()])}),d=c=>{const e=c=>{console.log("connection failed to peer: "+c.url),n.splice(n.indexOf(c),1)};c.on("close",(()=>e(c))),c.on("error",(()=>e(c)))},g=c=>{if(0===c.length)return void console.log("received block chain size of 0");const e=c[c.length-1];if(!blockchain.isValidBlockStructure(e))return void console.log("block structuture not valid");const o=blockchain.getLatestBlock();e.index>o.index?(console.log("blockchain possibly behind. We got: "+o.index+" Peer got: "+e.index),o.hash===e.previousHash?blockchain.addBlockToChain(e)&&r(b()):1===c.length?(console.log("We have to query the chain from our peer"),r({type:s.QUERY_ALL,data:null})):(console.log("Received blockchain is longer than current blockchain"),blockchain.replaceChain(c))):console.log("received blockchain is not longer than received blockchain. Do nothing")},u=c=>{const e=new WebSocket(c);e.on("open",(()=>{(c=>{n.push(c),t(c),d(c),a(c,h())})(e)})),e.on("error",(()=>{console.log("connection failed")}))}},"./src/blockchain/transaction.js":(c,e,o)=>{"use strict";var n=o("./node_modules/elliptic/lib/elliptic.js");new(o.n(n)().ec)("secp256k1")},"./src/blockchain/util.js":(c,e,o)=>{},"?8131":()=>{},"?3fc0":()=>{}},c=>{"use strict";var e=e=>c(c.s=e);c.O(0,[216],(()=>(e("./src/blockchain/blockchain.js"),e("./src/blockchain/p2p.js"),e("./src/blockchain/transaction.js"),e("./src/blockchain/util.js")))),c.O()}]);