
window.onscroll = function () {scroll()};
function scroll() {
    if(document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50){
        document.querySelector('.navbar').classList.add('sticky')
    }
    elseif(document.body.scrollTop < 50 ||
        document.documentElement.scrollTop < 50)
        {
        document.getElementsByClassName('.navbar') 
    }
        
 
}