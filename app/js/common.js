$(document).ready(function() {

	$(document).on('click', '[data-call]', function(e){
        var this_data = $(this).data("call");
        $("[data-popup="+this_data+"]").fadeIn(400);
        $("body").addClass("ovh");
        e.preventDefault();
    });
	$(document).on('click', '.popup-overlay', function(e){
        $(".popup").fadeOut(400);
        $("body").removeClass("ovh");
        e.preventDefault();
    });

	$(document).on('click', '[data-close-popup]', function(e){
        var this_data = $(this).data("close-popup");
        if (this_data != "all") {
        	$("[data-popup="+this_data+"]").fadeOut(400);
        } else {
        	$(".popup").fadeOut(400);
        	$("body").removeClass("ovh");
        }

        e.preventDefault();
    });


	if($('input.data-inputmask, .inputmask').length > 0) {
		$('input.data-inputmask, .inputmask').mask("+7 (999) 999-99-99");
	}

	var mainSlider = $('.main-slider').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		callbacks:true,
	});

	mainSlider.on( "changed.owl.carousel", function (event) {
		//console.log()
		$(".main-slider-nav__item.active").removeClass('active');
		$(".main-slider-nav__item").eq(event.page.index).addClass('active');
	})
	$('.main-slider-nav__item').click(function () {
		mainSlider.trigger('to.owl.carousel',[$(this).index(),500]);
	});


	var mainSec2 = $('.main-sec-2__slider').owlCarousel({
		loop: true,
		nav: false,
		items: 1
	})
	$('.main-sec-2__nav_prev').click(function() {
		mainSec2.trigger('prev.owl.carousel');
	})
	$('.main-sec-2__nav_next').click(function() {
		mainSec2.trigger('next.owl.carousel');
	})

	var culture = $('.slider-culture').owlCarousel({
		loop: true,
		margin: 20,
		nav: false,
		items: 5,
		responsive : {
		// breakpoint from 0 up
		0 : {
			items: 1
		},
		320: {
			items: 1
		},
		// breakpoint from 480 up
		480 : {
			items: 2
		},
		// breakpoint from 768 up
		768 : {
			items: 3
		},
		992 : {
			items: 5
		}

}
	})
	$('.slider-culture__nav .navigation-slider__prev').click(function() {
		culture.trigger('prev.owl.carousel');
	})
	$('.slider-culture__nav .navigation-slider__next').click(function() {
		culture.trigger('next.owl.carousel');
	})

	var works = $('.slider-works').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		//autoHeight: true,
		callbacks:true,
		responsive : true,
	});

	works.on( "changed.owl.carousel", function (event) {
		//console.log()
		$(".work-sec-2__navbar-item.active").removeClass('active');
		$(".work-sec-2__navbar-item").eq(event.page.index).addClass('active');
	});



				
	$('.work-sec-2__nav .navigation-slider__prev').click(function() {
		works.trigger('prev.owl.carousel');
	})
	$('.work-sec-2__nav .navigation-slider__next').click(function() {
		works.trigger('next.owl.carousel');
	})

	$('.work-sec-2__navbar-item').click(function () {
		works.trigger('to.owl.carousel',[$(this).index(),500]);
	});


	$('.dropdown-text').dropDownText();

	$('select').niceSelect();


	$( ".accordion" ).accordion({collapsible:true,heightStyle:"content"});
	$( ".accordion" ).accordion( "option", "icons", null );

	$( ".accordion" ).on( "accordionbeforeactivate", function( event, ui ) {
		ui.newHeader.addClass("open")
		ui.newHeader.find(".slides").addClass("open")
		ui.oldHeader.removeClass("open")
		ui.oldHeader.find(".slides").removeClass("open")
	});



	$( ".accordion-maps" ).accordion({collapsible:true,heightStyle:"content", active: false});
	$( ".accordion-maps" ).accordion( "option", "icons", null );

	$( ".accordion-maps" ).on( "accordionbeforeactivate", function( event, ui ) {
		ui.newHeader.addClass("open");
		ui.newHeader.find(".slides").addClass("open").addClass("open_green");
		ui.oldHeader.removeClass("open");
		ui.oldHeader.find(".slides").removeClass("open").removeClass("open_green");
	});


	/* BEGIN PERSON */

	function initPerson () {
		var ctxWidth = $('.persons__list').outerWidth(),
				blockWidth = $('.persons-item').width(),
				countBlockInLine = Math.floor(ctxWidth / blockWidth);

		$('.persons-item').each(function (indx) {
			var lineNumber = Math.floor(indx / countBlockInLine)+1,
					position = countBlockInLine * lineNumber;
			$('#'+$(this).data('description')).insertAfter($('.persons-item').eq(position-1));
		});
	}

	initPerson();

	function closePersonDescription () {
		$('.persons-item.active .link_next.active').removeClass('active');
		$('.persons-item.active').removeClass('active');
		$('.person-description').slideUp();
	}

	$('.persons-item').click(function () {
		if($(this).hasClass('active')){
			closePersonDescription();
		}else{
			closePersonDescription();

			$(this).find('.link_next').addClass('active');
			$(this).addClass('active');

			$('#'+$(this).data('description')).slideDown();
		}
	});

	$('.person-description__close').click(function () {
		closePersonDescription();
	});

	/* END PERSON */

	var el = $('.header-body'),
			elt = $('.header-head').outerHeight(),
			elh = el.outerHeight();

	function headHeight() {
		el = $('.header-body');
		elt = $('.header-head').outerHeight();
		elh = el.outerHeight();
		//console.log(elh)
	}

	function radialDraw () {
		$('.radial-item__canvas.no_animate').each(function () {
			var windowScroll = $(window).scrollTop(),
					windowHeight = $(window).height()*0.7,
					elemTop = $(this).offset().top;
			if(elemTop < (windowHeight+windowScroll)){
				$(this).radialCanvas().removeClass('no_animate');
			}
		});
	}

	if($(window).scrollTop() >= el.offset().top){
		if(!$('.hamburger').is(":visible")){
			$('.header-body').addClass('fixed');
			if(!$('.hamburger').is(":visible")) $('.header-head').css('margin-bottom',elh)
		}
	}

	$(window).scroll(function(){
		if(!$('.hamburger').is(":visible")){
			if($(window).scrollTop() >= el.offset().top){
				$('.header-body').addClass('fixed');
				if(!$('.hamburger').is(":visible")) $('.header-head').css('margin-bottom',elh)
			}
		}
		if($(window).scrollTop() < elt ){
			$('.header-body').removeClass('fixed');
			$('.header-head').css('margin-bottom',0)
		}

		radialDraw();

	});

	radialDraw();

	/* BEGIN HIDEMENU */
	$(window).load(function () {
		function autoHeightTopItem (argument) {
			var topItemMaxHeight = 0;
			$('.top__item').each(function () {
				topItemMaxHeight = Math.max(topItemMaxHeight, ($(this).find('.top__title').outerHeight()+$(this).find('.top__text').outerHeight(true)));
			});
			//console.log(topItemMaxHeight);
			$('.top__item').height(topItemMaxHeight);
		}

		autoHeightTopItem();


		var showItemList  = [],
				hideItemList = [];
		$('.main-menu__item').each(function() {
			showItemList.push($(this).width());
		});
		$('header').removeClass('size_item');
		if(!$('header').hasClass('size_item')) headHeight();
		//console.log(showItemList);

	function hideItem() {
		var sizeList = $('.main-menu').outerWidth(true),
				showItemListSum = 0,
				hideItemListSum = 0;
		for(var i=0; i<showItemList.length; i++) showItemListSum += showItemList[i];
		if(showItemListSum > sizeList){
			$('.main-menu').addClass('hide-item');
			$('.still').show();
		}

		sizeList = $('.main-menu').width();
			//console.log(sizeList +' --- '+ showItemListSum)
		while(showItemListSum > sizeList){
			$('.main-menu .main-menu__item').last().addClass('still__item').appendTo($('.still__list'));
			hideItemList.push(showItemList.pop());
			showItemListSum = 0;
			for(var i=0; i<showItemList.length; i++) showItemListSum += showItemList[i];
		}
		//console.log(showItemList)
		showItemListSum += hideItemList[hideItemList.length - 1];

		while(showItemListSum < sizeList){
			$('.still__list .main-menu__item').last().removeClass('still__item').appendTo($('.main-menu'));
			showItemList.push(hideItemList.pop());
			showItemListSum = 0;
			for(var i=0; i<showItemList.length; i++) showItemListSum += showItemList[i];
			showItemListSum += hideItemList[hideItemList.length - 1];
		}

		$('.main-menu').removeClass('hide-item');
		sizeListNoHide = $('.main-menu').width();
		$('.main-menu').addClass('hide-item');

		showItemListSum = 0;
		for(var i=0; i<showItemList.length; i++) showItemListSum += showItemList[i];
		hideItemListSum = 0;
		for(var i=0; i<hideItemList.length; i++) hideItemListSum += hideItemList[i];

		if((showItemListSum + hideItemListSum) < sizeListNoHide){
			$('.still').hide();
			$('.main-menu').removeClass('hide-item');
			//for(var i=0; i<hideItemList.length; i++){
			while(hideItemList.length > 0){
				$('.still__list .main-menu__item').last().removeClass('still__item').appendTo($('.main-menu'));
				showItemList.push(hideItemList.pop());
			}
		}
		headHeight();
	}

		function langMove (visibleHamburger) {
			if(visibleHamburger){
				if($('.lang').hasClass('in-head')){
					$('.main-menu').append("<li class='item-lang'></li>");
					$('.main-menu .item-lang').html($('.lang.in-head').removeClass('in-head'));
				}
			}else{
				if(!$('.lang').hasClass('in-head')){
					$('.header-head__side_right').append($('.lang').addClass('in-head'));
					$('.main-menu .item-lang').remove();
				}
			}
		}

		function hideOrHamburger () {
			if($('.hamburger').is(":visible")){
				$('.header-body').removeClass('fixed');
				$('.header-head').css('margin-bottom',0)
				$('.still').hide();
				$('.main-menu').removeClass('hide-item').addClass('main-menu_hamburger');
				headHeight();
				//console.log(hideItemList.length)
				//for(var i = 0; i < hideItemList.length; i++){
				while(hideItemList.length > 0){
					$('.still__list .main-menu__item').last().removeClass('still__item').appendTo($('.main-menu'));
					showItemList.push(hideItemList.pop());
				}
				langMove(true);
			}else{
				$('.main-menu').removeClass('main-menu_hamburger').removeClass('active-animation');
				$('.wrapper').removeClass('active-animation');
				$('.hamburger__text-header.active').removeClass('active');
				$('footer').removeClass('active-animation');
				langMove(false);
				//$('.header-body').addClass('fixed');
				headHeight();
				hideItem();
			}
		}

		$('.hamburger').click(function () {
			$(this).find('.hamburger__text-header').toggleClass('active');
			$('.main-menu_hamburger').toggleClass('active-animation');
			$('.wrapper').toggleClass('active-animation');
			$('footer').toggleClass('active-animation');
		});
			hideOrHamburger();

		//$('.preloader').fadeOut();

		$(window).resize(function () {

			initPerson();

			hideOrHamburger();

			headHeight();

			autoHeightTopItem();



			for(var i=0; i<charts.length; i++) redrawPieChart(charts[i]);


			if(!$('.footer-hamburger').is(":visible")){
				$('.footer-blocks').show();
				$('.footer-hamburger .hamburger__text').removeClass('active');

			}else{
				$('.footer-blocks').hide();
			}

		});
	});
		
		



	/* END HIDEMENU */



	/* BEGIN POPUP-MAPS */
	$('.accordion-maps__head, .accordion-maps__item').click(function () {
		var id = $(this).data("id");
		$('.popup-maps-right.active').removeClass('active');
		$('.accordion-maps__item.active').removeClass('active');

		if($(this).hasClass('accordion-maps__item')){
			$(this).addClass('active');
			$('.popup-maps-right[data-id = "'+id+'"]').addClass('active');
		}

		showRegion(id);

		if($(this).hasClass('accordion-maps__head') && !$('.accordion-maps__head').hasClass('open')) showAllRegion();
	});

	/* END POPUP-MAPS */

	$('.popup-maps-right__close').click(function () {
		$(this).closest('.popup-maps-right').removeClass('active');
	});



	$('.popup-maps__slide').click(function () {
		if(!$(this).closest('.popup-maps').hasClass('active')){
			$(this).closest('.popup-maps').addClass('active');
		}else{
			$(this).closest('.popup-maps').removeClass('active');
		}
	});

	var charts = [];

	/* BEGIN CHART */
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(initPieChart);
	function initPieChart() {
		$('.diagram__diagram').each(function () {
			drawPieChart($(this));
		});
	}



	function drawPieChart (elem) {
		var elemData = [],
				slicesData = {}; 

		elemData.push(['Task', elem.closest('.diagram').find('.head_h2').text()]);
		elem.closest('.diagram').find('.diagram-maps .diagram-maps__item').each(function (indx) {
			elemData.push([$(this).find('.diagram-maps__key').text(), parseInt($(this).find('.diagram-maps__value').text())]);

			slicesData[indx] = {'color': $(this).find('.diagram-maps__color').css('background-color')};
		});
		//console.log(elemData)
		var data = google.visualization.arrayToDataTable(elemData);

		var options = {
			height: 230,
			pieHole: 0.45,
			legend: 'none',
			chartArea: {left:0, top:15, width: '99%', height: '90%'},
			pieSliceText: 'none',
			slices: slicesData,
			tooltip: {trigger: 'selection'},
		};

		var chart = new google.visualization.PieChart(document.getElementById(elem.attr('id')));
		charts.push([chart, data, options]);
		chart.draw(data, options);
	}

	function redrawPieChart (chartData) {
		chartData[0].draw(chartData[1], chartData[2]);
	}

	google.charts.setOnLoadCallback(initColumnYellowChart);
	function initColumnYellowChart() {
		var data = google.visualization.arrayToDataTable([
				["Year", "Count", { role: "style" } , { role: 'annotation', p: {html: true}}],
				["2012 год", 31375, "#bd9c24", "31 375 Га"],
				["2013 год", 51687, "#d4b02f", "51 687 Га  +65 %"],
				["2014 год", 71971, "#e6c13c", "71 971 Га  +39 %"],
				["2015 год", 76596, "#f7d454", "76 596 Га  +6 %"]
			]);

		var options = {
			height: 300,
			pieHole: 0.45,
			legend: 'none',
			chartArea: {left:'10%', top: '10%', width: '80%', height: '80%'},
			pieSliceText: 'none',
			displayAnnotations: true,
			annotations:{
				alwaysOutside:true,
				textStyle: {
					fontName: 'Arial',
					fontSize: 16,
					bold: true,
					color: '#333',
				}
			},
			bar: {groupWidth: '90%'},
			legend: { position: 'none' },
			tooltip: {trigger: 'selection'},
		};

		if($('div').is('.column_graph_yellow')){
			var chart = new google.visualization.ColumnChart($('.column_graph_yellow')[0]);
			charts.push([chart, data, options]);
			chart.draw(data, options);
		}

	}
	
	google.charts.setOnLoadCallback(initColumnGreenChart);
	function initColumnGreenChart() {
		var data = google.visualization.arrayToDataTable([
				["Year", "Rent", { role: 'annotation'}, "Own", { role: 'annotation'}],
				["2013 год", 51500, "51 500 Га", 22827, "22 827 Га"],
				["2014 год", 52417, "52 417 Га", 36887, "36 887 Га"],
				["Отклонение 2013/14гг.", 917, "917 Га", 14060, "14 060 Га"]
			]);

		var options = {
			height: 300,
			pieHole: 0.45,
			legend: 'none',
			chartArea: {left:'10%', top: '10%', width: '80%', height: '80%'},
			pieSliceText: 'none',
			displayAnnotations: true,
			annotations:{
				alwaysOutside:true,
				textStyle: {
					fontName: 'Arial',
					fontSize: 16,
					bold: true,
					color: '#333',
				}
			},
			colors: ['#87b94b', '#6c9141'],
			bar: {groupWidth: '95%'},
			legend: { position: 'none' },
			tooltip: {trigger: 'selection'},
		};


		if($('div').is('.column_graph_green')){
			var chart = new google.visualization.ColumnChart($('.column_graph_green')[0]);
			charts.push([chart, data, options]);
			chart.draw(data, options);
		}
	}

	/* END CHART */

	



	$('.footer-hamburger').click(function () {
		$(this).find('.hamburger__text').toggleClass('active');
		$('.footer-blocks').slideToggle();
	});


	$('.main-menu .main-menu__item_main-sub-menu').on('click', function () {
		if($('.main-menu').hasClass('main-menu_hamburger')){
			$(this).find('.main-sub-menu').slideToggle();
			return false;
		}
	});



	$('.popup-maps-right__content').jScrollPane({autoReinitialise: true});





	$('.dropdown-link').click(function () {
		if(!$(this).hasClass('open')){
			$(this).prev('.dropdown-text').dropDownTextOpen();
			$(this).addClass('open');
		}else{
			$(this).prev('.dropdown-text').dropDownTextClose();
			$(this).removeClass('open');
		}
		return false;
	});




});

