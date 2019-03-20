const canvas = d3.select(".canva")

// Creating data element
// var dataArray = [4,15,34,45,20,4];

var dataArray = [
    {width: 25,height: 4, fill : 'pink'},
    {width: 25,height: 14, fill : 'purple'},
    {width: 25,height: 44, fill : 'orange'},
    {width: 25,height: 124, fill : 'green'},
    {width: 25,height: 12, fill : 'grey'},
    {width: 25,height: 36, fill : 'red'}
]

// Adding SVG element
const svg = canvas.append("svg")
            .attr('width',600 )
            .attr('height',600 );

const rect = svg.selectAll('rect');
rect.data(dataArray)
    .enter().append("rect")
    .attr('width',24)
    .attr('height',function(d){return d.height*2;})
    .attr('fill', d => d.fill)
    .attr('y',function(d){return 100 - d.height*2;})
    .attr('x',function(d,i){return i*27;});