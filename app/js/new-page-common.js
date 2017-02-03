$(document).ready(function() {
    if ($(".standard-checkbox").length > 0 ) {
        $(".standard-checkbox").styler();
    }

    if ($( ".standard-radio-btn").length > 0 ) {
        $(".standard-radio-btn").styler();
    }


    $(document).on('click', '.b-products-list__item__add-cart', function(e){
        $(this).closest(".b-products-list__item__buttons").addClass("calc-open");
        e.preventDefault();
    });


    $(document).on('focusin', '.b-data-item', function(e){
        $(this).addClass("active");
        e.preventDefault();
    });


    $(document).on('click', '.toggle-btn', function(e){
        $(this).closest(".toggle-wrapper").find(".toggle-block").stop().slideToggle(400);
        $(this).closest(".toggle-wrapper").toggleClass("open");
        e.preventDefault();
    });

    $(document).on('click', '.b-cart-table__delete', function(e){
        var this_elem = $(this).closest(".b-cart-table__tr");
        this_elem.next().remove();
        this_elem.remove();
        
    });



    $(document).on('focusout', '.b-data-item', function(e){
        var this_elem = $(this);
        setTimeout(function(){
            var val_input = this_elem.find(".b-data-item__input").val();
            if ((val_input == "") || (val_input == "+7 (___) ___-__-__")) {
                this_elem.removeClass("active");
            }
        },100);
        

    });

    data__item();
    function data__item() {
        $(".b-data-item").each(function(){
            var val_input = $(this).find(".b-data-item__input").val();
            if (!val_input == "") {
                $(this).addClass("active");
            }
        });
    }


    $(document).on('click', '.b-counter__btn', function(e){
        var step = $(this).closest(".b-counter").data("step"),
            this_input = $(this).closest(".b-counter").find(".b-counter__input"),
            value = this_input.val(),
            int_value = parseInt(value);
            
        if ($(this).hasClass("b-counter__minus") && (value < step)){
            return false;
            
        } else if ($(this).hasClass("b-counter__minus")){
            int_value = int_value - step;
        } else if ($(this).hasClass("b-counter__plus")){
            int_value = int_value + step;   
        }

        this_input.val(int_value);
        e.preventDefault();
    });



    if ($(".standard-datepicker").length > 0 ) {
        ( function( factory ) {
            if ( typeof define === "function" && define.amd ) {

                // AMD. Register as an anonymous module.
                define( [ "../widgets/datepicker" ], factory );
            } else {

                // Browser globals
                factory( jQuery.datepicker );
            }
        }( function( datepicker ) {

        datepicker.regional.ru = {
            closeText: "Закрыть",
            prevText: "",
            nextText: "",
            currentText: "Сегодня",
            monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
            "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
            monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
            "Июл","Авг","Сен","Окт","Ноя","Дек" ],
            dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
            dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
            dayNamesMin: [ "В","П","В","С","Ч","П","С" ],
            weekHeader: "Нед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: "" };
        datepicker.setDefaults( datepicker.regional.ru );

        return datepicker.regional.ru;

        } ) );

        $(".standard-datepicker" ).datepicker();
    }


    function schedule() {
        $(".b-schedule .schedule-shifting").each(function(){
            var this_data = $(this).data("schedule"),
                need_num = parseInt(this_data)
            $(this).css("width", this_data );
        });

       var best_width = $(".schedule-shifting.best").outerWidth(),
            parent_width = $(".schedule-shifting.best").closest(".b-schedule__item").outerWidth(),
            need_num = parent_width - best_width;
            $(".b-schedule__best-price").css("right", need_num);
    }
    
  	if ($(".implementation-table.price-offer").length > 0) {
  		schedule();
	}
    
    $(document).on('click', '.b-prompt__icon', function(e){
        $(this).closest(".b-prompt").find(".b-prompt__popup").fadeIn(400);
        e.preventDefault();
    });

    $(document).on('click', '.b-prompt__popup__close', function(e){
        $(this).closest(".b-prompt").find(".b-prompt__popup").fadeOut(400);
        e.preventDefault();
    });


    $(document).on('click', '.b-password-visibility', function(e){
        var this_input = $(this).closest(".b-password-input").find(".registration-form__input");
        if ($(this).closest(".b-password-input").hasClass("shown")) {
            this_input.attr("type", "password");
            $(this).closest(".b-password-input").removeClass("shown");
        } else {
            this_input.attr("type", "text");
            $(this).closest(".b-password-input").addClass("shown");
        }
        
        e.preventDefault();
    });
   
    $(document).on('click', '.b-filters-grid-toggle__item', function(e){
        var this_data = $(this).data("product");
        $(".b-products-list").removeClass("grid list");
        $(".b-products-list").addClass(this_data);
        $(".b-filters-grid-toggle__item").removeClass("active");
        $(this).addClass("active");
        e.preventDefault();
    });



    $(document).click(function(e){
        var target = $(e.target),
            this_wrap = target.closest(".datepicker-wrapper"),
            bl_date = target.closest("#ui-datepicker-div");
        if (this_wrap.length > 0) {
            $(".datepicker-wrapper").removeClass("open");
            this_wrap.addClass("open");
        } else if (this_wrap.length == 0 )  {
            $(".datepicker-wrapper").removeClass("open");
        } else if (bl_date.length > 0) {
            $(".datepicker-wrapper").removeClass("open");
        }
    });




    $(document).on('click', '[data-reg-selection]', function(e){
        var this_data = $(this).data("reg-selection");
        $("[data-reg-form]").removeClass("visible");
        $("[data-reg-form="+this_data+"]").addClass("visible");
    });



	$(document).on('click', '.filters-open-btn', function(e){
        $(".b-filters").fadeIn(400);
        $(this).fadeOut(400);
        e.preventDefault();
    });

	$(document).on('click', '.b-filters__close', function(e){
        $(".b-filters").fadeOut(400);
        $(".filters-open-btn").fadeIn(400);
        e.preventDefault();
    });

	$(document).on('click', '.b-login__open-btn', function(e){
		$(this).closest('.b-login__wrapper').find(".b-login-form").fadeToggle(400);
        e.preventDefault();
    });
	
});