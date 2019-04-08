const canvas = d3.select(".canva");

// Add SVG element
const svg = canvas.append("svg")
                  .attr("width",600)
                  .attr("height",600);

const margin = {top: 20, right: 20, bottom:70, left: 70}
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

const mainCanvas = svg.append("g")
                 .attr("width",graphWidth)
                 .attr("height", graphHeight)
                 .attr("transform",`translate(${margin.left},${margin.top+100})`)

function getCSVData(){
    d3.csv('daca.csv', function(d){
        return d;
    }).then(drawPieChart);
}

getCSVData();

function drawPieChart(data){
    console.log("Data",data)

    const pie = d3.pie()
                    .sort(null)
                    .value(d => d.total)
    
    const angles = pie(data);
    console.log("Angles",angles)
};