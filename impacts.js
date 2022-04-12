// The data sets in a list
xValues = [1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];
warmingAmount = [-0.19, 0.07, -0.08, 0.03, -0.01, 0.20, 0.33, 0.50, 0.65, 0.94]; //https://data.giss.nasa.gov/gistemp/graphs/graph_data/Global_Mean_Estimates_based_on_Land_and_Ocean_Data/graph.txt
co2Levels = [0.14,0.18,0.23,0.31,0.42,0.6,0.81,1.05,1.34,1.7]; //https://ourworldindata.org/co2/country/canada?country=~OWID_WRL

// Generate the chart using chart.js
new Chart("Warming_vs_co2",
{
    type: "line",
    data:
    {
        labels: xValues,
        datasets:
        // Warming Amount line (axis A)
        [{
            label: "Warming Amount (C)",
            yAxisID: 'A',
            fill: false,
            lineTension: 0.4,
            backgroundColor: "rgb(0,0,255)",
            borderColor: "rgba(0,0,255,0.3)",
            data: warmingAmount
        },
        // Carbon Dioxide line (axis B)
        {
            label: "Carbon Dioxide Levels (trillions of tons)",
            yAxisID: 'B',
            fill: false,
            lineTension: 0.4,
            backgroundColor: "rgb(255,0,0)",
            borderColor: "rgb(255,0,0)",
            data: co2Levels
        }]
    },
    options:
    {
        legend: 
        // Show the legend on the right-hand side
        {
            display: true,
            position: "right"
        },
        scales:
        {
            yAxes: 
            // Axis A config
            [{
                scaleLabel: {display: true, labelString: "Warming Amount (C)"},
                id: 'A',
                type: "linear",
                position: "left"
            },
            // Axis B config
            {
                scaleLabel: {display: true, labelString: "Carbon Dioxide Levels (Trillions of tons)"},
                id: 'B',
                type: "linear",
                position: "right",
                ticks:
                {
                max: 1.8,
                min: 0
                }
            }],
            // x-axis
            xAxes: 
            [{
                scaleLabel: {display: true, labelString: 'Year'}
            }]
        },
        title: 
        {
            display: true,
            text: "Global Temperatures vs CO2 Levels",
            fontSize: "24"
        }
    }
});

