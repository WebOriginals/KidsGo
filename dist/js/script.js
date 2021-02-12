// Polyfill for Element.closest that falls back to Element.matches that falls back to querySelectorAll
// Created for blazy.js 1.8.1 - https://github.com/dinbror/blazy to ensure IE7+ support


(function () {
    if (!Element.prototype.matches) {
    Element.prototype.matches = 
        Element.prototype.matchesSelector || 
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector || 
        Element.prototype.oMatchesSelector || 
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;            
        };
	}

	if (!Element.prototype.closest) {
		Element.prototype.closest = Element.prototype.closest ||
		function(selector) {
			var element = this;
	        while (element.matches && !element.matches(selector)) element = element.parentNode;
	        return element.matches ? element : null;
		};
	}
})();
/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
  (function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});


$( document ).ready(function() {
    if( $( '.b-lazy' ).length ) {
    var bLazy = new Blazy({
        breakpoints: [{
            width: 420 // Max-width
            , src: 'data-src-small'
        }]
        , success: function (element) {
            setTimeout(function () {
                // We want to remove the loader gif now.
                // First we find the parent container
                // then we remove the "loading" class which holds the loader image
                var parent = element.parentNode;
                parent.className = parent.className.replace(/\bloading\b/, '');
            }, 200);
        }
    });
}
    parameters = {
    duration: 1500,
}

if( $( '.body-header' ).length ) {
    $(".cmn-toggle-switch__htx").click(function () {
        $(this).toggleClass("active");
        if (this.classList.contains("active") === true) {
            $('.wrapper-menu').addClass("active");
            $('body').addClass('no-scroll');
            $(".wrapper-gamburger").addClass('menu-hover');
        } else {
            $('.wrapper-menu').removeClass("active");
            $('body').removeClass('no-scroll');
            $(".wrapper-gamburger").removeClass('menu-hover');
            //это для ст контакты скрывает настройки при клике на гамбургер
            $('.wrapper-sidebar').removeClass("settings-open");
            $('.btn-settings').removeClass("active");
        }
    });

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        $(".second-menu").click(function () {

            var elem = this;
            var block = $(elem).closest('.link-menu');
            var items = $(block).find('.second-menu');
            var ul = $(block).find('ul');
            $(block).toggleClass("open");
            $(ul).slideToggle(parameters);

        });
    }
}


    if( $( '.popular-products__favorites' ).length ) {
    $(".popular-products__favorites").click(function () {
        var elem = this;
        var normal = $(elem).find('.ic-favorites');
        var active = $(elem).find('.ic-favorites-active');

        $(normal).toggleClass('invis');
        $(active).toggleClass('vis');
    });
}










    if( $( '.select-value' ).length ) {
    if (window.screen.width <= 1240) {
        $('.select-value').html("ценa ↑");
    }
}

( function( $ ){

    // Настройки

    var settings = {
        select_value : 'select-value',
        action : 'select_edit',
        class_open : 'open',
        class_transfotm : 'transfotm',
        class_wrapper : 'wrapper-input',
        class_block : 'wrapper-size',
        class_buffer : 'input-buffer',
        class_items : 'list__itams',
        class_selector : 'js_size_selector',
        class_disabel : 'list__itams-disabel',
    };


    var hendler = {

        // Инициализация

        construct : function(){
            if( $( "." + settings.class_wrapper ).length ){
                $( "." + settings.class_wrapper ).unbind( "click." + settings.action );
                $( "." + settings.class_wrapper ).bind( "click." + settings.action, function (){
                    hendler.select_action( this );
                });
            }
        },

        // Нажатие на блок селекта

        select_action : function( elem ){

            var input = $( elem ).find( 'input' ); // Инпут блока
            var value = $( elem ).find( '.' + settings.select_value ); // Значение блока
            var block = $( elem ).closest( '.' + settings.class_block ); // Находим общую обертку
            var selector = $( block ).find( '.' + settings.class_selector ); // Находим облок элементов внутри общей обертки
            var items = $( selector ).find( '.' + settings.class_items ).not( '.' + settings.class_disabel ); // Находим все item внутри общей обертки

            // Закрыть селект

            var close_select = function(){
                $( items ).unbind( 'click.' + settings.action ); // Отменяем оброботчик кликов на item
                $( document ).unbind( 'mouseup.' + settings.action ); // Отменяем обработчик клика вне общей обертки
                $( selector ).removeClass( settings.class_open ); // Закрываем блок
                $( block ).removeClass( settings.class_transfotm ); // Изменяем стрелку селекта
            };

            $( selector ).toggleClass( settings.class_open ); // Открываем или скрываем

            // Если открыли блок селекта

            if( $( selector ).hasClass( settings.class_open ) ){

                $( block ).addClass( settings.class_transfotm ); // Изменяем стрелку селекта

                // Определяем обработчик клика на item

                $( items ).unbind( 'click.' + settings.action ).bind( 'click.' + settings.action, function(){

                    $( value ).text( $( this ).text() ); // Берем текст из item и сохраняем в видимое выбраное значение
                    $( input ).val( $( this ).data( 'value' ) || $( this ).text() ); // Берем дата параметр или текст из item и сохраняем в наш input

                    if(window.screen.width<=1023) {
                        $(value).text(value.text().substring(0, 27)); //ограничиваем кол-во символов на строке
                        if ($(value).text().length >= 27) { // считаем сколько символов и если больше или равно 27 добавлять ...
                            $(value).append("...");
                        }
                    } else {
                        $(value).text(value.text().substring(0, 50)); //ограничиваем кол-во символов на строке
                        if ($(value).text().length >= 50) { // считаем сколько символов и если больше или равно 27 добавлять ...
                            $(value).append("...");
                        }
                    }
                    close_select();
                });

                // Определяем обработчик клика вне блока

                $( document ).unbind( 'mouseup.' + settings.action ).bind( 'mouseup.' + settings.action, function( e ){

                    // Если нажали не на нашу общую обертку или не на блок внутри нее

                    if( !$( block ).is( e.target ) && $( block ).has( e.target ).length === 0 ){ close_select(); }
                });

            } else { close_select(); }
        }
    };

    window.obora_selector = hendler;

    $( document ).ready( function(){ hendler.construct(); });

})( jQuery );
    if( $( '.search-header' ).length ) {
    $(".search-header").click(function () {
        $(this).toggleClass("active");
        if (this.classList.contains("active") === true) {
            $('.body-header__bottom').addClass("body-header__bottom-open");
        } else {
            $('.body-header__bottom').removeClass("body-header__bottom-open");
        }
    });
    $(".wrapper-search-header__close").click(function () {
        $('.search-header').removeClass("active");
        $('.body-header__bottom').removeClass("body-header__bottom-open");
    });
}

    if( $( '.btn-settings' ).length ) {
    $(".btn-settings").click(function () {

        $('.wrapper-sidebar').addClass("settings-open");
        $('.btn-close-sitings').addClass("btn-close-sitings-open");
        $('body').addClass('no-scroll');
    });
    $(".btn-close-sitings").click(function () {

        $('.btn-close-sitings').removeClass("btn-close-sitings-open");
        $('.wrapper-sidebar').removeClass("settings-open");
        $('body').removeClass('no-scroll');
    });
}
    if( $( '.available' ).length ) {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        $(".available").click(function () {
            parameters = {
                duration: 2000,
            }
            var elem = this;
            var block = $(elem).closest('.point-shop');
            var items = $(block).find('.available-body');
            $(items).slideToggle(parameters);
            $(elem).toggleClass("open");
        });
    }
}
    //массив из рейтингов
const ratings = document.querySelectorAll('.rating');

if( ratings.length > 0){
    initRatings();
}

//Основная функция
function initRatings() {
    let ratingActive,ratingValue;
    //Бегаем по всем рейтингам на странице

    for(let index = 0; index < ratings.length; index ++){
        const rating = ratings[index];
        initRating(rating);

    }

    //Инициализируем конкрентый рейтинг
    function  initRating(rating){
        initRatingVars(rating)

        setRatingActiveWidth();
    }

    // Инициализация переменных
    function initRatingVars(rating){
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }

    //Изменяем ширину активных звезд
    function setRatingActiveWidth ( index = ratingValue.innerHTML){
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ ratingActiveWidth }%`;
    }
}



    if( $( '.similar-products-container' ).length ) {
    var similarProducts = new Swiper('.similar-products-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        preloadImages: false,
        lazy: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.6,
                spaceBetween: 20
            },
            // when window width is >= 640px
            767: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    });
}
    if( $( '.new-collection-container' ).length ) {
    var newCollection = new Swiper('.new-collection-container', {
        // Enable lazy loading
        lazy: true,
        navigation: {
            nextEl: '.new-collection-button-next',
            prevEl: '.new-collection-button-prev',
        },
        pagination: {
            el: '.new-collection-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            280: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // when window width is >= 640px
            990: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            2500: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }

    });
}
    if( $( '.article-container' ).length ) {
    var article = new Swiper('.article-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        preloadImages: false,
        lazy: true,
        pagination: {
            el: '.article-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.article-button-next',
            prevEl: '.article-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            280: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // when window width is >= 640px
            990: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            2500: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
}
    if( $( '.brends-container' ).length ) {
    var brends = new Swiper('.brends-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        preloadImages: false,
        lazy: true,
        pagination: {
            el: '.brends-pagination',
            clickable: true,
        },

        breakpoints: {
            // when window width is >= 320px
            280: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // when window width is >= 480px
            320: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            // when window width is >= 640px
            767: {
                slidesPerView: 6,
                spaceBetween: 20
            }
        }
    });
}
    if( $( '.first-screen-container' ).length ) {
    var firstScreen = new Swiper('.first-screen-container', {
        lazy: true,
        navigation: {
            nextEl: '.first-screen-button-next',
            prevEl: '.first-screen-button-prev',
        },
        pagination: {
            el: '.first-screen-pagination',
            clickable: true,
        }
    });
}

    if( $( '.slider-little-container' ).length ) {
    var sliderLlittle = new Swiper('.slider-little-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop:true,
        slideToClickedSlide:true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            767: {
                direction: 'horizontal',
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },

            1280: {
                direction: 'vertical',
                slidesPerView: 4,
            },
        }
    });

    if(window.screen.width>=767) {
        var sliderLarge = new Swiper('.slider-large-container', {
            thumbs: {
                swiper: sliderLlittle
            }
        });
    } else {
        var sliderLarge = new Swiper('.slider-large-container', {
            pagination: {
                el: '.slider-large-pagination',
                clickable: true,
            },
        });
    }
};



    if( $( '.card-info__quantity' ).length ) {
    function countFunc(count) {
        var btnPlus = count.querySelector('.card-info__plus');
        var btnMinus = count.querySelector('.card-info__minus');
        var field = count.querySelector('.card-info__number');
        var fieldValue = parseFloat(field.value, 10);//Прообразовываем к числу

        btnMinus.addEventListener('click', function () {
            if (fieldValue > 1) {
                fieldValue--;
                field.value = fieldValue;
            } else {
                return 1;
            }
        });
        btnPlus.addEventListener('click', function () {
            fieldValue++;
            field.value = fieldValue;
        });

    }

    var counts = document.querySelectorAll('.card-info__quantity');
    counts.forEach(countFunc);
}
    if( $( '.payment-method' ).length ) {
    $(".payment-method").click(function () {
        var elem = this;
        var block = $(elem).next('.body-payment-method');
        $(block).slideToggle(parameters);
        $(elem).toggleClass("open");
    });
}
    if( $( '.password-img' ).length ) {
    $(".password-img").mousedown(function () {
        var elem = this;
        var pas = $(elem).next('.wrapper-field-input');
        $(pas).attr('type', 'text');
    });
    $(".password-img").mouseout(function () {
        var elem = this;
        var pas = $(elem).next('.wrapper-field-input');
        $(pas).attr('type', 'password');
    });
}






    /*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {



// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

    if( $( '.wrapper-field-input' ).length ) {
    (function () {
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
            (function () {
                // Make sure we trim BOM and NBSP
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function () {
                    return this.replace(rtrim, '');
                };
            })();
        }

        [].slice.call(document.querySelectorAll('.wrapper-field-input')).forEach(function (inputEl) {
            // in case the input is already filled..
            if (inputEl.value.trim() !== '') {
                classie.add(inputEl.parentNode, 'input--filled');
            }

            // events:
            inputEl.addEventListener('focus', onInputFocus);
            inputEl.addEventListener('blur', onInputBlur);
        });

        function onInputFocus(ev) {
            classie.add(ev.target.parentNode, 'input--filled');
        }

        function onInputBlur(ev) {
            if (ev.target.value.trim() === '') {
                classie.remove(ev.target.parentNode, 'input--filled');
            }
        }
    })();
}
    if( $( '.textarea' ).length ) {
    var textarea = document.querySelector('textarea');

    textarea.addEventListener('keyup', function () {
        if (this.scrollTop > 0) {
            this.style.height = this.scrollHeight + "px";
        }
    });
}
    

/*
* список дата атрибутов
* data-width: задает шиину range в px
* data-type: тип: duble - двойной, single - одинарный
* data-units: отображение единиц измерения
* data-value: применяется к max и к min,
* задает максимаьное и минимальное значение диапазона соотетственно
*/

// получаем элементы min, max, fill и самого блока range
if( $( '.filter-slider-price' ).length ) {
    const min = document.querySelector('.min-range-item');
    const max = document.querySelector('.max-range-item');
    const rangeBlock = document.querySelector('.range');
    let fill = document.querySelector('.range-fill');
    const infoBox = document.querySelector('.info');

// блоки для вывода текущих параметров сортировки по цене (min - max)
    let minInfo = document.querySelector('.min-price');
    let maxInfo = document.querySelector('.max-price');

// получаем настройки из data аттрибутов
    const dataWidth = +rangeBlock.dataset.width;
    const dataType = rangeBlock.dataset.type;
    const dataUnits = rangeBlock.dataset.units;
    const dataMinVal = +min.dataset.value;
    const dataMaxVal = +max.dataset.value;

// получаем начальную точку блока range
    const startX = rangeBlock.getBoundingClientRect().x;

// если 2 ползука берём их ширину для расчетов, чтоб не наезжали друг на друга
    let shiftMax = max.clientWidth;
    let shiftMin = min.clientWidth;

// проверяем настрйки типа, если одинарный - убираем минимальный ползунок
    if (dataType === 'single') {
        min.style.display = 'none';
        document.querySelector('.min-box').style.display = 'none';
        shiftMin = 0;
    }
    if (dataType === 'duble') {
        min.style.display = 'block';
        document.querySelector('.min-box').style.display = 'block';
    }

// параметры ползунков
    let minValue = startX;
    let maxValue = startX + dataWidth - shiftMax;

// задаем стили их дата атрибутов
    rangeBlock.style.width = dataWidth + 'px';
    infoBox.style.width = dataWidth + 'px';
    minInfo.insertAdjacentHTML('beforebegin', dataUnits);
    minInfo.insertAdjacentHTML('afterbegin', dataMinVal);
    maxInfo.insertAdjacentHTML('beforebegin', dataUnits);
    maxInfo.insertAdjacentHTML('afterbegin', dataMaxVal);

// задаем инлайново стили, чтобы потом былм данные
    min.style.left = 0 + 'px';
    max.style.left = dataWidth - shiftMax + 'px';


    /**
     * запускаем функцию при нажатии кнопки мыши
     * @param event {Event} событие
     */
    const check = (event) => {

        // чтобы не терять таргет - отслеживаем тот ползунок, на котором было событие mousedown
        let targetMain = event.target;

        // корректные значения допустимые для перемещения ползунка, используются дальше
        let currentMaxValue, currentMinValue;

        /**
         * отслеживаем перемещение мыши и вычисляем координаты ползунка)
         * @param event {Event} событие
         */
        const move = (event) => {

            // у touch события массив эвентов, сводим к одной переменой этим условием
            let e;
            (event.type === 'touchmove') ? e = event.touches[0] : e = event;

            // если таргет максимальное значение
            if (targetMain === max) {
                currentMaxValue = maxValue;
                currentMinValue = parseInt(min.style.left) + shiftMin + startX;
            }

            // если таргет минимальное значение
            if (targetMain === min) {
                currentMinValue = minValue;
                currentMaxValue = parseInt(max.style.left) - shiftMax + startX;
            }

            // меняем положение активного ползунка от края и до другого ползунка
            if (e.clientX - (shiftMin / 2) > currentMinValue && e.clientX - (shiftMax / 2) < currentMaxValue) {
                targetMain.style.left = e.clientX - startX - (shiftMax / 2) + 'px';
            } else if (e.clientX < currentMinValue && targetMain === min) {
                targetMain.style.left = 0 + 'px';
            } else if (e.clientX > currentMaxValue && targetMain === max) {
                targetMain.style.left = dataWidth - shiftMax + 'px';
            } else if (e.clientX < currentMinValue && targetMain === max && shiftMin === 0) {
                targetMain.style.left = 0 + 'px';
            }

            // изменяем зарисовку между ползунками
            fill.style.left = min.style.left;
            fill.style.width = parseInt(max.style.left) - parseInt(min.style.left) + shiftMax + 'px';

            // выводим информацию о выбранном диапазоне цен
            let targetPrice;
            (targetMain === max) ? targetPrice = maxInfo : targetPrice = minInfo;

            targetPrice.textContent = Math.floor(parseInt(targetMain.style.left) * (dataMaxVal - dataMinVal) / (dataWidth - shiftMax) + dataMinVal + '');

        }


        // вешаем слушатель на движение мыши по всему документу
        document.addEventListener('mousemove', move);
        document.addEventListener('touchmove', move);

        /**
         * если отпустили кнопку - удаляем слушатели на перемещение мыши
         */
        let mouseUpFn = () => {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('touchmove', move);
        }

        // ждем отпускания лкм чтобы убить слушатель движения мыши
        document.addEventListener('mouseup', mouseUpFn);
        document.addEventListener('touchend', mouseUpFn);
    }


    rangeBlock.addEventListener('mousedown', check);
    rangeBlock.addEventListener('touchstart', check);
}
})