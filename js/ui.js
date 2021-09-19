$(document).ready(function () {
	function datePicker() {

		if ( $('.date-picker').length) {

			$('.date-picker').datepicker(
				{
					autoClose: true
				}
			);
			$('.date-picker').each(function(){

				if( $(this).val() !== '' ){
					$(this).data('datepicker').selectDate(new Date($(this).val()));
				}
			})
		}
	}
	datePicker();
})

function layerOpen(layerName) {
	$('.layer.layer-' + layerName).show();
	$('.container').addClass('overlay')

}

// 팝업 열기
function layerClose(layerName) {
	$('.layer.layer-' + layerName).hide();
	$('.container').removeClass('overlay')

}


function popupOpen(name) {
	$('.container').addClass('overlay')
	$('.popup.popup-' + name).show();


	if($('.popupMenu').length != 0){
		$('.popupMenu').addClass('on');
	}

}


function popupOpenFade(name) {
	$('.container').addClass('overlay').addClass('white')
	$('.popup.popup-' + name).fadeIn();


	if($('.popupMenu').length != 0){
		$('.popupMenu').addClass('on');
	}

}



// 팝업 닫기
function popupClose(name) {

	if(name == null){
		$('.popup').hide();
	}else{
		$('.popup.popup-' + name).hide();
	}

	if($('.popupMenu').length != 0){
		$('.popupMenu').removeClass('on');
	}

	$('.container').removeClass('overlay').removeClass('white');

}



function scrollDisable(){
	$('html, body').addClass('scrollHidden').on('scroll touchmove mousewheel', function(e){
		e.preventDefault();
	});
}
function scrollAble(){
	$('html, body').removeClass('scrollHidden');
}


// 모바일 메뉴 열기
function filterMenuOpen() {
	$('.container').addClass('overlay')
	$('nav.filterMenu').show("slide", {direction: "right"});
	scrollDisable();
}

// 모바일 메뉴 닫기
function filterMenuClose() {

	$('nav.filterMenu').hide("slide", {direction: "right"});
	$('.container').removeClass('overlay');
	scrollAble();
}

$('.toggleBtn').on('click', function () {

	$(this).toggleClass('on');

})


function overlay(type){

	if(type == true){
		$('.container').addClass('overlay')
	}else{
		$('.container').removeClass('overlay')

	}

}


$('article.spinner a').on('click',function (){

	var _value = $(this).siblings('input');



	if($(this).hasClass('plus')){
		_value.val(parseInt(_value.val()) + 1);
	}else{

		if(_value.val() == 0){
			return false;
		}

		_value.val(parseInt(_value.val()) - 1);
	}


	if(_value.val() == 0){
		$(this).parents('.spinner').addClass('off')
	}else{
		$(this).parents('.spinner').removeClass('off')
	}


});


$('.sbox .set').on('click',function () {
	if($(this).parent().hasClass('on')){
		$(this).parent().removeClass('on');
		$(this).siblings().stop().slideUp();
	}else{
		$('.sbox').removeClass('on');
		$('.sbox ul').slideUp();
		$(this).parent().addClass('on');
		$(this).siblings().stop().slideDown();
	}

});

$('.sbox .selectMenu a').on('click',function () {

	var _txt = 	$(this).text();

	$(this).parents('.selectMenu').find('li a').removeClass('on');
	$(this).addClass('on');

	$(this).parents('.sbox').find('.set .txt').text(_txt);
	$(this).parents('.sbox').removeClass('on');

	$('.selectMenu').slideUp();

})



$(document).ready(function() {
	var _originalSize = $(window).width() + $(window).height()

	$(window).resize(function() {
		if ($(window).width() + $(window).height() != _originalSize) {
			console.log("keyboard active");
			$(".page__footer").removeClass("fixed");
		} else {
			console.log("keyboard closed");
			$(".page__footer").addClass("fixed");
		}
	});
});





$(document).on('keyup','.input-box input',function (){

	if($(this).val() != ""){
		$(this).siblings('.reset-btn').show();
	}else{
		$(this).siblings('.reset-btn').hide();
	}
})

$(document).on('click','.input-box .reset-btn',function (){

	$(this).siblings('input').val("");
	$(this).siblings('input').focus();
	$(this).hide();


	if($('input.user').length != 0){
		if($('input.user').val() != "" && $('input.pw').val() != ""){
			$('.page__footer .menu-btn').addClass('active');
		}else{
			$('.page__footer .menu-btn').removeClass('active');
		}
	}

});

$('.page__header .right-btn .heart-btn').on('click',function (){
	$(this).toggleClass('on');
})