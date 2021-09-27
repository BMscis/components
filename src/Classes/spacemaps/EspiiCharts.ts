
import { EspiiElement } from '../../Interfaces';
import * as echarts from '../../../../../echarts';
const danger_color = "#EA4337"
const danger_color_low = "#DE4035"
const danger_color_semi = "#E64337"
const danger_color_full = "#FF4A3D"
const mid_color = "#c8d945"
const safe_color = "#7fff00"
const income_inflation_text_color = "#C8D945"
const text_color = "#1A78D9"
const transparent = "1A"
const translusent = "33"
const lightest = "66"
const lighter = "99"
const light = "CC"

export class EspiiChart extends EspiiElement {
    elementGraph: HTMLElement
    chartInsert: any
    generalInflationData: {}
    fuelData: {}
    foodData: {};
    apparelInlation: {};
    furnishingInlation: {};
    healthInlation: {};
    transportInlation: {};
    yearInflation: any[];
    incomeInflation: any;
    months: string[];
    lineStyle: { normal: { width: number; type: string; }; };
    zRender: any;
    /**
     * 
     * @param chart_id "Element ID"
     * @param chart_type "Type Of Chart"/To be Implemented
     * @param chart_data "An Array of the data"
     */
    constructor(chart_id: string, chart_type: string, chart_data: Array<any>) {
        super()
        this.elementGraph = document.createElement("canvas")
        this.resize()
        this.elementGraph.id = chart_id
        this.yearInflation = chart_data[0]
        this.incomeInflation = chart_data[1]
        this.months = [
            "June_20",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June"
        ]
        echarts.zrender.init(this.elementGraph)
        this.chartInsert = echarts.init(this.elementGraph, null, { 
            renderer: 'canvas',
        });
        this.chartInsert.setOption(this.generalInflationChart)
        //this.resize()
        window.addEventListener('resize', e => {
            this.resize()
            this.resizeChart()
        })
    }
    chartButton(id: string, active: string, name: string) {
        let button = document.createElement('button')
        button.id = id
        button.className = "es-chartbutton"
        button.setAttribute('is','es-chartbutton')
        active == 'true' ? setSelected('true',button) : noSelect()
        button.innerHTML = name
        button.addEventListener('click', e => {
            click(button,this)
        })
        function noSelect() {
            return
        }
        function getSelected() {
            return this.getAttribute('selected')
        }
        function setSelected(val: string,button:HTMLButtonElement) {
            button.setAttribute('selected', '')
            return
        }
        function click(button:HTMLButtonElement,parent:EspiiChart) {
            function close() {
                return
            }
            function switchThis(el: HTMLButtonElement, parent:EspiiChart) {
                let t = document.getElementsByClassName('es-chartbutton')
                function remove(x: any, y: any) {
                    x.removeAttribute('selected')
                    y.setAttribute('selected', '')
                    y.id == 'incomeInflationChart' ? parent.chartInsert.setOption(parent.incomeInflationChart,{ notMerge: true }) :
                    parent.chartInsert.setOption(parent.generalInflationChart,{ notMerge: true })
                }
                t[0].id == el.id ? remove(t[1], t[0]) : remove(t[0], t[1])
                return
            }
            button.hasAttribute('selected') ? close() : switchThis(button,parent)
        }
        return button
    }
    get generalInflationChart() {
        return {
            baseOption: {
                timeline: {
                    show: true,
                    type: 'slider',
                    axisType: 'category',
                    autoPlay: true,
                    loop: true,
                    data: (function (iterator: string | any[]) {
                        let timelineData = []
                        for (let i = 0; i < iterator.length; i++) {
                            timelineData.push({
                                value: iterator[i],
                            })
                        }
                        return timelineData
                    })(this.months),
                    replaceMerge: 'series',
                    label: {
                        formatter: '{value}'
                    }
                },
                calculable: true,
                radar: [
                    {
                        indicator: [
                            { name: 'General Inflation', max: 20 },
                            { name: 'Fuel', max: 20 },
                            { name: 'Food', max: 20 },
                            { name: 'Clothing', max: 20 },
                            { name: 'Household', max: 20 },
                            { name: 'Health', max: 20 },
                            { name: 'Transport', max: 20 }
                        ],
                        radius:['10%','50%'],
                        shape: 'circle',
                        scale: true,
                        splitNumber: 5,
                        name: {
                            fontSize:16,
                            textStyle: {
                                color: text_color
                            },
                            overflow:'truncate',
                            elipsis:'...,',
                            lineOverflow:'truncate',
                        },
                        splitArea: {
                            show: false,
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                width: 1,
                                type: 'dashed',
                                color: [
                                    mid_color,
                                    safe_color,
                                    safe_color + translusent,
                                    danger_color_low,
                                    danger_color,
                                    danger_color_full,
                                ]
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: mid_color + transparent
                            }
                        },
                        axisLabel: {
                            show: false,
                            inside: false,
                            rotate: 0,
                            margin: 8,
                            fontSize: 12
                        },

                    }
                ],
                series: [
                    { name: "June_20", type: 'radar' },
                    { name: "July", type: 'radar' },
                    { name: "August", type: 'radar' },
                    { name: "September", type: 'radar' },
                    { name: "October", type: 'radar' },
                    { name: "November", type: 'radar' },
                    { name: "December", type: 'radar' },
                    { name: "January", type: 'radar' },
                    { name: "February", type: 'radar' },
                    { name: "March", type: 'radar' },
                    { name: "April", type: 'radar' },
                    { name: "May", type: 'radar' },
                    { name: "June", type: 'radar' },
                ]
            },
            options:
                (function (iterator, inflationData) {
                    let options = []
                    for (let i = 0; i < iterator.length; i++) {
                        options.push(
                            {
                                backgroundColor: 'transparent',
                                tooltip: {
                                    trigger: "item",
                                    zlevel: 0,
                                    z: 60,
                                    show: true,
                                    showContent: true,
                                    triggerOn: "mousemove|click",
                                    alwaysShowContent: false,
                                    displayMode: "single",
                                    renderMode: 'richText',
                                    appendToBody: 'false',
                                    //position:['80%','50%'],
                                    //confine: null,
                                    showDelay: 0,
                                    hideDelay: 100,
                                    transitionDuration: 0.4,
                                    enterable: false,
                                    backgroundColor: danger_color + transparent,
                                    //shadowBlur: 10,
                                    //shadowColor: "rgba(0, 0, 0, .2)",
                                    //shadowOffsetX: 1,
                                    //shadowOffsetY: 2,
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    padding: 5,
                                    extraCssText: '',
                                    axisPointer: {
                                        type: "line",
                                        axis: "auto",
                                        animation: "auto",
                                        animationDurationUpdate: 200,
                                        animationEasingUpdate: "exponentialOut",
                                    },
                                    crossStyle: {
                                        color: "#999",
                                        width: 1,
                                        type: "dashed",
                                    },
                                    textStyle: {
                                        color: "#666",
                                        fontSize: 14
                                    }
                                },
                                title: {
                                    show: true,
                                    text: iterator[i],
                                    left: 'center',
                                    textStyle: {
                                        color: '#eee'
                                    }
                                },
                                visualMap: {
                                    show: true,
                                    min: 0,
                                    max: 20,
                                    color: [danger_color, mid_color, safe_color],
                                    hoverLink: true,
                                    axisLabel: {}
                                },
                                series: [
                                    {
                                        name: iterator[i],
                                        type: 'radar',
                                        symbol: 'none',
                                        radarIndex: 0,
                                        lineStyle: {
                                            normal: {
                                                width: 1,
                                                type: 'solid'
                                            }
                                        },
                                        //radarIndex:i,
                                        data: [
                                            {
                                                value: inflationData[i]
                                            }
                                        ],
                                        itemStyle: {
                                            color: text_color,
                                        },
                                        emphasis: {
                                            focus: 'self',
                                            blurScope: 'coordinateSystem'
                                        },
                                        areaStyle: {
                                            show: false,
                                            opacity: 0
                                        },
                                        axisLine: {
                                            symbol: 'none'
                                        }

                                    }
                                ]
                            }
                        )
                    }
                    return options
                })(this.months, this.yearInflation),

        };
    }
    get incomeInflationChart() {
        return {
            baseOption: {
                timeline: {
                    show: true,
                    type: 'slider',
                    axisType: 'category',
                    autoPlay: true,
                    loop: true,
                    data: (function (iterator: string | any[]) {
                        let timelineData = []
                        for (let i = 0; i < iterator.length; i++) {
                            timelineData.push({
                                value: iterator[i],
                            })
                        }
                        return timelineData
                    })(this.months),
                    //replaceMerge: 'series',
                    label: {
                        formatter: '{value}'
                    }
                },
                calculable: true,
                radar: [
                    {
                        indicator: [
                            { name: 'Upper-Income Inflation', max: 20 },
                            { name: 'Middle-Income Inflation', max: 20 },
                            { name: 'Lower-Income Inflation', max: 20 },
                            
                        ],
                        shape: 'circle',
                        scale: true,
                        splitNumber: 5,
                        name: {
                            textStyle: {
                                color: text_color
                            }
                        },
                        splitArea: {
                            show: false,
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                width: 1,
                                type: 'dashed',
                                color: [
                                    safe_color + translusent,
                                    safe_color,
                                    safe_color + translusent,
                                    danger_color + lightest,
                                    danger_color + lighter,
                                    danger_color,
                                ]
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: mid_color + transparent
                            }
                        },
                        axisLabel: {
                            show: false,
                            inside: false,
                            rotate: 0,
                            margin: 8,
                            fontSize: 12
                        }

                    }
                ],
                series: [
                    { name: "June_20", type: 'radar' },
                    { name: "July", type: 'radar' },
                    { name: "August", type: 'radar' },
                    { name: "September", type: 'radar' },
                    { name: "October", type: 'radar' },
                    { name: "November", type: 'radar' },
                    { name: "December", type: 'radar' },
                    { name: "January", type: 'radar' },
                    { name: "February", type: 'radar' },
                    { name: "March", type: 'radar' },
                    { name: "April", type: 'radar' },
                    { name: "May", type: 'radar' },
                    { name: "June", type: 'radar' },
                ]
            },
            options:
                (function (iterator, inflationData) {
                    let options = []
                    for (let i = 0; i < iterator.length; i++) {
                        options.push(
                            {
                                backgroundColor: 'transparent',
                                tooltip: {
                                    trigger: "item",
                                    zlevel: 0,
                                    z: 60,
                                    show: true,
                                    showContent: true,
                                    triggerOn: "mousemove|click",
                                    alwaysShowContent: false,
                                    displayMode: "single",
                                    renderMode: 'richText',
                                    appendToBody: 'false',
                                    //position:['80%','50%'],
                                    //confine: null,
                                    showDelay: 0,
                                    hideDelay: 100,
                                    transitionDuration: 0.4,
                                    enterable: false,
                                    backgroundColor: danger_color + transparent,
                                    //shadowBlur: 10,
                                    //shadowColor: "rgba(0, 0, 0, .2)",
                                    //shadowOffsetX: 1,
                                    //shadowOffsetY: 2,
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    padding: 5,
                                    extraCssText: '',
                                    axisPointer: {
                                        type: "line",
                                        axis: "auto",
                                        animation: "auto",
                                        animationDurationUpdate: 200,
                                        animationEasingUpdate: "exponentialOut",
                                    },
                                    crossStyle: {
                                        color: "#999",
                                        width: 1,
                                        type: "dashed",
                                    },
                                    textStyle: {
                                        color: "#666",
                                        fontSize: 14
                                    }
                                },
                                title: {
                                    show: true,
                                    text: iterator[i],
                                    left: 'center',
                                    textStyle: {
                                        color: '#eee'
                                    }
                                },
                                visualMap: {
                                    show: true,
                                    min: 0,
                                    max: 20,
                                    color: [danger_color, mid_color, safe_color],
                                    hoverLink: true,
                                    axisLabel: {}
                                },
                                series: [
                                    {
                                        name: iterator[i],
                                        type: 'radar',
                                        symbol: 'none',
                                        radarIndex: 0,
                                        lineStyle: {
                                            normal: {
                                                width: 1,
                                                type: 'solid'
                                            }
                                        },
                                        //radarIndex:i,
                                        data: [
                                            {
                                                value: inflationData[i]
                                            }
                                        ],
                                        itemStyle: {
                                            color: text_color,
                                        },
                                        emphasis: {
                                            focus: 'self',
                                            blurScope: 'coordinateSystem'
                                        },
                                        areaStyle: {
                                            show: false,
                                            opacity: 0
                                        },
                                        axisLine: {
                                            symbol: 'none'
                                        }

                                    }
                                ]
                            }
                        )
                    }
                    return options
                })(this.months, this.incomeInflation),

        };
    }
    resize() {
        this.elementGraph.setAttribute("width", (
            (
                window.innerWidth > 600 ?
                window.innerWidth * 0.8 :
                window.innerWidth
                )
        ).toString()
        )
        this.elementGraph.setAttribute("height", (
            document.querySelector('es-carousel').scrollHeight > 600 ?
            document.querySelector('es-carousel').scrollHeight * 0.8 :
            document.querySelector('es-carousel').scrollHeight * 0.8
            ).toString()
        )
        return
    }
    resizeChart(){
        this.chartInsert.resize(
            {
                width:(
                    window.innerWidth > 600 ?
                    window.innerWidth * 0.8 :
                    window.innerWidth * 0.7
                ),
                height:(
                    document.querySelector('es-carousel').scrollHeight > 600 ?
                    document.querySelector('es-carousel').scrollHeight * 0.8 :
                    document.querySelector('es-carousel').scrollHeight * 0.8
                )
            }
        )    
        return
    }
    override render() {
        let inflationButton = this.chartButton('generalInflationChart', "true", 'General Inflation Chart')
        let inflationButton2 = this.chartButton('incomeInflationChart', "false", 'income Inflation Chart')
        let container = document.createElement('div')
        container.id = 'button-container'
        container.appendChild(inflationButton)
        container.appendChild(inflationButton2)
        this.appendChild(this.elementGraph)
        this.appendChild(container)
        return
    }
}
customElements.define('es-charts', EspiiChart);