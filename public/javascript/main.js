function getDistrictsFromZip() {
  // Remove class from other elements.
  var previousDistricts = document.getElementsByClassName('current-districts');
  // Hack because the for-loop wasn't working.
  // Max number of districts in a zip code is five. Ex: 92373
  if (previousDistricts.length > 4) {
    previousDistricts[4].classList.remove('current-districts');
  }
  if (previousDistricts.length > 3) {
    previousDistricts[3].classList.remove('current-districts');
  }
  if (previousDistricts.length > 2) {
    previousDistricts[2].classList.remove('current-districts');
  }
  if (previousDistricts.length > 1) {
    previousDistricts[1].classList.remove('current-districts');
  }
  if (previousDistricts.length > 0) {
    previousDistricts[0].classList.remove('current-districts');
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
      .classList.add('current-districts');
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
