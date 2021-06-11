import { Story } from "./story"
import { ImageBar } from '../bars/imagebar/imagebar'

//images
import webdev from '../../assets/svg/webdev.gif'
import coa from '../../assets/svg/coa.gif'
import me from '../../assets/svg/me.gif'
import stairs from '../../assets/svg/stairs2.gif'
import { Dimensions } from "../../Classes/spacemaps/dimensions"

import one from '../../assets/img/Asset4.png'
import two from '../../assets/img/Asset2.png'
import three from '../../assets/img/espiiforweb.png'
import four from '../../assets/img/jasenalogo.png'
import five from '../../assets/img/Asset5.png'
import six from '../../assets/img/Asset6.png'
import seven from '../../assets/img/phone.png'

export class StoryContainer extends HTMLElement{
    constructor(component, len){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.component = component
        this.len = len
        this.components = {}
        this.setup()

    }
    setup(){
        this.dimension = new Dimensions()
        this.dimension.storySetup
        switch(this.component){
            case 'story':
                this.components = this.getStoryComponents
                return
            case 'imagesetone':
                this.components = this.getBackfaceComponents("one")
                return
            case 'imagesettwo':
                this.components = this.getBackfaceComponents("two")
                return
        }
        return
    }
    
    get getStoryComponents(){
        return {"components":this.story,"inputs": this.checkedBox(4), "labels":this.checkedLabel(4)}
    }
    get checkedBox(){
        return
    }
    checkedBox(val){
        var checkedBoxes = []
        for(var i = 0; i < val; i++){
            var xm = document.createElement('input')
            if(i == 0){
                xm.checked = "checked"
                console.log(this.component,xm.checked)
            }
            xm.type = "radio"
            xm.name = `${this.component}-slider`
            xm.id = `${this.component}-${i+1}`
            checkedBoxes.push(xm)
        }
        return checkedBoxes
    }
    get checkedLabel(){return}
    checkedLabel(val){
        var checkedLabels = []
        for(let i = 0; i < val; i++){
            let xm = document.createElement('label')
            xm.setAttribute("for", `${this.component}-${i+1}`)
            xm.id = `es-${this.component}-${i+1}`
            checkedLabels.push(xm)
        }
        return checkedLabels
    }
    get story() {
        var s1 = new Story(
            "3D", "Design", coa, false, "imagesetone", "Get access to hyper-realistic 3D designs with real-time animation."
        )
        var s2 = new Story(
            "Web", "Development", webdev, false, "imagesettwo", "create modern websites."
        )
        var s3 = new Story(
            "Graphic", "Design", me, false, "imagesethree", "Visualize your idea and bring it to life with awsome designs."
        )
        var s4 = new Story(
            "UI/UX", "Design", stairs, false, "imagesetfour", "Create custom user-friendly interfaces with custom widgets."
        )
        return [s1,s2,s3,s4]
    }
    set story(val) {
        return
    }
    getBackfaceComponents(val){
        return this.getImgSet(val)
    }
    getImgSet(val){
        var imgCont = []
        var imgCont2 = []
        var imgSetOne = [
                [
                    one,
                    'Coart of Arms',
                    'We design family, company, organizational or state escutcheons with personalized mottos.',
                ],
                [
                    two,
                    'Escutcheons',
                    'Rolls of arms are the primary sentiment for brand recognition. Shields have been used across time by noble families and organizations to inform the public about genealogy.'
                ],
                [
                    three,
                    'Corporate Logos',
                    'Make creative graphic symbols to aid and promote brand recognition across different platforms.'
                ],
                [
                    four,
                    'Production Logos',
                    'Get digitized logos that can be animated and be used accross multiple digital platforms.'
                ]
            ]
        var imgSetTwo = [
            [
                five,
                'Social Media Design',
                'Get custom social media design for your websites and chat rooms'
            ],
            [
                six,
                'App Design',
                'Get userflow concepts that customers and users can easily adapt to. '
            ],
            [
                seven,
                'Mobile Design',
                'Get design templates that seamlessly transition from web to mobile. '
            ]
        ]
        switch(val){
            case "one":
                for(let i = 0; i < imgSetOne.length; i++){
                    let imagebar = new ImageBar(imgSetOne[i][0],imgSetOne[i][1],imgSetOne[i][1],imgSetOne[i][2])
                    imgCont.push(imagebar)
                }
                return {"components":imgCont,"inputs": this.checkedBox(4), "labels":this.checkedLabel(4)}
            case "two":
                for(let i = 0; i < imgSetTwo.length; i++){
                    let imagebar2 = new ImageBar(imgSetTwo[i][0],imgSetTwo[i][1],imgSetTwo[i][1],imgSetTwo[i][2])
                    imgCont2.push(imagebar2)
                }
                return {"components":imgCont2,"inputs": this.checkedBox(3), "labels":this.checkedLabel(3)}
        }
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
        for (var [key,val] of Object.entries(this.components.inputs)){
            console.log(this.component,val.checked)
            this.appendChild(val)
        }
        for (var [k,v] of Object.entries(this.components.labels)){
            v.style.height = this.dimension.storyHeight + "px"
            this.components.components[k].style.height = this.dimension.storyHeight + "px"
            v.appendChild(this.components.components[k])
            this.appendChild(v)
        }
        return
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