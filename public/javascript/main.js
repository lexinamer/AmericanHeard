function getDistrictsFromZip() {
  removeZips();
  var input = document.getElementById('zip-code-input').value;
  var currentDistricts = zipCodeToDistricts[input];
  if (currentDistricts == undefined) {
    var stringZip = input.toString();
    if (stringZip.charAt(0) == '5') {
      if (stringZip.charAt(1) == '7') {
        currentDistricts = ['4600'];
      } else if (stringZip.charAt(1) == '8') {
        currentDistricts = ['3800'];
      } else if (stringZip.charAt(1) == '9') {
        currentDistricts = ['3000'];
      }
    } else if (stringZip.charAt(0) == '8') {
      currentDistricts = ['5600'];
    } else if (stringZip.charAt(0) == '0' && stringZip.charAt(1) == '5') {
      currentDistricts = ['5000'];
    } else if (stringZip.charAt(0) == '9' && stringZip.charAt(1) == '9') {
      currentDistricts = ['200'];
    } else if (stringZip.charAt(0) == '1' && stringZip.charAt(1) == '9') {
      currentDistricts = ['1000'];
    }
  }
  for (var i = 0; i < currentDistricts.length; i++) {
    document.getElementById(currentDistricts[i])
      .classList.add('zip-code-districts');
  }
  var filmList = [];
  for (var c = 0; c < currentDistricts.length; c++) {
    if (activeData[currentDistricts[c]]) {
      filmList.push(activeData[currentDistricts[c]]);
    }
  }
  if (filmList.length > 0) {
    for (var i = 0; i < extraData.length; i++) {
      if (extraData[i]["State Number"] == filmList[0]["State Number"]) {
        if (parseFloat(extraData[i]["District Number"]) < 1) {
          filmList.push(extraData[i]);
        } else if (math.Floor(parseFloat(extraData[i]["District Number"])) == parseInt(filmList[0]["District Number"])) {
          filmList.push(extraData[i]);
        }
      }
    }
    showFilmCards(filmList);
    $('html, body').animate({
      scrollTop: $("#videolist").offset().top - 80
    }, 1000);
  }
  var categoriesSelected = document.getElementsByClassName('category');
  for (var c = 0; c < categoriesSelected.length; c++) {
    categoriesSelected[c].classList.remove('selected');
  }
  showFilmCards(filmList);
}

function resetZips() {
  document.getElementById("zip-code-input").value = "";
  removeZips();
}


function removeZips() {
  // Remove class from other elements.
  var previousDistricts = document.getElementsByClassName('zip-code-districts');
  // Hack because the for-loop wasn't working.
  // Max number of districts in a zip code is five. Ex: 92373
  if (previousDistricts.length > 4) {
    previousDistricts[4].classList.remove('zip-code-districts');
  }
  if (previousDistricts.length > 3) {
    previousDistricts[3].classList.remove('zip-code-districts');
  }
  if (previousDistricts.length > 2) {
    previousDistricts[2].classList.remove('zip-code-districts');
  }
  if (previousDistricts.length > 1) {
    previousDistricts[1].classList.remove('zip-code-districts');
  }
  if (previousDistricts.length > 0) {
    previousDistricts[0].classList.remove('zip-code-districts');
  }
}


function showUrbanRural() {
  var urbanPercent;
  var currentDistrictElem;
  for (var i = 0; i < districtList.length; i++) {
    urbanPercent = urbanRuralDistricts[districtList[i]].UrbanPop;
    urbanPercent = parseFloat(urbanPercent.replace('%', ''));
    currentDistrictElem = document.getElementById(districtList[i]);
    if (urbanPercent < 40) {
      currentDistrictElem.classList.add('less-than-40');
    } else if (urbanPercent < 50) {
      currentDistrictElem.classList.add('less-than-50');
    } else if (urbanPercent < 60) {
      currentDistrictElem.classList.add('less-than-60');
    } else if (urbanPercent < 70) {
      currentDistrictElem.classList.add('less-than-70');
    } else if (urbanPercent < 80) {
      currentDistrictElem.classList.add('less-than-80');
    } else if (urbanPercent < 90) {
      currentDistrictElem.classList.add('less-than-90');
    } else if (urbanPercent < 101) {
      currentDistrictElem.classList.add('less-than-100');
    }
  }
}

var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1Ms2baEnQV7bElkGUTdjEdicKj0wB1JLEZYkX2Sw1u1E/pubhtml';

function init() {
  Tabletop.init({ key: publicSpreadsheetUrl,
    callback: processData,
    simpleSheet: true })
}

// Global variables accessible from any function.
var activeData = {};
var extraData = [];
var categoryList = [
  {
    "category": "Economy",
    "id": "economy",
    "active": false
  }, {
    "category": "Immigration",
    "id": "immigration",
    "active": false
  }, {
    "category": "National Security",
    "id": "national-security",
    "active": false
  }, {
    "category": "Racial/ethnic Injustice",
    "id": "racial-injustice",
    "active": false
  }, {
    "category": "LGBTQ Issues",
    "id": "lgbtq",
    "active": false
  }, {
    "category": "Women's Rights",
    "id": "womens-rights",
    "active": false
  }, {
    "category": "Gun Control",
    "id": "gun-control",
    "active": false
  }, {
    "category": "Environment",
    "id": "environment",
    "active": false
  }, {
    "category": "Corruption in Politics",
    "id": "corruption",
    "active": false
  }, {
    "category": "Views from Trump supporters",
    "id": "trump-supporters",
    "active": false
  }, {
    "category": "Views from Clinton Supporters",
    "id": "clinton-supporters",
    "active": false
  }, {
    "category": "Views from 3rd-party voters",
    "id": "third-party",
    "active": false
  }, {
    "category": "Views from Politicians",
    "id": "politicians",
    "active": false
  }, {
    "category": "Views from First-generation Americans",
    "id": "first-generation",
    "active": false
  }, {
    "category": "Views from Veterans or Active Servicemen",
    "id": "veterans",
    "active": false
  }, {
    "category": "Views from Police Officers or Public Defenders",
    "id": "police",
    "active": false
  }, {
    "category": "Views from Educators",
    "id": "educators",
    "active": false
  }, {
    "category": "Views from Youth",
    "id": "youth",
    "active": false
  }, {
    "category": "Views from Non-voters",
    "id": "non-voters",
    "active": false
  }, {
    "category": "Electoral College",
    "id": "electoral-college",
    "active": false
  }];

  var categoryMap = {
    "economy": "Economy",
    "immigration": "Immigration",
    "national-security": "National Security",
    "racial-injustice": "Racial/ethnic Injustice",
    "lgbtq": "LGBTQ Issues",
    "womens-rights": "Women's Rights",
    "gun-control": "Gun Control",
    "environment": "Environment",
    "corruption": "Corruption in Politics",
    "trump-supporters": "Views from Trump supporters",
    "clinton-supporters": "Views from Clinton Supporters",
    "third-party": "Views from 3rd-party voters",
    "politicians": "Views from Politicians",
    "first-generation": "Views from First-generation Americans",
    "veterans": "Views from Veterans or Active Servicemen",
    "police": "Views from Police Officers or Public Defenders",
    "educators": "Views from Educators",
    "youth": "Views from Youth",
    "non-voters": "Views from Non-voters",
    "electoral-college": "Electoral College"
  };


function processData(data, tabletop) {
  var districtArray = [];
  var key = '';
  for (var i = 0; i < data.length; i++) {
    // Identify approved films.
    if (data[i]["Video final?"] == 'yes') {
      displayCategories(data[i]);
      // Sort them into extra films and films for a specific district.
      districtArray = data[i]["District Number"].split(".");
      if (districtArray.length > 1) {
        // District number is a decimal.
        extraData.push(data[i]);
      } else if (parseInt(districtArray[0]) < 10) {
        // District numbers less than 10 require a leading zero.
        key = data[i]["State Number"] + '0' + districtArray[0];
        activeData[key] = data[i];
        // Add to map.
        document.getElementById(key).classList.add('current-districts');
        document.getElementById(key).addEventListener("click", mapClick);
      } else {
        key = data[i]["State Number"] + districtArray[0];
        activeData[key] = data[i];
        // Add to map.
        document.getElementById(key).classList.add('current-districts');
        document.getElementById(key).addEventListener("click", mapClick);
      }
    }
  }
}

function showFilmCards(filmList) {
  var embedPrefix = '<div class="videos"><div class="video-wrapper"><iframe src="https://www.youtube.com/embed/';
  var embedSuffix = '" frameborder="0" allowfullscreen></iframe></div><div class="video-information"><h2>';
  var filmHtml = '';
  var ytVideoId = '';
  for (var i = 0; i < filmList.length; i++) {
    ytVideoId = filmList[i]["Link to YouTube video"];
    ytVideoId = ytVideoId.substring(ytVideoId.length - 11, ytVideoId.length);
    filmHtml += embedPrefix + ytVideoId + embedSuffix;
    filmHtml += filmList[i]["Film Title"] + '</h2><h3>Filmmakers:</h3><h4>' + filmList[i]["Video creator 1 name"];
    if (filmList[i]["Video creator 2 name"] != '') {
      filmHtml += '<br> ' + filmList[i]["Video creator 2 name"];
    }
    if (filmList[i]["Video creator 3 name"] != '') {
      filmHtml += '<br> ' + filmList[i]["Video creator 3 name"];
    }
    filmHtml += '</h4><h3>Description:</h3><p>' + filmList[i]["Text Description, if applicable"] + '</p></div></div>';
  }
  if (filmHtml.length == '') {
    document.getElementById('videolist').innerHTML = errorHtml;
  } else {
    document.getElementById('videolist').innerHTML = filmHtml;
  }
}

function showError() {
  document.getElementById('videolist').innerHTML = errorHtml;
}

function displayCategories(film) {
  for (var i = 0; i < categoryList.length; i++) {
    if (categoryList[i]['active'] == false) {
      if (film[categoryList[i]['category']] == 'yes') {
        categoryList[i]['active'] = true;
        document.getElementById(categoryList[i]['id']).style.display = 'inline';
      }
    }
  }
}


var errorHtml = '<p class="error">No videos were found for your selection, but you can explore other filters!<br>In the meantime, here are some music recommendations from the America Heard engineering team.</p><div class="error videos"><div class="video-wrapper"><iframe src="https://www.youtube.com/embed/CIjXUg1s5gc" frameborder="0" allowfullscreen></iframe></div></div><div class="error videos"><div class="video-wrapper"><iframe src="https://www.youtube.com/embed/AbwPwWqA-QQ" frameborder="0" allowfullscreen></iframe></div></div><div class="error videos"><div class="video-wrapper"><iframe src="https://www.youtube.com/embed/XfzpYcwiUrA" frameborder="0" allowfullscreen></iframe></div></div><div class="error videos"><div class="video-wrapper"><iframe src="https://www.youtube.com/embed/xKdp5uI8AC0" frameborder="0" allowfullscreen></iframe></div></div>';
