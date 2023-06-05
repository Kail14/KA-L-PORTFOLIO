/*Text typed*/
$(document).ready(function(){
    $(".button").click(function(){
        let value =$(this).attr("data-filter");
        if(value=="all"){
            $(".filter").show("100");
        }
        else{
            $(".filter").not("."+value).hide("1000");
            $(".filter").filter("."+value).show("1000");
        }
        $("ul.button").click(function(){
            $(this).addClass('active').siblings().removeClass('.active');
        })
    })
})


let typed = new Typed(".text-2", {
    strings: ["Web Designer","Full Stack Develloper","Data Analyst"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/*navbar*/
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sitcky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })
});

/*Scroll_btn*/
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});