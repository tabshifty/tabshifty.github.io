window.onload = function () {
    var imgWidth 
    var imgHeight
    var imgFrame = document.querySelector('.img-frame')
    var expand = document.querySelector('.expand-menu')
    var menu = document.querySelector('div.menus')
    var loader = document.querySelector('.loader')
    var expandFlag = false
    loader.parentNode.removeChild(loader)
    function setFrameHeight() {
        imgWidth = imgFrame.clientWidth
        imgHeight = imgWidth * (443/520) + 'px'
        imgFrame.setAttribute('style', 'height:'+ imgHeight)
    }
    
    // alert(window.innerWidth)
    setFrameHeight()
    
    window.onresize = function() {
        setFrameHeight()
        if (window.innerWidth > 1024 && expandFlag) {
            menu.style.overflow ="hidden"
            expandFlag = false
        }
    }
    expand.addEventListener('click', function(evt) {
        evt.stopPropagation()
        if (expandFlag) {
            menu.style.overflow ="hidden"
        } else {
            menu.style.overflow ="visible"
        }
        expandFlag = !expandFlag

    })
    menu.addEventListener('click', function() {
        if (expandFlag) {
            menu.style.overflow ="hidden"
        }
        expandFlag = !expandFlag
    })
}