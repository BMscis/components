export const show = (element : HTMLElement) => {
    element.animate(
        [{opacity:1}],
        {
            duration: 1000,
            easing: "ease-in-out",
            fill:'forwards',
            delay:500

        }
    )
    return
}

export const hide = (element : HTMLElement) => {
    element.animate(
        [{opacity:0}],
        {
            duration: 1000,
            easing: "ease-in-out",
            fill:'forwards',
            delay:500

        }
    )
    return
}