import { Story } from "./Story"
import { ImageBar } from '../Bars/imagebar/imagebar'
import images from "../AssetImport/assets" 
import { EspiiElement } from "../../Interfaces"
export class StoryContainer extends EspiiElement{
    len?: number
    componentname: string
    constructor(components:string, len?:number){
        super()
        this.componentname = components
        this.len = len
        this.setup()
    }
    async setup(){
        switch(this.componentname){
            case 'story':
                this.getStoryComponents(this.story,this.checkedBox(4),this.checkedLabel(4))
                return
            case 'imagesetone':
                this.getBackfaceComponents("one")
                return
            case 'imagesettwo':
                this.getBackfaceComponents("two")
                return
            case 'imagesethree':
                this.getBackfaceComponents("one")
                return
            case 'imagesetfour':
                this.getBackfaceComponents("one")
                return
        }
    }
    
    async getStoryComponents(komp: Story[] | ImageBar[], input: HTMLInputElement[], label: HTMLLabelElement[]){
        this.componentList = {
            Story : komp,
            Inputs: input,
            Labels: label
        }
        return
    }
    checkedBox(val:number){
        var checkedBoxes = []
        for(var i = 0; i < val; i++){
            var xm = document.createElement('input')
            if(i == 0){
                xm.checked = true
            }
            xm.type = "radio"
            xm.name = `${this.componentname}-slider`
            xm.id = `${this.componentname}-${i+1}`
            checkedBoxes.push(xm)
        }
        return checkedBoxes
    }
    checkedLabel(val:number){
        var checkedLabels = []
        for(let i = 0; i < val; i++){
            let xm = document.createElement('label')
            xm.setAttribute("for", `${this.componentname}-${i+1}`)
            xm.id = `es-${this.componentname}-${i+1}`
            checkedLabels.push(xm)
        }
        return checkedLabels
    }
    get story() {
        var s1 = new Story(
            "3D", "Design", images.coa, false, "imagesetone", "Get access to hyper-realistic 3D designs with real-time animation.",1
        )
        var s2 = new Story(
            "Web", "Development", images.webdev, false, "imagesettwo", "create modern websites.",2
        )
        var s3 = new Story(
            "Graphic", "Design", images.me, false, "imagesethree", "Visualize your idea and bring it to life with awsome designs.",3
        )
        var s4 = new Story(
            "UI/UX", "Design", images.stairs, false, "imagesetfour", "Create custom user-friendly interfaces with custom widgets.",4
        )
            
        return [s1,s2,s3,s4]
    }
    async getBackfaceComponents(val:string){
        return this.getImgSet(val)
    }
    getImgSet(val:string){
        var imgCont = []
        var imgCont2 = []
        var imgSetOne = [
                [
                    images.one,
                    'Coart of Arms',
                    'We design family, company, organizational or state escutcheons with personalized mottos.',
                ],
                [
                    images.two,
                    'Escutcheons',
                    'Rolls of arms are the primary sentiment for brand recognition. Shields have been used across time by noble families and organizations to inform the public about genealogy.'
                ],
                [
                    images.three,
                    'Corporate Logos',
                    'Make creative graphic symbols to aid and promote brand recognition across different platforms.'
                ],
                [
                    images.four,
                    'Production Logos',
                    'Get digitized logos that can be animated and be used accross multiple digital platforms.'
                ]
            ]
        var imgSetTwo = [
            [
                images.five,
                'Social Media Design',
                'Get custom social media design for your websites and chat rooms'
            ],
            [
                images.six,
                'App Design',
                'Get userflow concepts that customers and users can easily adapt to. '
            ],
            [
                images.seven,
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
                this.getStoryComponents(imgCont,this.checkedBox(4),this.checkedLabel(4))
                return 
            case "two":
                for(let i = 0; i < imgSetTwo.length; i++){
                    let imagebar2 = new ImageBar(imgSetTwo[i][0],imgSetTwo[i][1],imgSetTwo[i][1],imgSetTwo[i][2])
                    imgCont2.push(imagebar2)
                }
                this.getStoryComponents(imgCont2,this.checkedBox(3),this.checkedLabel(3))
                return 
        }
    }
    override render(){
        for (var [key,val] of Object.entries(this.componentList.Inputs)){
            this.appendChild(val)
        }
        for (var [k,v] of Object.entries(this.componentList.Labels)){
            v.appendChild(this.componentList.Story[parseInt(k)])
            this.appendChild(v)
        }
        return
    }
}
customElements.define('es-storycontainer', StoryContainer);