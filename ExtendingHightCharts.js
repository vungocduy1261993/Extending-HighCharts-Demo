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

}(Highcharts)); 