var width = 960,
    height = 600;

var projection = d3.geo.albersUsa()
    .scale(1280)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

queue()
    .defer(d3.json, "./data/us.json")
    .defer(d3.json, "./data/us-congress-113.json")
    .await(ready);

function ready(error, us, congress) {
  if (error) throw error;

  svg.append("defs").append("path")
      .attr("id", "land")
      .datum(topojson.feature(us, us.objects.land))
      .attr("d", path);

  svg.append("clipPath")
      .attr("id", "clip-land")
    .append("use")
      .attr("xlink:href", "#land");

  svg.append("g")
      .attr("class", "districts")
      .attr("clip-path", "url(#clip-land)")
    .selectAll("path")
      .data(topojson.feature(congress, congress.objects.districts).features)
    .enter().append("path")
      .attr("d", path)
      .attr("id", (function(d) { return d.id; }))
    .append("title")
      .text(function(d) {
        var id = d.id;
        var stateNum = parseInt(Math.floor(id / 100));
        var stateString = stateNumbers[stateNum];
        if (id % 100 == 0) {
          return stateString;
        } else {
          return stateString + ' - District ' + (id % 100);
        }
       });

  svg.append("path")
      .attr("class", "district-boundaries")
      .datum(topojson.mesh(congress, congress.objects.districts, function(a, b) { return a !== b && (a.id / 1000 | 0) === (b.id / 1000 | 0); }))
      .attr("d", path);

  svg.append("path")
      .attr("class", "state-boundaries")
      .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
      .attr("d", path);
}

d3.select(self.frameElement).style("height", height + "px");
