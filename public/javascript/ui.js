// Arrow on landing page
$(".arrow").click(function(){
  $('html, body').animate({
    scrollTop: $("#mainbody").offset().top
  }, 1000);
  return false;
});

// Fixed nav bar on mainbody
var $navBar = $('nav');
var navPos = $navBar.offset().top - 100;

$(window).scroll(function() {
   var scrollPos = $(this).scrollTop();

  if (scrollPos >= navPos) {
       $navBar.addClass('fixed');
   } else {
       $navBar.removeClass('fixed');
   }
});

function mapClick() {
  var id = this.id;
  var stateNum = parseInt(Math.floor(id / 100));
  var districtNum = id % 100;
  var filmList = [activeData[id]];
  for (var i = 0; i < extraData.length; i++) {
    if (parseInt(extraData[i]["State Number"]) == stateNum) {
      if (parseFloat(extraData[i]["District Number"]) < 1) {
        filmList.push(extraData[i]);
      } else if (math.Floor(parseFloat(extraData[i]["District Number"])) == districtNum) {
        filmList.push(extraData[i]);
      }
    }
  }
  showFilmCards(filmList);
  $('html, body').animate({
    scrollTop: $("#videolist").offset().top - 80
  }, 1000);
  var categoriesSelected = document.getElementsByClassName('category');
  for (var c = 0; c < categoriesSelected.length; c++) {
    categoriesSelected[c].classList.remove('selected');
  }
}

function toggleCategory(e) {
  if (e.classList.contains('selected')) {
    e.classList.remove('selected');
  } else {
    e.classList.add('selected');
  }
}

function activateFilter() {
  var categoryElements = document.getElementsByClassName('selected');
  var key = '';
  var filmList = [];
  for (district in activeData) {
    for (var i = 0; i < categoryElements.length; i++) {
      key = categoryMap[categoryElements[i].id];
      if (activeData[district][key] == 'yes') {
        filmList.push(activeData[district]);
        break;
      }
    }
  }
  for (var j = 0; j < extraData.length; j++) {
    for (var i = 0; i < categoryElements.length; i++) {
      key = categoryMap[categoryElements[i].id];
      if (extraData[j][key] == 'yes') {
        filmList.push(extraData[j]);
        break;
      }
    }
  }
  showFilmCards(filmList);
}

// Filter Bar Styling
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
