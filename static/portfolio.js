
/*
https://getbootstrap.com/docs/5.2/components/carousel/
*/
function initCarousel() {
    
    setTimeout(() => {

        const carousel = document.querySelector('#carouselExampleIndicators')
        new bootstrap.Carousel(carousel, {
            interval: 2000,
            wrap: true
        })
    }, 3000)

}


window.onload = function(){
    document.getElementById("buttonPortfolio").addEventListener("click", function () {

        fetchInsert("portfolio.html", "portfolio")
        initCarousel()
    
    });
}

