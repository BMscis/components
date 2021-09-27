import { EspiiElement } from "../../Interfaces"
import { CloseHeading } from "../StoryBoard/CloseHeading"
export class Footer extends EspiiElement{
    constructor(){
        super()
        return
    }
    override render(){
        this.id = 'footer-closer'
        let text = document.createElement('text')
        text.innerHTML = "Reach Us"
        let gitContainer = document.createElement('span')
        gitContainer.className = 'github'
        let github = document.createElement('a')
        github.href = 'https://github.com/BMscis'
        github.setAttribute('showContent', "Go to github page.")
        gitContainer.appendChild(github)

        let inContainer = document.createElement('span')
        inContainer.className = 'linkedin'
        let linkedin = document.createElement('a')
        linkedin.setAttribute('showContent', "Go to linked in page.")
        linkedin.href = 'linkedin.com/in/melvin-wakhungu-26a29259/'
        inContainer.appendChild(linkedin)

        let emailHold = document.createElement('span')
        emailHold.classList.add('forward_to_inbox')
        emailHold.id = "forward_to_inbox"
        let email = document.createElement('a')
        email.id = "myemail"
        email.setAttribute('showContent', "copy email")
        email.href = '#!melvinwafula@gmail.com'
        emailHold.appendChild(email)
        email.addEventListener('click', e =>{
            navigator.clipboard.writeText('melvinwafula@gmail.com')
        })

        let close = new CloseHeading("", "", "")
        this.appendChild(close)
        this.appendChild(text)
        this.appendChild(emailHold)
        this.appendChild(gitContainer)
        this.appendChild(inContainer)
        return
    }
}
customElements.define('es-footer', Footer);