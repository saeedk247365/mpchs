var drop = document.getElementById('firstt');
var drop2 = document.getElementById('secondd');
var drop3 = document.getElementById('thirdd');
var drop4 = document.getElementById('fourthth');
var caret1 = document.getElementById('caret1');
var caret2 = document.getElementById('caret2');
var caret3 = document.getElementById('caret3');
var caret4 = document.getElementById('caret4');
var dropdownclose = document.getElementById('droppdownclose');




drop.onclick= function() {
      var dropdd = document.getElementById('firstdd');
      var drop3dd = document.getElementById('firstthir');
      var drop4dd = document.getElementById('firstfourth');
      var drop2dd = document.getElementById('firstsec');


      caret1.classList.toggle('caret-up1');
      dropdd.classList.toggle('sub_main-menu__dropdown1');
      drop2dd.classList.remove('sub_main-menu__dropdown2');
      drop3dd.classList.remove('sub_main-menu__dropdown3');
      drop4dd.classList.remove('sub_main-menu__dropdown4');
      caret2.classList.remove('caret-up2');
      caret3.classList.remove('caret-up3');
      caret4.classList.remove('caret-up4');

      // dropdd.classList.add('sub_main-menu__dropdown');
      
      // drop.onmouseout = function() {
      //       dropdd.classList.remove('sub_main-menu__dropdown');
      // }
}

dropdownclose.onmouseover= function(){
      var dropdd = document.getElementById('firstdd');
      var drop4dd = document.getElementById('firstfourth');
      var drop3dd = document.getElementById('firstthir');
      var drop2dd = document.getElementById('firstsec');
      dropdd.classList.remove('sub_main-menu__dropdown1');
      drop2dd.classList.remove('sub_main-menu__dropdown2');
      drop3dd.classList.remove('sub_main-menu__dropdown3');
      drop4dd.classList.remove('sub_main-menu__dropdown4');
      caret2.classList.remove('caret-up2');
      caret3.classList.remove('caret-up3');
      caret1.classList.remove('caret-up1');
      caret4.classList.remove('caret-up4');

}

// drop2.onmouseout= function(){
//       var dropdd = document.getElementById('firstdd');
//       var drop3dd = document.getElementById('firstthir');
//       var drop2dd = document.getElementById('firstsec');
//       dropdd.classList.remove('sub_main-menu__dropdown1');
//       drop2dd.classList.remove('sub_main-menu__dropdown2');
//       drop3dd.classList.remove('sub_main-menu__dropdown3');
//       caret2.classList.remove('caret-up2');
//       caret3.classList.remove('caret-up3');
//       caret1.classList.remove('caret-up1');

// }
// drop3.onmouseout= function(){
//       var dropdd = document.getElementById('firstdd');
//       var drop3dd = document.getElementById('firstthir');
//       var drop2dd = document.getElementById('firstsec');
//       dropdd.classList.remove('sub_main-menu__dropdown1');
//       drop2dd.classList.remove('sub_main-menu__dropdown2');
//       drop3dd.classList.remove('sub_main-menu__dropdown3');
//       caret2.classList.remove('caret-up2');
//       caret3.classList.remove('caret-up3');
//       caret1.classList.remove('caret-up1');

// }

drop2.onclick= function() {
      var drop2dd = document.getElementById('firstsec');
      var drop4dd = document.getElementById('firstfourth');
      var drop3dd = document.getElementById('firstthir');
      var caret2 = document.getElementById('caret2');
      var caret4 = document.getElementById('caret4');
      var drop4dd = document.getElementById('firstfourth');


      var dropdd = document.getElementById('firstdd');
      caret2.classList.toggle('caret-up2');

      drop2dd.classList.toggle('sub_main-menu__dropdown2');
      caret1.classList.remove('caret-up1');
      caret3.classList.remove('caret-up3');

      drop4dd.classList.remove('sub_main-menu__dropdown4');
      dropdd.classList.remove('sub_main-menu__dropdown1');
      drop3dd.classList.remove('sub_main-menu__dropdown3');
      caret4.classList.remove('caret-up4');
      // drop2.onmouseout = function() {
      //       drop2dd.classList.remove('sub_main-menu__dropdown');
      // }
}
drop3.onclick= function() {
      var drop3dd = document.getElementById('firstthir');
      var drop4dd = document.getElementById('firstfourth');
      var dropdd = document.getElementById('firstdd');
      var drop2dd = document.getElementById('firstsec');
      var caret3 = document.getElementById('caret3');
      var caret4 = document.getElementById('caret4');

      caret3.classList.toggle('caret-up3');
      drop3dd.classList.toggle('sub_main-menu__dropdown3');
      dropdd.classList.remove('sub_main-menu__dropdown1');
      drop2dd.classList.remove('sub_main-menu__dropdown2');
      drop4dd.classList.remove('sub_main-menu__dropdown4');
      caret2.classList.remove('caret-up2');
      caret1.classList.remove('caret-up1');
      caret4.classList.remove('caret-up4');
      // drop3.onmouseout = function() {
      //       drop3dd.classList.remove('sub_main-menu__dropdown');
      // }
}
  
drop4.onclick= function() {
      var drop3dd = document.getElementById('firstthir');
      var drop4dd = document.getElementById('firstfourth');
      var dropdd = document.getElementById('firstdd');
      var drop2dd = document.getElementById('firstsec');
      var caret3 = document.getElementById('caret3');
      var caret4 = document.getElementById('caret4');
      caret4.classList.toggle('caret-up4');
      drop4dd.classList.toggle('sub_main-menu__dropdown4');

      caret3.classList.remove('caret-up3');
      drop3dd.classList.remove('sub_main-menu__dropdown3');
      dropdd.classList.remove('sub_main-menu__dropdown1');
      drop2dd.classList.remove('sub_main-menu__dropdown2');
      caret2.classList.remove('caret-up2');
      caret1.classList.remove('caret-up1');
      // drop3.onmouseout = function() {
      //       drop3dd.classList.remove('sub_main-menu__dropdown');
      // }
}
  