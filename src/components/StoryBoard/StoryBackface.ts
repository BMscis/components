import { EspiiElement } from '../../Interfaces/index'
import { ScrollPad } from '../Typography/ScrollPad/ScrollPad'
import { StoryContainer } from './StoryContainer'
export class StoryBackface extends EspiiElement {
    imageset: string
    /**
     * 
     * @param imageset A list of images to be displayed
     * @returns A carousel component of images
     */
    constructor(imageset:string,identity:string) {
        super()
        this.imageset = imageset
        this.setAttribute("id",identity + "-" + imageset + "-backface")
        this.setup()
        return
    }
    setup() {
        this.getComponents
        this.addEventListener('resize', e => {
            var html = document.querySelector('html').getAttribute('mobi')
            if (html === 'true') {
                this.setAttribute('style', 'position:relative')
            }
            if (html === 'false') {
                this.setAttribute('style', 'position:absolute')
            }
        })
        return
    }
    get getComponents() {
        //var scr = new ScrollPad()
        //scr.setAttribute("vertical", '')
        this.component = {
        StoryContainer : new StoryContainer(this.imageset,1)
    }
        return
    }
    override render() {
        this.appendChild(this.component.StoryContainer)
        return
    }
}
customElements.define('es-storybackface', StoryBackface);