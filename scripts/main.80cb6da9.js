"use strict";$(document).ready(function(){$(".projects-slider").flickity(),$(".consulting-slider").flickity()}),$(document).ready(function(){$(".projects-slider").flickity(),$(".consulting-slider").flickity()}),$(document).ready(function(){function a(a,b){$.simpleWeather({location:a,woeid:b,unit:"c",success:function(a){var b='<h2><i class="icon-'+a.code+'"></i> '+a.temp+"&deg;"+a.units.temp+"</h2>";b+='<li class="currently">'+a.currently+"</li>",b+="<li>"+a.alt.temp+"&deg;F</li></ul>",$("#weather").html(b)},error:function(a){$("#weather").html("<p>"+a+"</p>")}})}"geolocation"in navigator?$(".js-geolocation").show():$(".js-geolocation").hide(),$(".js-geolocation").on("click",function(b){b.preventDefault(),$(".weather-info p").text("The weather in your current location is").hide(0).fadeIn("fast"),navigator.geolocation.getCurrentPosition(function(b){a(b.coords.latitude+","+b.coords.longitude),$(".js-geolocation").hide()})}),$(document).ready(function(){a("Barcelona","753692")})}),$(document).ready(function(){function a(a,b){$.simpleWeather({location:a,woeid:b,unit:"c",success:function(a){var b='<h2><i class="icon-'+a.code+'"></i> '+a.temp+"&deg;"+a.units.temp+"</h2>";b+='<li class="currently">'+a.currently+"</li>",b+="<li>"+a.alt.temp+"&deg;F</li></ul>",$("#weather").html(b)},error:function(a){$("#weather").html("<p>"+a+"</p>")}})}"geolocation"in navigator?$(".js-geolocation").show():$(".js-geolocation").hide(),$(".js-geolocation").on("click",function(b){b.preventDefault(),$(".weather-info p").text("The weather in your current location is").hide(0).fadeIn("fast"),navigator.geolocation.getCurrentPosition(function(b){a(b.coords.latitude+","+b.coords.longitude),$(".js-geolocation").hide()})}),$(document).ready(function(){a("Barcelona","753692")})}),$(document).ready(function(){var a=$("#mobile-menu-switch");a.click(function(a){var b,c;a.preventDefault(),b=$(".main--nav"),c=$(".mobile-main-nav"),b.toggleClass("open"),c.toggleClass("open")})}),$(document).ready(function(){var a=$("#mobile-menu-switch");a.click(function(a){var b,c;a.preventDefault(),b=$(".main--nav"),c=$(".mobile-main-nav"),b.toggleClass("open"),c.toggleClass("open")})}),function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length){var b=0;return"fixed"===$(".main-nav").css("position")&&(b=$(".main-nav").height()+30),$("html,body").animate({scrollTop:a.offset().top-b},400),!1}}})}(),function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length){var b=0;return"fixed"===$(".main-nav").css("position")&&(b=$(".main-nav").height()+30),$("html,body").animate({scrollTop:a.offset().top-b},400),!1}}})}();