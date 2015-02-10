var days_chart = dc.pieChart("#days");
var hot_chart = dc.pieChart("#hot");

var cf = crossfilter(data);

days_dim = cf.dimension(function(d){ return d.DaysOfWeek; });
hot_dim = cf.dimension(function(d){ return d.HotOrCold; });

var days_group = days_dim.group();
var hot_group = hot_dim.group();

days_chart.width(260).height(220)
        .dimension(days_dim)
        .group(days_group);

hot_chart.width(260).height(220)
        .dimension(hot_dim)
        .group(hot_group);

dc.renderAll();