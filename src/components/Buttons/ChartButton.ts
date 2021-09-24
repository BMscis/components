import { EspiiElement } from "../../Interfaces"

export class ChartButton extends EspiiElement{
    name: string
    constructor(id:string, active:string, name:string){
        super()
        this.id = id
        this.button = document.createElement('button',{is: 'es-chartbutton'})
        active == 'true' ? this.selected = 'true' : this.noSelect
        this.button.id = id
        this.button.innerHTML = name
        this.button.addEventListener('click', e =>{
            this.click()
        })
        return 
    }
    get noSelect(){
        return
    }
    get selected(){
        return this.getAttribute('selected')
    }
    set selected(val:string){
        this.setAttribute('selected', '')
        return 
    }
    override click(){
        function close(){
            return
        }
        function switchThis(el:any){
            let t = document.getElementsByTagName('es-chartbutton')
            function remove(x:any,y:any){
                x.removeAttribute('selected')
                y.setAttribute('selected', '')
            }
            t[0].id == el.id ?  remove(t[1],t[0]) : remove(t[0], t[1])
            return
        }
        this.hasAttribute('selected') ? close() : switchThis(this) 
    }
    override render(){
        this.appendChild(this.button)
        return
    }
}
customElements.define('es-chartbutton', ChartButton)