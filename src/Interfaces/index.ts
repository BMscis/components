import { Dimensions } from "../Classes/SpaceMaps/Dimensions";
import { removeAllChildren } from "../ComponentKontrol/removeChildKontrol";
import { hide, show } from "../ComponentKontrol/showKontrol";
    interface EspiiComponentMap{
    EspiiComponent    ?: HTMLElement
    Image             ?: HTMLImageElement
    ImageContainer    ?: HTMLElement
    CardHeader        ?: HTMLElement
    Paragraph         ?: HTMLElement
    AnchorButton      ?: HTMLElement
    StoryBackface     ?: HTMLElement
    CloseHeading      ?: HTMLElement
    ScrollPad         ?: HTMLElement
    StoryContainer    ?: HTMLElement
    Story             ?: HTMLElement
    ImageBar          ?: HTMLElement
    Inputs            ?: HTMLInputElement | Array<HTMLInputElement>
    Labels            ?: HTMLLabelElement | Array<HTMLLabelElement>
    ToggleButton      ?: HTMLElement
    PrevToggleButton  ?: HTMLElement
    NextToggleButton  ?: HTMLElement
    BusinessCard      ?: HTMLElement
    Text              ?: Text
    Blockchain        ?: HTMLElement
    TextBoard         ?: HTMLElement
    Graph             ?: HTMLElement
    AboutUs           ?: HTMLElement
    CryptoMeter       ?:HTMLElement       
    Portfolio         ?:HTMLElement
}

export interface Component <EspiiComponentMap> {
    [name: string]: EspiiComponentMap | null;
    [name: number]: EspiiComponentMap | null;
    /**
     * Performs the specified action for each node in an list.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
}

export interface ComponentList <EspiiComponentMap> {
    [name: string]: EspiiComponentMap[]  | null;
    [name: number]: EspiiComponentMap[]  | null;
    /**
     * Performs the specified action for each node in an list.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
}
export interface ComponentDictionary <EspiiComponentMap> {
    [name: string]: {[name: string]:EspiiComponentMap} | null;
    //[name: number]: EspiiComponentMap[] | null;
    /**
     * Performs the specified action for each node in an list.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
}

interface EspiiComponent extends HTMLElement{
    //name<K extends keyof EspiiComponentMap>(type: EspiiComponentMap[K]):EspiiComponent
}

export class EspiiElement extends HTMLElement {
    send?(text: boolean | string):void;
    component:Component<EspiiComponent>
    componentList?: ComponentList<EspiiComponent> 
    componentDictionary?: ComponentDictionary<EspiiComponent>
    dimension?: Dimensions
    sendComponents?: EspiiComponent[]
    connectedCallback() {
        this.render();
        //show(this)
        return
    }
    disconnectedCallback() {
        //hide(this)
        removeAllChildren(this)
        return
    }
    render(args?:string) {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`, "color:#cd4cf7", "color:black", "color:#0ee232")
        if(this.sendComponents){
            for (var [key, val] of Object.entries(this.sendComponents)) {
                this.appendChild(val)
            }
        }
    }
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        this.component = {}
        //this.dimension = new Dimensions()
    }
}

