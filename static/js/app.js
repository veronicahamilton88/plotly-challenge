function getPlots(id) {
  //Read samples.json
      d3.json("/../data/samples.json").then (incomingData =>{
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
                title: "OTU ID",
            },
            xaxis:{
                title: "Values",
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100,
            },

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
  d3.json("/../data/samples.json").then((incomingData) => {
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

  function filteredData(incomingData, inputValue) {
    return incomingData.metadata.id = 940;
}


function optionChanged(inputValue){

  var metaDataTable = d3.select("#sample-metadata")
  document.getElementById("sample-metadata").innerHTML = "";
  d3.json("/../data/samples.json").then((incomingData) => {
    // var dataFilter = filteredData(incomingData,inputValue)
    var metadataFilter = incomingData.metadata
    var dataFilter = metadataFilter.filter(metadata => metadata.id == inputValue);
    dataFilter.forEach((samples) => {
    metaDataTable.append("p")
    .text(`id: ${samples.id}`)
    metaDataTable.append("p") 
    .text(`ethnicity: ${samples.ethnicity}`)
    metaDataTable.append("p") 
    .text(`gender: ${samples.gender}`)
    metaDataTable.append("p") 
    .text(`age: ${samples.age}`)
    metaDataTable.append("p") 
    .text(`location: ${samples.location}`)
    metaDataTable.append("p") 
    .text(`bbtype: ${samples.bbtype}`)
    metaDataTable.append("p") 
    .text(`wfreq: ${samples.wfreq}`)
    }
    )
  });
}
