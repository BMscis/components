import { EspiiChart } from "../..//Classes/SpaceMaps/EspiiCharts"
import { EspiiElement } from "../../Interfaces"
import { CardHeader } from "../Typography/Heading/CardHeader"
/**
 * The central bank weekly bulleting visualized.
 */
export class CBKView extends EspiiElement{
    constructor(){
        super()
        return
    }
    get generalInflation() {
        return {
            June_20:   4.95,
            July:      4.36,
            August:    4.36,
            September: 4.20,
            October:   4.84,
            November:  5.33,
            December:  5.62,
            January:   5.69,
            February:  5.78,
            March:     5.90,
            April:     5.76,
            May:       5.87,
            June:      6.32
        }
    }
    get fuelInflation() {
        return {
            June_20:  5.45,
            July:     8.69,
            August:   10.85,
            September:10.90,
            October:  12.15,
            November: 11.00,
            December: 11.30,
            January:  12.09,
            February: 13.78,
            March:    15.78,
            April:    14.82,
            May:      13.53,
            June:     13.53
        }
    }
    get foodInflation(){
        return {
            June_20:  8.15,
            July:     6.66 ,
            August:   5.43,
            September:5.18,
            October:  5.76,
            November: 6.09,
            December: 7.19,
            January:  7.36,
            February: 6.93,
            March:    6.65,
            April:    6.42,
            May:      7.02,
            June:     8.46
        }
    }
    get apparelInlation(){
        return {
            June_20:  2.62,
            July:     2.08 ,
            August:   2.03,
            September:1.78,
            October:  2.49,
            November: 3.26,
            December: 2.42,
            January:  2.62,
            February: 2.29,
            March:    2.38,
            April:    2.64,
            May:      2.07,
            June:     1.90
        }
    }
    get furnishingInlation(){
        return {
            June_20:  1.33,
            July:     1.12 ,
            August:   1.20,
            September:1.40,
            October:  2.18,
            November: 2.50,
            December: 2.88,
            January:  3.19,
            February: 3.36,
            March:    3.63,
            April:    3.73,
            May:      3.55,
            June:     4.30
        }
    }
    get healthInlation(){
        return {
            June_20:  1.13,
            July:     1.79 ,
            August:   2.31,
            September:1.77,
            October:  3.04,
            November: 4.17,
            December: 4.53,
            January:  4.45,
            February: 4.34,
            March:    4.12,
            April:    4.13,
            May:      4.30,
            June:     4.56
        }
    }
    get transportInlation(){
        return {
            June_20:  6.89,
            July:     11.12 ,
            August:   13.07,
            September:12.95,
            October:  13.54,
            November: 12.87,
            December: 13.21,
            January:  14.24,
            February: 16.73,
            March:    18.12,
            April:    17.19,
            May:      16.76,
            June:     14.71
        }
    }
    get yearInflation():Array<any> {
        return [
            [4.95,5.45, 8.15, 2.62,1.33,1.13,6.89 ],
            [4.36,8.69, 6.66 ,2.08,1.12,1.79,11.12],
            [4.36,10.85, 5.43,2.03,1.20,2.31,13.07],
            [4.20,10.90, 5.18,1.78,1.40,1.77,12.95],
            [4.84,12.15, 5.76,2.49,2.18,3.04,13.54],
            [5.33,11.00, 6.09,3.26,2.50,4.17,12.87],
            [5.62,11.30, 7.19,2.42,2.88,4.53,13.21],
            [5.69,12.09, 7.36,2.62,3.19,4.45,14.24],
            [5.78,13.78, 6.93,2.29,3.36,4.34,16.73],
            [5.90,15.78, 6.65,2.38,3.63,4.12,18.12],
            [5.76,14.82, 6.42,2.64,3.73,4.13,17.19],
            [5.87,13.53, 7.02,2.07,3.55,4.30,16.76],
            [6.32,13.53, 8.46,1.90,4.30,4.56,14.71]
        ]
    }
    get incomeInflation(){
        return [
            [2.29,2.79,5.42],
            [2.01,1.84,5.44],
            [2.68,1.79,5.30],
            [2.29,1.67,5.26],
            [2.57,2.31,5.24],
            [2.28,2.32,5.26],
            [2.38,2.86,6.08],
            [2.91,3.11,5.70],
            [3.05,3.30,5.73],
            [3.70,3.47,5.78],
            [3.55,3.45,5.67],
            [3.71,3.86,5.86],
            [4.13,3.44,6.32],
        ]
    }
    override render(){
        let header = new CardHeader("", "Weekly Bulleting")
        this.appendChild(header)
        let inflationChart = new EspiiChart(
            "inflationChart",
            "line",
            [this.yearInflation,this.incomeInflation]
        )
        this.appendChild(inflationChart)
        //let tooltip = this.lastElementChild.firstElementChild
        //this.appendChild(tooltip)
        return
    }
    get styleTemplate(){
        return``
    }
    get htmlTemplate(){
        return``
    }
}
customElements.define('es-cbkview', CBKView);