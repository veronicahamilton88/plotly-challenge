function getPlots(id) {
  //Read samples.json
      d3.json("../data/samples.json").then (incomingData =>{
          console.log(incomingData)
          var ids = incomingData.samples[0].otu_ids;
          console.log(ids)
          var sampleValues =  incomingData.samples[0].sample_values.slice(0,10).reverse();
          console.log(sampleValues)
          var labels =  incomingData.samples[0].otu_labels.slice(0,10);
          console.log (labels)
      // get only top 10 otu ids for the plot OTU and reversing it. 
          var OTU_top = ( incomingData.samples[0].otu_ids.slice(0, 10)).reverse();
      // get the otu id's to the desired form for the plot
          var OTU_id = OTU_top.map(d => "OTU " + d);
          console.log(`OTU IDS: ${OTU_id}`)
       // get the top 10 labels for the plot
          var labels =  incomingData.samples[0].otu_labels.slice(0,10);
          console.log(`OTU_labels: ${labels}`)
          var trace = {
            x: sampleValues,
            y: OTU_id,
            text: labels,
            marker: {
            color: 'blue'},
            type:"bar",
            orientation: "h",
        };
        // create data variable
        var data = [trace];

        // create layout variable to set plots layout
        var layout = {
            title: "Top 10 OTU",
            yaxis:{
                tickmode:"linear",
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
        };

        // create the bar plot
    Plotly.newPlot("bar", data, layout);

    var trace1 = {
      x: incomingData.samples[0].otu_ids,
      y: incomingData.samples[0].sample_values,
      mode: "markers",
      marker: {
          size: incomingData.samples[0].sample_values,
          color: incomingData.samples[0].otu_ids
      },
      text:  incomingData.samples[0].otu_labels

  };

  // set the layout for the bubble plot
  var layout_2 = {
      xaxis:{title: "OTU ID"},
      height: 400,
      width: 850,
  };

  // creating data variable 
  var data1 = [trace1];

// create the bubble plot
Plotly.newPlot("bubble", data1, layout_2); 
    
    });
}  

getPlots()
          

// Use D3 to select the dropdown menu
function dropDown(){
  var selectOption = d3.select("#selDataset")

//Use d3 to read samples.json
  d3.json("../data/samples.json").then((incomingData) => {
    console.log(incomingData);
    var sampleNames = incomingData.names;
    sampleNames.forEach((sample) => {
      selectOption.append("option")
        .text(sample)
        .property("value", sample);
      });
    var firstSample = sampleNames[0];
    // metaData(firstSample);
    // createCharts(firstSample);
});
}

dropDown()

// function metaData(){
// var metaPanel = d3.select("#sample-metadata");
// metaPanel.html("");
// d3.json("../data/samples.json").then((incomingData) => {
//   console.log(incomingData)
//   Object.entries(incomingData).forEach(([key, value]) => {
//     metaPanel.append("h6").text(`${key}: ${value}`)})
// })};


// //Create a horizontal bar chart with drop-down menu to display the top 10 OTUs found in that individual.
// ///Use sample_values as the values for the bar chart.
// ///Use otu_ids as the labels for the bar chart.
// ///Use otu_labels as the hovertext for the chart.
// var trace1 = {
//     x: data.map(row => row.samples),
//     y: data.map(row => row.sample_values),
//     text: jasonjasonjsonjjsondata.map(row => row.otu_ids),
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