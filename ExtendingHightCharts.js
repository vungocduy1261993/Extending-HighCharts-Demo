 (function (H) {
    H.wrap(H.Series.prototype, 'drawGraph', function (proceed) {
    
      proceed.apply(this, Array.prototype.slice.call(arguments, 1));  
      var points = this.chart.series[0].points;
      var seriesData = [];
      for (var i = 0; i < points.length; i++) {
      var point = points[i];
      	if(point.date) {
      	          seriesData.push({
      	           x: point.x,
      	            title: 'I',
      	            text: 'Information'
      	          });
      	        } 
      }
      
      this.chart.series[1].setData(seriesData, false);
    });

    H.wrap(H.Tooltip.prototype, 'formatter', function() {
      if(this.point.date) {
            // Mimic default tooltip contents
            return '● '+this.series.name+
                   '<br/>x: <b>'+this.point.x+
                   '</b><br/>y: <b>'+this.point.y+
                   '</b><br/>';
        }

        // If tooltip is disabled
        return false;
    });

}(Highcharts)); 