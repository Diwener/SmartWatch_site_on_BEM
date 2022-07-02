$(document).ready(function(){
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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item){
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                // console.log('click');
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('ul.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');  
            });
        });
    };
    toggleSlide('.catalog-item__more')
    toggleSlide('.catalog-item__back')
});