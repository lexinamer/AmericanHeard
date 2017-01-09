queue()
    .defer(d3.json, "./data/zips_by_state/01.json")
    .defer(d3.json, "./data/zips_by_state/04.json")
    .defer(d3.json, "./data/zips_by_state/05.json")
    .defer(d3.json, "./data/zips_by_state/06.json")
    .defer(d3.json, "./data/zips_by_state/08.json")
    .defer(d3.json, "./data/zips_by_state/09.json")
    .defer(d3.json, "./data/zips_by_state/12.json")
    .defer(d3.json, "./data/zips_by_state/13.json")
    .defer(d3.json, "./data/zips_by_state/15.json")
    .defer(d3.json, "./data/zips_by_state/16.json")
    .defer(d3.json, "./data/zips_by_state/17.json")
    .defer(d3.json, "./data/zips_by_state/18.json")
    .defer(d3.json, "./data/zips_by_state/19.json")
    .defer(d3.json, "./data/zips_by_state/20.json")
    .defer(d3.json, "./data/zips_by_state/21.json")
    .defer(d3.json, "./data/zips_by_state/22.json")
    .defer(d3.json, "./data/zips_by_state/23.json")
    .defer(d3.json, "./data/zips_by_state/24.json")
    .defer(d3.json, "./data/zips_by_state/25.json")
    .defer(d3.json, "./data/zips_by_state/26.json")
    .defer(d3.json, "./data/zips_by_state/27.json")
    .defer(d3.json, "./data/zips_by_state/28.json")
    .defer(d3.json, "./data/zips_by_state/29.json")
    .defer(d3.json, "./data/zips_by_state/31.json")
    .defer(d3.json, "./data/zips_by_state/32.json")
    .defer(d3.json, "./data/zips_by_state/33.json")
    .defer(d3.json, "./data/zips_by_state/34.json")
    .defer(d3.json, "./data/zips_by_state/35.json")
    .defer(d3.json, "./data/zips_by_state/36.json")
    .defer(d3.json, "./data/zips_by_state/37.json")
    .defer(d3.json, "./data/zips_by_state/39.json")
    .defer(d3.json, "./data/zips_by_state/40.json")
    .defer(d3.json, "./data/zips_by_state/41.json")
    .defer(d3.json, "./data/zips_by_state/42.json")
    .defer(d3.json, "./data/zips_by_state/44.json")
    .defer(d3.json, "./data/zips_by_state/45.json")
    .defer(d3.json, "./data/zips_by_state/47.json")
    .defer(d3.json, "./data/zips_by_state/48.json")
    .defer(d3.json, "./data/zips_by_state/49.json")
    .defer(d3.json, "./data/zips_by_state/51.json")
    .defer(d3.json, "./data/zips_by_state/53.json")
    .defer(d3.json, "./data/zips_by_state/54.json")
    .defer(d3.json, "./data/zips_by_state/55.json")
    .await(ready);

function ready(error, s01, s04, s05, s06, s08, s09, s12, s13, s15, s16, s17,
  s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s31, s32, s33,
  s34, s35, s36, s37, s39, s40, s41, s42, s44, s45, s47, s48, s49, s51, s53,
  s54, s55) {
  if (error) throw error;
  var zipCodeDistrictDict = {};
  var district, stateNum, zipCode;
  // repeat for every state.
  for (var arg = 1; arg < arguments.length; arg++) {
    for (var i = 0; i < arguments[arg].length; i++) {
      stateNum = arguments[arg][i].State;
      district = arguments[arg][i].CongressionalDistrict;
      zipCode = arguments[arg][i].ZCTA;
      if (district < 10) {
        district = '0' + district;
      } else {
        district = district.toString();
      }
      if (zipCodeDistrictDict[zipCode] == undefined) {
        zipCodeDistrictDict[zipCode] = [stateNum + district];
      } else {
        zipCodeDistrictDict[zipCode].push(stateNum + district);
      }
    }
  }
  document.body.innerHTML = JSON.stringify(zipCodeDistrictDict);
}
