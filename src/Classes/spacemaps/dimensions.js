export class Dimensions {
    constructor() {
        this.storyClicks = 0
        return this
    }

    get logoSetup() {
        var val = this.windowInnerHeight
        var val2 = this.verticalPadding
        return (val - val2) * .03
    }
    set logoSetup(val) { return val }

    get navbarSetup() {
        var val = this.windowInnerHeight
        var val2 = this.verticalPadding
        return (val - val2) * .05
    }
    set navbarSetup(val) { return val }

    get carouselSetup() {
        var val = this.windowInnerHeight
        var val2 = this.verticalPadding
        return (val - val2) * .75
    }
    set carouselSetup(val) { return val }

    get sidebarSetup() {
        var val = this.windowInnerHeight
        var val2 = this.verticalPadding
        return (val - val2) * .1
    }
    set sidebarSetup(val) { return val }

    get toggleSetup() {
        this.togglePosition
        var val = this.carouselSetup / 2
        return this.toggleVerticalPosition = val
    }
    set toggleSetup(val) {
        return val
    }
    get windowInnerHeight() {
        this.windowInnerHeight = 0
        return this.appHeight
    }
    set windowInnerHeight(val) {
        var appHeight = window.innerHeight
        return this.appHeight = appHeight
    }
    get verticalPadding() {
        return this.appHeight / 25
    }
    set verticalPadding(val) {
        return val
    }
    get fullWidth() {
        return window.outerWidth
    }
    get storyWidth() {
        return 300
    }
    get centerPosition() {
        return (this.fullWidth - this.storyWidth) / 2
    }
    get storySetup() {
        //this.storyTranslate = this.storyTranslateXStart
        this.storyHeight = this.carouselSetup * .85
        return
    }
    set storySetup(val) {
        return val
    }
    get expandStory(){
        return 
    }
    set expandStory(val){
        return val
    }
    get storyCurrentPosition() {
        return this.storyCurrentPos()
    }
    set storyCurrentPosition(val) {
        return val
    }
    get storyTranslateXStart() {
        return this.storyCurrentPosition + 'px'
    }
    set moveStory(val) {
        switch (val) {
            case "right":
                this.storyClicks -= 1
                break
            case "left":
                this.storyClicks += 1
                break
        }
    }
    storyCurrentPos() {
        this.storyClicks
        let rD = this.storyClicks * this.storyWidth
        switch (this.fullWidth > 600) {
            case true:
                return this.centerPosition + rD + 10
            case false:
                return this.centerPosition + rD
        }
    }
    get togglePosition() {
        var val = (window.outerWidth / 2) - 170

        return this.toggleHorizontalPosition = val
    }
    set togglePosition(val) {
        return val
    }

}