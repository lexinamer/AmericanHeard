function getDistrictsFromZip() {
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
    callback: showInfo,
    simpleSheet: true })
}

// Global variable accessible from any function.
var activeData = [];
var extraData = [];

function showInfo(data, tabletop) {
  for (var i = 0; i < data.length; i++) {
    if (data[i]["Video final?"] == 'yes') {
      activeData.push(data[i]);
    }
  }
  displayData();
}

function displayData() {
  console.log(activeData);
  var id = '';
  var districtNumber = 0;
  for (var i = 1; i < activeData.length; i++) {
    districtNumber = parseFloat(activeData[i]["District Number"]);
    if ((0 < districtNumber) && (districtNumber < 1)) {
      extraData.push(activeData[i]);
    }
    else if (districtNumber < 10) {
      id = activeData[i]["State Number"] + '0' + districtNumber;
    } else {
      id = activeData[i]["State Number"] + districtNumber;
    }
    document.getElementById(id).classList.add('current-districts');
  }
  console.log("extra data");
  console.log(extraData);
}

function showFilmCards(ids) {
  console.log(ids);
}
