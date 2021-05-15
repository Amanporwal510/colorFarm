let DRAWER_WIDTH = 400

if(document.documentElement.clientWidth < 768) {
    DRAWER_WIDTH = document.documentElement.clientWidth
}

export { DRAWER_WIDTH }