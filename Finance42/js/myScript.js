document.getElementById('myForm').addEventListener('submit', addResultsToSite);

//Computer
function addResultsToSite(e) {

  var nPeriods = parseInt(document.getElementById('nPeriods').value);
  var interestRate = parseInt(document.getElementById('interestRate').value) / 100;
  var presentValue = parseInt(document.getElementById('presentValue').value);
  var annuity = parseInt(document.getElementById('annuity').value);
  var futureValue = parseInt(document.getElementById('futureValue').value);
  var results = document.getElementById('results');

  function futureValueFunction(n, i, pv) {
    var result = pv * (1 + i) ** nPeriods;
    return Math.round(result, -2);
  }

  results.innerHTML += "<section>" +
    "<div class=" + "jumbotron newResult" + ">" +
    "<h3>Future Value: " + futureValueFunction(nPeriods, interestRate, presentValue) + "</h3>" +
    "</div>" +
    "</section>";
  e.preventDefault();
}


//Animations
window.sr = ScrollReveal();
sr.reveal('.jumbotron', {
  duration: 1500,
  distance: '200px'
});
