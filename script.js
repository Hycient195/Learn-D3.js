window.addEventListener("DOMContentLoaded", ()=>{
  d3.select("p").style("color", "red").style( "background-color", "green")

  d3.select("h1.title > strong").style("background-color", "teal").style("color", "tomato")
  d3.select("h2#subtitle").style("background-color", "sienna")
  d3.selectAll("input:not(#name)").style("outline", "1px solid red");




})


// text
// append, remove, insert, html, attr, property, style
// classed


// Nested Selection