var el = document.querySelector("#calc");
var resultat = document.querySelector(".resultat");
var countHolDaysBetweenPeriod=0;
var festius2018 = [
  "2018-05-21",
  "2018-06-01",
  "2018-07-30",
  "2018-07-31",
  "2018-09-10",
  "2018-09-11",
  "2018-09-24",
  "2018-10-12",
  "2018-11-01",
  "2018-11-02",
  "2018-12-06",
  "2018-12-07",
  "2018-12-24",
  "2018-12-25",
  "2018-12-26",
  "2018-12-27",
  "2018-12-28",
  "2018-12-31"
];
var festius2019 = [
  "2019-01-01",
  "2019-01-02",
  "2019-01-03",
  "2019-01-04",
  "2019-04-18",
  "2019-04-19",
  "2019-04-22",
  "2019-05-01",
  "2019-05-02",
  "2019-05-03",
  "2019-06-10",
  "2019-06-24",
  "2019-09-09",
  "2019-09-10",
  "2019-09-11",
  "2019-09-23",
  "2019-09-24",
  "2019-10-31",
  "2019-11-01",
  "2019-12-05",
  "2019-12-06",
  "2019-12-23",
  "2019-12-24",
  "2019-12-25",
  "2019-12-26",
  "2019-12-27",
  "2019-12-30",
  "2019-12-31"
];
var festius2020 = [
  "2020-01-01",
  "2020-01-02",
  "2020-01-03",
  "2020-01-06",
  "2020-04-10",
  "2020-04-13"
];
var festius_totals = festius2018.concat(festius2019, festius2020);
//console.log(festius_totals);

(function ompleAgosts() {
  for (var inici2018 = 20180801; inici2018 <= 20180831; inici2018++) {
    var data2018 = inici2018.toString();
    var dataguions_primer2018 = data2018.slice(0, 4) + "-" + data2018.slice(4);
    var dataguions_segon2018 =
      dataguions_primer2018.slice(0, 7) + "-" + dataguions_primer2018.slice(7);
    festius_totals.push(dataguions_segon2018);
  }
  for (var inici2019 = 20190803; inici2019 <= 20190831; inici2019++) {
    var data2019 = inici2019.toString();
    var dataguions_primer2019 = data2019.slice(0, 4) + "-" + data2019.slice(4);
    var dataguions_segon2019 =
      dataguions_primer2019.slice(0, 7) + "-" + dataguions_primer2019.slice(7);
    festius_totals.push(dataguions_segon2019);
  }
})();
// el is the id=calc which is the button to trigger the calculations
if (el) {
  el.addEventListener("click", function() {
    resultat.innerHTML = "";
    var dia_inici = document.querySelector("#dia_inici").value;
    var altre_dia_final = document.querySelector("#altre_dia_final").value;
    //convert date format to US
    dia_inici= moment(dia_inici, "DD-MM-YYYY").format('YYYY-MM-DD');
    altre_dia_final = moment(altre_dia_final, "DD-MM-YYYY").format('YYYY-MM-DD');

    //todo
    var start = moment(dia_inici, 'YYYY-MM-DD', true).isValid();
    var end = moment(altre_dia_final, 'YYYY-MM-DD', true).isValid();

    if (start == true && end == true) {
      var locales = moment.locales(); // ['en', 'ru', 'pl']
      // console.log("locales= " + locales);

      festius_totals.forEach(checkDay);
   

      function checkDay(item, index){
       
        var holIsIn = moment(item).isBetween(dia_inici, altre_dia_final  );
        console.log("Is between... = "+ holIsIn);       
        holIsIn ? countHolDaysBetweenPeriod++ : false ; 
      
      }
      console.log("count hol="+ countHolDaysBetweenPeriod);
      var diff = moment(altre_dia_final).businessDiff(
        moment(dia_inici)
      );
        var studyWorkingDays = diff - countHolDaysBetweenPeriod + 1;
      
        resultat.innerHTML = studyWorkingDays;
      // console.log("dies_queden = " + dies_queden);
    } else {
      resultat.innerHTML = "Format de la data incorrecte";
    }
  });
}
