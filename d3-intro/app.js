const canvas = d3.select(".canva")

// Adding SVG element
const svg = canvas.append("svg")
            .attr('width',600 )
            .attr('height',600 );

const rect = svg.selectAll('rect');

d3.json('text.json')
  .then(data =>{console.log(data);
    rect.data(data)
    .enter().append("rect")
    .attr('width',24)
    .attr('height',function(d){return d.height*2;})
    .attr('fill', d => d.fill)
    .attr('y',function(d){return 100 - d.height*2;})
    .attr('x',function(d,i){return i*27;});
})

