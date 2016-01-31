window.onload = function() {
    addScrollMagic();
    navFadeIn();
    navAddCurrent();
}


function addScrollMagic() {
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#trigger",
        triggerHook: "onEnter",
        duration: "100%"
    }).addTo(controller)
        .setPin("#title")
        .setTween("#title", 1, {
            letterSpacing: "50",
            fontSize: "50px"});
}

function navFadeIn() {
    TweenMax.from(".nav-btn",2,{
        css:{
            opacity: 0,
        },
    });
}

function navAddCurrent() {
    var navBtn = document.getElementsByClassName('nav-btn');
    //$('.nav-btn').mouseenter(function(){
    //    $(this).addClass('nav-current');
    //});
    //
    //$('.nav-btn').mouseleave(function(){
    //    $(this).removeClass('nav-current');
    //});

    var title = $('title').text();
    $('.nav-btn').map(function(){
        if($(this).attr('title') === title){
            $(this).addClass('nav-current');
        }
    })

}
