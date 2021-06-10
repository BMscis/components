import { Story } from "./story"

//images
import webdev from '../../assets/svg/webdev.gif'
import coa from '../../assets/svg/coa.gif'
import me from '../../assets/svg/me.gif'
import stairs from '../../assets/svg/stairs2.gif'
import { Dimensions } from "../../Classes/spacemaps/dimensions"
export class StoryContainer extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = {}
        this.setup()

    }
    setup(){
        this.dimension = new Dimensions()
        this.dimension.storySetup
        this.getComponents
    }
    
    get getComponents(){
        this.checkedBox = 0
        this.checkedLabel = 0
        this.story = 0
        return
    }
    get checkedBox(){return}
    set checkedBox(val){
        this.checkedBoxes = []
        for(let i = 0; i < 4; i++){
            let xm = document.createElement('input')
            if(i == 0){
                xm.checked = "checked"
            }
            xm.type = "radio"
            xm.name = "slider"
            xm.id = `story-${i+1}`
            this.checkedBoxes.push(xm)
        }
        return
    }
    get checkedLabel(){return}
    set checkedLabel(val){
        this.checkedLabels = []
        for(let i = 0; i < 4; i++){
            let xm = document.createElement('label')
            xm.setAttribute("for", `story-${i+1}`)
            this.checkedLabels.push(xm)
        }
        return
    }
    get story() {
        return this.storyList
    }
    set story(val) {
        var s1 = new Story(
            "3D", "Design", coa, false, 0, "Get access to hyper-realistic 3D designs with real-time animation."
        )
        var s2 = new Story(
            "Web", "Development", webdev, false, 1, "create modern websites."
        )
        var s3 = new Story(
            "Graphic", "Design", me, false, 2, "Visualize your idea and bring it to life with awsome designs."
        )
        var s4 = new Story(
            "UI/UX", "Design", stairs, false, 4, "Create custom user-friendly interfaces with custom widgets."
        )
        return this.storyList = [s1,s2,s3,s4]
    }
    static get observedAttributes() {
        return [""]
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    render(){
        var vr = document.createElement('div')
        vr.classList.add("sc")
        
        this.checkedBoxes.forEach(element =>{
            this.appendChild(element)
        })
        for(let i = 0; i < 4; i++){
            this.checkedLabels[i].for = `story-${i+1}`
            this.checkedLabels[i].id = `es-story-${i+1}`
            this.checkedLabels[i].style.height = this.dimension.storyHeight + "px"
            //this.appendChild(this.checkedLabels[i])
        }
        for(let x = 0; x < 4; x++){
            console.log(this.storyList[x])
            this.checkedLabels[x].appendChild(this.storyList[x])
        }
        this.checkedLabels.forEach(element =>{
            vr.appendChild(element)
        })
        this.appendChild(vr)
    }
    disconnectedCallback(){
        console.log(this.childElementCount)
            for(let i = 0; i < this.childElementCount + 1; i++){
                console.log(i)
                console.log(this.children[0])
                this.removeChild(this.children[0])
                console.log(this.childElementCount)
                i -= 1
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define('es-storycontainer', StoryContainer);