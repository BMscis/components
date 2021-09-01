import {A, SVG} from "@svgdotjs/svg.js"

export class SvgDrawer {
    svg: import("@svgdotjs/svg.js").Svg
    constructor(){
        this.svg = SVG()
    }
    addTo(component: string):void{
        this.svg.addTo(component)
        return
    }
    drawFavicon():void{
        this.svg.viewbox("0 0 18.9 18.9")
        let group1 = this.svg.group()
        let group2 = this.svg.group()
        let group3 = this.svg.group()
        group1.add(
            this.svg.path(
                `
                M14.5,10.4L14.5,10.4l0-1.9l0,0V7.4l-0.8-0.8l0,0l-1.3-1.3l0,0l-0.8-0.8H7.4L4.5,7.4v4.1l0.7,0.7l0,0l1.5,1.5
		        l0,0l0.8,0.8h1l0,0h2.1l0,0h1.1l0.8-0.8l-0.1,0l1.4-1.4l0,0.1l0.8-0.8V10.4z M13.8,11.8l-1.4,0.6l-0.6,1.5l-0.9,0.4l-1.5-0.6
		        l-1.5,0.6L7,13.9l-0.6-1.5L5,11.8l-0.4-0.9l0.6-1.4L4.6,8L5,7l1.4-0.6L7,5l1-0.4l1.4,0.6l1.4-0.6l1,0.4l0.6,1.4L13.8,7l0.4,1
		        l-0.6,1.4l0.6,1.4L13.8,11.8z
                `
            ).addClass("st1")
        ).addClass("st0")
        group1.add(
            this.svg.polygon("13.3,5.7 12.3,5.2 13.7,6.6").addClass("st2")
            
            )
        group1.add(this.svg.polygon("14.8,9.5 14.5,8.6 14.5,10.4").addClass("st2"))
        group1.add(this.svg.polygon("9.5,4 8.5,4.4 10.4,4.4").addClass("st3"))
        group1.add(this.svg.polygon("4.4,10.4 4.4,8.4 4,9.4").addClass("st3"))
        group1.add(this.svg.polygon("9.4,14.9 10.4,14.4 8.4,14.4").addClass("st4"))
        group1.add(this.svg.polygon("13.2,13.3 13.6,12.4 12.3,13.7").addClass("st2"))
        group1.add(this.svg.polygon("5.6,5.6 5.2,6.6 6.6,5.2").addClass("st2"))
        group1.add(this.svg.polygon("5.6,13.2 6.6,13.7 5.1,12.2").addClass("st2"))

        this.svg.polygon(
            `
            14.4,7.6 13.7,9.4 14.4,11.3 14.4,11.5 14.3,11.6 12.4,12.4 11.7,14.3 11.5,14.4 11.3,14.4 9.4,13.6 
	        7.5,14.4 7.4,14.4 7.2,14.3 6.4,12.4 4.5,11.6 4.4,11.5 4.4,11.3 5.2,9.4 4.4,7.6 4.4,7.4 4.6,7.2 6.4,6.4 7.2,4.6 7.4,4.4 7.5,4.4 
	        9.4,5.2 11.3,4.4 11.5,4.4 11.6,4.6 12.4,6.4 14.3,7.2 14.4,7.4
            `).addClass("st5")

        group2.add(this.svg.path(
            `
            M7.8,1.6L1.6,7.8c-0.9,0.9-0.9,2.3,0,3.1l6.3,6.3c0.9,0.9,2.3,0.9,3.2,0l6.3-6.3c0.9-0.9,0.9-2.3,0-3.2L11,1.6
		    C10.1,0.7,8.7,0.7,7.8,1.6z M14.3,11.6l-1.9,0.8l-0.8,1.9l-0.1,0.2l-0.2-0.1l-1.9-0.8l-1.9,0.8l-0.2,0.1l-0.1-0.3l-0.8-1.9
		    l-1.9-0.8l-0.2-0.1l0.1-0.2l0.8-1.9L4.4,7.6L4.3,7.3l0.3-0.1l1.9-0.8l0.8-1.8l0.1-0.3l0.2,0.1l1.9,0.8l1.9-0.8l0.2-0.1l0.1,0.2
		    l0.8,1.9l1.9,0.8l0.3,0.1l-0.1,0.2l-0.8,1.9l0.8,1.9l0.1,0.2L14.3,11.6z
            `
        ).addClass("st6"))
        group2.add(this.svg.path(
            `
            M12.4,6.4l-3-1.2l-3,1.2l-1.2,3l1.2,3l3,1.2l3-1.2l1.2-3L12.4,6.4z M9.5,13C7.6,13,6,11.4,6,9.5
		    C6,7.6,7.6,6,9.5,6S13,7.6,13,9.5C13,11.4,11.4,13,9.5,13z
            `
        ).addClass("st6"))
        group2.add(this.svg.polygon("9.4,6.9 6.9,9.4 9.4,12 12,9.4").addClass("st6"))

        group3.add(this.svg.polygon("9.4,6.9 9.4,9.4 8.6,9.4 	"  ).addClass("st7"))
        group3.add(this.svg.polygon("9.4,6.9 7.7,9.4 6.9,9.4 	"  ).addClass("st8"))
        group3.add(this.svg.polygon("9.4,6.9 8.6,9.4 7.7,9.4 	"  ).addClass("st9"))
        group3.add(this.svg.polygon("9.4,12 9.4,9.4 10.3,9.4 "  ).addClass("st10"))
        group3.add(this.svg.polygon("9.4,12 11.2,9.4 12,9.4 	"  ).addClass("st11"))
        group3.add(this.svg.polygon("9.4,12 10.3,9.4 11.2,9.4"  ).addClass("st12"))
        group3.add(this.svg.polygon("9.4,12 9.4,9.4 8.6,9.4 	"  ).addClass("st13"))
        group3.add(this.svg.polygon("9.4,12 7.7,9.4 6.9,9.4 	"  ).addClass("st14"))
        group3.add(this.svg.polygon("9.4,12 8.6,9.4 7.7,9.4"  ).addClass("st6"))
        group3.add(this.svg.polygon("9.4,6.9 9.4,9.4 10.3,9.4"  ).addClass("st15"))
        group3.add(this.svg.polygon("9.4,6.9 11.2,9.4 12,9.4 "  ).addClass("st16"))
        group3.add(this.svg.polygon("9.4,6.9 10.3,9.4 11.2,9.4"  ).addClass("st6"))
    }
    drawLogo():void{
        this.svg.viewbox("0 0 189.3 140")
        this.svg.center(0,0)
        this.svg.id("Layer_1")
        let parent = this.svg.group().id("Layer_1_1_")
        let layer1 = this.svg.group()
        let layer2 = this.svg.group().addClass("st2")
        let layer3 = this.svg.group().addClass("st2")
        let layer4 = this.svg.group()

        let outerlayer1 = this.svg.group()
        let outerlayer2 = this.svg.group()
        let outerlayer3 = this.svg.group()
        let group1 = this.svg.group()
        let group2 = this.svg.group()
        let group3 = this.svg.group()
        let group4 = this.svg.group()
        let group5 = this.svg.group()
        let group6 = this.svg.group()
        let group7 = this.svg.group()
        let group8 = this.svg.group()
        
        
        layer1.add(this.svg.path("M88.5,41.5L60.7,69.3C60.4,69.6,60,70,59.3,70H0.7l85.9-31.9C88.1,37.4,90,40,88.5,41.5z").addClass("st0"))
        layer1.add(this.svg.path("M189.3,70h-58.5c-0.4,0-1.1-0.4-1.5-0.7l-27.8-27.8c-1.5-1.5,0-4.1,2.2-3.3L189.3,70z").addClass("st0"))
        layer1.add(this.svg.path("M60.4,70.7l27.8,27.8c1.5,1.5,0,4.1-2.2,3.3L0,70h58.5C59.6,70,60,70.4,60.4,70.7z").addClass("st1"))
        layer1.add(this.svg.path("M189.3,70l-85.9,31.9c-1.9,0.7-3.7-1.9-2.2-3.3l27.8-27.8c0.4-0.4,0.7-0.7,1.5-0.7H189.3z").addClass("st1"))

        layer2.add(this.svg.polygon("164.8,70 94.8,70 94.8,0 	").addClass("st3"))
        layer2.add(this.svg.polygon("94.8,70 94.8,140 24.8,70 ").addClass("st4"))
        layer2.add(this.svg.polygon("164.8,70 94.8,140 94.8,70").addClass("st5"))
        layer2.add(this.svg.polygon("94.8,0 94.8,70 24.8,70 		").addClass("st6"))

        layer3.add(this.svg.polygon("118.1,70 94.8,70 94.8,46.7").addClass("st3"))
        layer3.add(this.svg.polygon("94.8,70 94.8,93.3 71.5,70 ").addClass("st4"))
        layer3.add(this.svg.polygon("118.1,70 94.8,93.3 94.8,70").addClass("st5"))
        layer3.add(this.svg.polygon("94.8,46.7 94.8,70 71.5,70 ").addClass("st6"))

        parent.add(layer1)
        parent.add(layer2)
        parent.add(layer3)

        outerlayer1.add(group1.add(this.svg.polygon("94.8,51 94.8,70 88.6,70").addClass("st7")))
        outerlayer1.add(group1.add(this.svg.polygon("94.8,51 82.2,70 75.8,70").addClass("st8")))
        outerlayer1.add(group1.add(this.svg.polygon("94.8,51 88.6,70 82.2,70").addClass("st9")))
        outerlayer1.add(group2.add(this.svg.polygon("94.8,89 94.8,70 101,70 "  ).addClass("st10")))
        outerlayer1.add(group2.add(this.svg.polygon("94.8,89 107.4,70 113.8,70").addClass("st11")))
        outerlayer1.add(group2.add(this.svg.polygon("94.8,89 101,70 107.4,70"  ).addClass("st12")))
        outerlayer1.add(group3.add(this.svg.polygon("94.8,89 94.8,70 88.6,70").addClass("st13")))
        outerlayer1.add(group3.add(this.svg.polygon("94.8,89 82.2,70 75.8,70").addClass("st14")))
        outerlayer1.add(group3.add(this.svg.polygon("94.8,89 88.6,70 82.2,70").addClass("st15")))
        outerlayer1.add(group4.add(this.svg.polygon("94.8,51 94.8,70 101,70 	").addClass("st16")))
        outerlayer1.add(group4.add(this.svg.polygon("94.8,51 107.4,70 113.8,70").addClass("st17")))
        outerlayer1.add(group4.add(this.svg.polygon("94.8,51 101,70 107.4,70 	").addClass("st15")))

        outerlayer2.add(
            this.svg.rect(15.6,15.6)
            .attr({x:87,y:62.2})
            .transform(
                {
                    a:0.3827,
                    b: -0.9239,
                    c: 0.9239,
                    d: 0.3827,
                    e: -6.1164,
                    f: 130.8289
                }
                )
            .addClass("st1")
            )
        outerlayer2.add(
            this.svg.rect(15.6,15.6)
            .attr({x:87,y:62.2})
            .transform({
                a: 0.9239, 
                b:-0.3827,
                c: 0.3827,
                d: 0.9239,
                e: -19.583,
                f: 41.6182
            }
                )
            .addClass("st18")
            )
        outerlayer2.add(
            this.svg.path("M94.8,77L94.8,77c-3.8,0-7-3.2-7-7l0,0c0-3.8,3.2-7,7-7l0,0c3.8,0,7,3.2,7,7l0,0C101.8,73.8,98.6,77,94.8,77z")
            .addClass("st19")
        )

        group5.add(this.svg.polygon("94.8,64.8 94.8,70 93,70 	").addClass("st7"))
        group5.add(this.svg.polygon("94.8,64.8 91.4,70 89.6,70").addClass("st8"))
        group5.add(this.svg.polygon("94.8,64.8 93,70 91.4,70 	").addClass("st9"))
        group6.add(this.svg.polygon("94.8,75.2 94.8,70 96.6,70").addClass("st10"))
        group6.add(this.svg.polygon("94.8,75.2 98.2,70 100,70 ").addClass("st11"))
        group6.add(this.svg.polygon("94.8,75.2 96.6,70 98.2,70").addClass("st12"))
        group7.add(this.svg.polygon("94.8,75.2 94.8,70 93,70 	").addClass("st13"))
        group7.add(this.svg.polygon("94.8,75.2 91.4,70 89.6,70 ").addClass("st14"))
        group7.add(this.svg.polygon("94.8,75.2 93,70 91.4,70 	").addClass("st15"))
        group8.add(this.svg.polygon("94.8,64.8 94.8,70 96.6,70").addClass("st16"))
        group8.add(this.svg.polygon("94.8,64.8 98.2,70 100,70  ").addClass("st17"))
        group8.add(this.svg.polygon("94.8,64.8 96.6,70 98.2,70").addClass("st18"))

        outerlayer3.add(group5)
        outerlayer3.add(group6)
        outerlayer3.add(group7)
        outerlayer3.add(group8)

        layer4.add(outerlayer1)
        layer4.add(outerlayer2)
        layer4.add(outerlayer3)

        parent.add(layer4)

        
    }
}














