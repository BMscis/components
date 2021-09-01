export const removeAllChildren = (element: HTMLElement) => {
    for (var [key, val] of Object.entries(element.childNodes)) {
        element.removeChild(val)
    }
    console.log(`%c ${element.nodeName} %c has been %c DISCONNECTED`, "color:#cd4cf7", "color:black", "color:#ef1a1a")
    return
}