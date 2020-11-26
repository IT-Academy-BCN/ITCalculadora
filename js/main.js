var el = document.querySelector('#calc');
var resultat = document.querySelector('.resultat');
var festius2018 = ['2018-05-21', '2018-06-01', '2018-07-30', '2018-07-31', '2018-09-10', '2018-09-11', '2018-09-24', 
                    '2018-10-12', '2018-11-01', '2018-11-02', '2018-12-06', '2018-12-07', '2018-12-24', '2018-12-25', 
                    '2018-12-26', '2018-12-27', '2018-12-28', '2018-12-31'];
var festius2019 = ['2019-01-01', '2019-01-02', '2019-01-03', '2019-01-04', '2019-04-18', '2019-04-19', '2019-04-22', 
                    '2019-05-01', '2019-05-02', '2019-05-03', '2019-06-10','2019-06-24','2019-09-09', '2019-09-10', 
                    '2019-09-11','2019-09-23','2019-09-24', '2019-10-31', '2019-11-01', '2019-12-05', '2019-12-06', 
                    '2019-12-23', '2019-12-24', '2019-12-25', '2019-12-26', '2019-12-27', '2019-12-30', '2019-12-31'];
var festius2020 = ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-06', '2020-04-10', '2020-04-13','2020-05-01',
                    '2020-06-24','2020-09-11','2020-09-25','2020-10-12','2020-11-01',
                    '2020-12-01','2020-12-02','2020-12-03','2020-12-04','2020-12-07','2020-12-08','2020-12-09','2020-12-10','2020-12-11','2020-12-14','2020-12-15','2020-12-16','2020-12-17','2020-12-18','2020-12-21','2020-12-22','2020-12-23','2020-12-24','2020-12-25','2020-12-28','2020-12-29','2020-12-30','2020-12-31'];




var festius2021 = ['2021-01-01','2021-01-04','2021-01-05','2021-01-06','2021-01-07','2021-01-08',
                    '2021-04-02','2021-04-05','2021-04-06','2021-04-07','2021-04-08','2021-04-09',
                    '2021-05-24',
                    '2021-06-24','2021-06-25',
                    '2021-09-01','2021-09-02','2021-09-03','2021-09-24',
                    '2021-10-11','2021-10-12',
                    '2021-11-01',
                    '2021-12-06','2021-12-07','2021-12-08','2021-12-09','2021-12-10','2021-12-20','2021-12-21','2021-12-22','2021-12-23','2021-12-24','2021-12-27','2021-12-28','2021-12-29','2021-12-30','2021-12-31'];

var festius2022 = ['2022-01-03','2022-01-04','2022-01-05','2022-01-06'];

var festius_totals = festius2018.concat(festius2019, festius2020,festius2021,festius2022);

(function ompleAgosts() 
{
    for (var inici2018 = 20180801; inici2018 <= 20180831; inici2018++) 
    {
        var data2018 = inici2018.toString();
        var dataguions_primer2018 = data2018.slice(0, 4) + "-" + data2018.slice(4);
        var dataguions_segon2018 = dataguions_primer2018.slice(0, 7) + "-" + dataguions_primer2018.slice(7);
        festius_totals.push(dataguions_segon2018);
    }
    for (var inici2019 = 20190803; inici2019 <= 20190831; inici2019++) 
    {
        var data2019 = inici2019.toString();
        var dataguions_primer2019 = data2019.slice(0, 4) + "-" + data2019.slice(4);
        var dataguions_segon2019 = dataguions_primer2019.slice(0, 7) + "-" + dataguions_primer2019.slice(7);
        festius_totals.push(dataguions_segon2019);
    }
    for (var inici2020 = 20200803; inici2020 <= 20200831; inici2020++) 
    {
        var inici2020 = inici2020.toString();
        var dataguions_primer2020 = inici2020.slice(0, 4) + "-" + inici2020.slice(4);
        var dataguions_segon2020 = dataguions_primer2020.slice(0, 7) + "-" + dataguions_primer2020.slice(7);
        festius_totals.push(dataguions_segon2020);
    }       
    for (var inici2021 = 20210802; inici2021 <= 20210831; inici2021++) 
    {
        var inici2021 = inici2021.toString();
        var dataguions_primer2021 = inici2021.slice(0, 4) + "-" + inici2021.slice(4);
        var dataguions_segon2021 = dataguions_primer2021.slice(0, 7) + "-" + dataguions_primer2021.slice(7);
        festius_totals.push(dataguions_segon2021);
    }
})();

if (el) 
{
    el.addEventListener("click", function() 
    {
        var dia_inici = document.querySelector('#dia_inici').value;
        var comprova = moment(dia_inici, 'DD/MM/YYYY', true).isValid();
        if (comprova == true) {

            var locales = moment.locales(); // ['en', 'ru', 'pl']
            // console.log(locales);

            var dia_inici_oficial = moment(dia_inici, 'DD/MM/YYYY');
            var dia_final = moment(dia_inici, 'DD/MM/YYYY').addWorkdays(87, festius_totals).locale('ca').format('LL');
            var dia_final_format = moment(dia_inici, 'DD/MM/YYYY').addWorkdays(87, festius_totals);
            var dia_actual = moment().startOf('day');
            var dia_stop = moment(dia_final_format, 'DD/MM/YYYY');
            var dies_queden = moment().weekdayCalc(dia_actual, dia_stop, [1, 2, 3, 4, 5], festius_totals);

            // console.log("dies_queden = " + dies_queden);


            if (dia_actual > dia_stop) 
            {
                setBarTo100();
                resultat.innerHTML = 'Ep, tu ja has acabat el curs ! enhorabona!!! ;-)';
            } else if (dia_actual < dia_inici_oficial) {
                resetBar();
                resultat.innerHTML = 'Encara no has començat,<br>però finalitzaràs el curs<br> el ' + dia_final;
            } else {
                resetBar();
                resultat.innerHTML = 'Acabes el curs el dia ' + dia_final + '<br>Et queden ' + (dies_queden - 1) + ' dies lectius (sense contar avui)';
                progressBarAnimation(dies_queden); // load the progress bar animation
            }
        } else {
            resetBar();
            resultat.innerHTML = 'Format de data incorrecte';

        }
    });
}
