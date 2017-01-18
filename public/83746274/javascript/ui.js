// Arrow on landing page
$(".arrow").click(function(){
  $('html, body').animate({
    scrollTop: $("#mainbody").offset().top
}, 1000);
return false;
});

// Fixed nav bar on mainbody
var $navBar = $('nav');
var navPos = $navBar.offset().top;

$(window).scroll(function() {
   var scrollPos = $(this).scrollTop();

  if (scrollPos >= navPos) {
       $navBar.addClass('fixed');
   } else {
       $navBar.removeClass('fixed');
   }
});

$('select').on('change', function() {
  $('select').not(this).attr('disabled', true);
});

$('.filter-bar button').on('click', function() {
  $('select').not(this).attr('disabled', false);
});

// Filter Bar Styling
// $('select').each(function(){
//     var $this = $(this), numberOfOptions = $(this).children('option').length;
//
//     $this.addClass('select-hidden');
//     $this.wrap('<div class="select"></div>');
//     $this.after('<div class="select-styled"></div>');
//
//     var $styledSelect = $this.next('div.select-styled');
//     $styledSelect.text($this.children('option').eq(0).text());
//
//     var $list = $('<ul />', {
//         'class': 'select-options'
//     }).insertAfter($styledSelect);
//
//     for (var i = 0; i < numberOfOptions; i++) {
//         $('<li />', {
//             text: $this.children('option').eq(i).text(),
//             rel: $this.children('option').eq(i).val()
//         }).appendTo($list);
//     }
//
//     var $listItems = $list.children('li');
//
//     $styledSelect.click(function(e) {
//         e.stopPropagation();
//         $('div.select-styled.active').not(this).each(function(){
//             $(this).removeClass('active').next('ul.select-options').hide();
//         });
//         $(this).toggleClass('active').next('ul.select-options').toggle();
//     });
//
//     $listItems.click(function(e) {
//         e.stopPropagation();
//         $styledSelect.text($(this).text()).removeClass('active');
//         $this.val($(this).attr('rel'));
//         $list.hide();
//     });
//
//     $(document).click(function() {
//         $styledSelect.removeClass('active');
//         $list.hide();
//     });
//
//     $('.select-options li').on('click', function() {
//       console.log('yo');
//       $(this).parent('ul').prev('.select-styled').addClass('test');
//       $('.select-styled').not('.test').addClass('yoinks');
//     });
// });
