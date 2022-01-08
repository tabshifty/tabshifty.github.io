window.onload = function () {
    var imgWidth 
    var imgHeight
    var imgFrame = document.querySelector('.img-frame')
    function setFrameHeight() {
        imgWidth = imgFrame.clientWidth
        imgHeight = imgWidth * (443/520) + 'px'
        imgFrame.setAttribute('style', 'height:'+ imgHeight)
    }
    
    // alert(window.innerWidth)
    setFrameHeight()
    
    window.onresize = setFrameHeight
}