$(function(){

    //메뉴
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp();
    })
    
    
    //슬라이드 이미지
    var n = 0; //0 1 2 (left 0, -100%, -200%)
    
    setInterval(function(){
        n = ( n + 1) % 3; //0 1 2 

        pos = n * ( -100 ) + "%" ;
        $(".left_move").animate({left:pos},500)

    },2000)


    //모달팝업
    $(".p_click").click(function(){
        $(".modal , .pop").show();
    })//
    $(".close").click(function(){
        $(".modal , .pop").hide();
    })//

})//jquery