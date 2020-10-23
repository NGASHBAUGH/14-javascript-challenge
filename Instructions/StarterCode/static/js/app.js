// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

// present the table when the web page is loaded 
table(tableData)


// Runs table creation or filter when called 
function table(Tdata) {
    // Clears the HTML Table
    tbody.html("")
    // Go through each row of data and create a table with that data in HTML
    Tdata.forEach(function (line) {
        var row = {}
        row = tbody.append('tr');
        Object.entries(line).map(function([x , y]) {
            row.append('td').text(y).style('border' , 'solid thin black')
        })
    }) 
};

// create the default selection for the filter 
var type = "date"

// Runs Date filter
function runbuttonD () {
    // Prevent the page from refreshing 
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue)
    var newData = {}
    // If statements that choose the type of filteing wanted
    if(type.node().value === "date") {
        newData = tableData.filter(function(frow){
                return frow.datetime == inputValue
    })};
    if(type.node().value === "city") {
        newData = tableData.filter(function(frow){
                return frow.city == inputValue
    })};
    if(type.node().value === "state") {
        newData = tableData.filter(function(frow){
                return frow.state == inputValue
    })};
    if(type.node().value === "country") {
        newData = tableData.filter(function(frow){
                return frow.country == inputValue
    })};
    if(type.node().value === "shape") {
        newData = tableData.filter(function(frow){
                return frow.shape == inputValue
    })};
    // Return the filtered data and run it through the HTML table creater 
    return table(newData)
};

// Change the filter type 
function change () {
    var type = d3.select('#filterSelect').property('value');
    console.log(type)
    return type
};

// when the dropdown is changed this trigers the function 
type = d3.selectAll('#filterSelect').on('change' , change )

// grabs location to acticate date filter.
var buttonD = d3.select('#filter-btn-Date')

// Activates date filter
buttonD.on("click", runbuttonD);
