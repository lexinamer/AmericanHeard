queue()
    .defer(d3.json, "./data/urban_rural_districts/01.json")
    .defer(d3.json, "./data/urban_rural_districts/04.json")
    .defer(d3.json, "./data/urban_rural_districts/05.json")
    .defer(d3.json, "./data/urban_rural_districts/06.json")
    .defer(d3.json, "./data/urban_rural_districts/08.json")
    .defer(d3.json, "./data/urban_rural_districts/09.json")
    .defer(d3.json, "./data/urban_rural_districts/12.json")
    .defer(d3.json, "./data/urban_rural_districts/13.json")
    .defer(d3.json, "./data/urban_rural_districts/15.json")
    .defer(d3.json, "./data/urban_rural_districts/16.json")
    .defer(d3.json, "./data/urban_rural_districts/17.json")
    .defer(d3.json, "./data/urban_rural_districts/18.json")
    .defer(d3.json, "./data/urban_rural_districts/19.json")
    .defer(d3.json, "./data/urban_rural_districts/20.json")
    .defer(d3.json, "./data/urban_rural_districts/21.json")
    .defer(d3.json, "./data/urban_rural_districts/22.json")
    .defer(d3.json, "./data/urban_rural_districts/23.json")
    .defer(d3.json, "./data/urban_rural_districts/24.json")
    .defer(d3.json, "./data/urban_rural_districts/25.json")
    .defer(d3.json, "./data/urban_rural_districts/26.json")
    .defer(d3.json, "./data/urban_rural_districts/27.json")
    .defer(d3.json, "./data/urban_rural_districts/28.json")
    .defer(d3.json, "./data/urban_rural_districts/29.json")
    .defer(d3.json, "./data/urban_rural_districts/31.json")
    .defer(d3.json, "./data/urban_rural_districts/32.json")
    .defer(d3.json, "./data/urban_rural_districts/33.json")
    .defer(d3.json, "./data/urban_rural_districts/34.json")
    .defer(d3.json, "./data/urban_rural_districts/35.json")
    .defer(d3.json, "./data/urban_rural_districts/36.json")
    .defer(d3.json, "./data/urban_rural_districts/37.json")
    .defer(d3.json, "./data/urban_rural_districts/39.json")
    .defer(d3.json, "./data/urban_rural_districts/40.json")
    .defer(d3.json, "./data/urban_rural_districts/41.json")
    .defer(d3.json, "./data/urban_rural_districts/42.json")
    .defer(d3.json, "./data/urban_rural_districts/44.json")
    .defer(d3.json, "./data/urban_rural_districts/45.json")
    .defer(d3.json, "./data/urban_rural_districts/47.json")
    .defer(d3.json, "./data/urban_rural_districts/48.json")
    .defer(d3.json, "./data/urban_rural_districts/49.json")
    .defer(d3.json, "./data/urban_rural_districts/51.json")
    .defer(d3.json, "./data/urban_rural_districts/53.json")
    .defer(d3.json, "./data/urban_rural_districts/54.json")
    .defer(d3.json, "./data/urban_rural_districts/55.json")
    .await(ready);

function ready(error, s01, s04, s05, s06, s08, s09, s12, s13, s15, s16, s17,
  s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s31, s32, s33,
  s34, s35, s36, s37, s39, s40, s41, s42, s44, s45, s47, s48, s49, s51, s53,
  s54, s55) {
  if (error) throw error;
  var urbanRuralDistrictDict = {};
  var district, key, stateNum;
  var tempObject = {};
  // repeat for every state.
  for (var arg = 1; arg < arguments.length; arg++) {
    for (var i = 0; i < arguments[arg].length; i++) {
      stateNum = arguments[arg][i].State;
      district = arguments[arg][i].CongressionalDistrict;
      if (district < 10) {
        district = '0' + district;
      } else {
        district = district.toString();
      }
      key = stateNum + district;
      tempObject = {
        "TotalPop": arguments[arg][i].TotalPop,
        "UrbanPop": arguments[arg][i].UrbanPopPCT,
        "RuralPop": arguments[arg][i].RuralPopPCT,
        "AreaLand": arguments[arg][i].Arealand,
        "UrbanLand": arguments[arg][i].UrbanLandPCT,
        "RuralLand": arguments[arg][i].RuralLandPCT
      }
      urbanRuralDistrictDict[key] = tempObject;
    }
  }

  console.log(urbanRuralDistrictDict);
  document.body.innerHTML = JSON.stringify(urbanRuralDistrictDict) + '<br><br><br><br><br><br><br><br><br>' + JSON.stringify(Object.keys(urbanRuralDistrictDict));
}
