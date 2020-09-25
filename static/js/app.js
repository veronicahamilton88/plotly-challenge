//Use d3 to read samples.json
d3.json("data/samples.json").then((data) => {
    function updatePlotly() {
        // Use D3 to select the dropdown menu
        var selectTag = d3.select("#select");
        // Assign the value of the dropdown menu option to a variable
        var options = selectTag.selectAll('option').data(data)
        options.enter()
        .append('option')
        .attr('value', function(d) {
          return d.name;
        })
        .text(function(d) {
          return d.text;
        });
    }
});


  
//   // Call updatePlotly() when a change takes place to the DOM
//   d3.selectAll("body").on("change", updatePlotly);
  
//   // This function is called when a dropdown menu item is selected
//   function updatePlotly() {
//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.node().value;
  
//     var CHART = d3.selectAll("#plot").node();
  
//     // Initialize x and y arrays
//     var x = [];
//     var y = [];
  
//     switch(dataset) {
//       case "dataset1":
//         x = [1, 2, 3, 4, 5];
//         y = [1, 2, 4, 8, 16];
//         break;
  
//       case "dataset2":
//         x = [10, 20, 30, 40, 50];
//         y = [1, 10, 100, 1000, 10000];
//         break;
  
//       case "dataset3":
//         x = [100, 200, 300, 400, 500];
//         y = [10, 100, 50, 10, 0];
//         break;
  
//       default:
//         x = [1, 2, 3, 4, 5];
//         y = [1, 2, 3, 4, 5];
//         break;
//     }
  
  
//     // Note the extra brackets around 'x' and 'y'
//     Plotly.restyle(CHART, "x", [x]);
//     Plotly.restyle(CHART, "y", [y]);
//   }
  
//   init();
  
// //Create a horizontal bar chart with drop-down menu to display the top 10 OTUs found in that individual.
// ///Use sample_values as the values for the bar chart.
// ///Use otu_ids as the labels for the bar chart.
// ///Use otu_labels as the hovertext for the chart.
// var trace1 = {
//     x: data.map(row => row.samples),
//     y: data.map(row => row.sample_values),
//     text: data.map(row => row.otu_ids),
//     name: "Bar",
//     type: "bar",
//     orientation: "h"
//   };


// //Create a bubble chart that displays each sample.
// ///Use otu_ids for the x values.
// ///Use sample_values for the y values.
// ///Use sample_values for the marker size.
// ///Use otu_ids for the marker colors.
// ///Use otu_labels for the text values.

// //Display the sample metadata, i.e., an individual's demographic information.

// //Display each key-value pair from the metadata JSON object somewhere on the page.

// //Update all of the plots any time that a new sample is selected.