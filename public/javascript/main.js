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
  for (var i = 0; i < currentDistricts.length; i++) {
    document.getElementById(currentDistricts[i])
      .classList.add('current-districts');
  }
}
