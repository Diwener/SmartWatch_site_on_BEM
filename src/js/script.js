const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    speed: 600,
    nav: false,
    center: true,
    mouseDrag: true,
    autoHeight: true,
    responsive: {
        320: {
            nav: true,
            navPosition: "center"
        },
        992:{
            nav: false
        }
    }
});
document.querySelector('.carousel__button_left').addEventListener("click", function(){
    slider.goTo('prev');
});
document.querySelector('.carousel__button_right').addEventListener("click", function(){
    slider.goTo('next');
});