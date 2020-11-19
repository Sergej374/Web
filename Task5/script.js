function TitleMouseMove(){
    var Title = document.getElementById("Title");
    if(Title.style.color == "blue")
        Title.style.color = "red";
    else
        Title.style.color = "blue";
}

function ShowDate(){
    var dateFirst = new Date(2020, 8, 1);
    var lastDay = new Date(2021, 6, 1);
    var dateToday = new Date();
    var output = "Сегодня " + dateToday.toLocaleString('ru', {year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'}) + " \n";
    output += "С начала учебного года прошло " + Math.floor((dateToday-dateFirst)/(1000*60*60*24)) +
     " дней.\nДо конца учебного года осталось " + Math.floor((lastDay - dateToday)/(1000*60*60*24)) + " дней.";
    alert(output);
}

function OpenWindow(){
    window.open("newWindow.html");
}

function ShowPageSource(){
    var mes = "";
    for (var i=0; i < document.all.length; i++){ 
        mes = mes + i + " tagName= "+ document.all[i].tagName +
    " id= "+ document.all[i].id + "\n"};
    alert(mes);
}

var lineColors = ['red', 'blue', 'yellow', 'green'];
var lineIndex = 0;
function ChangeLine(){
    if(lineIndex >= 4)
        lineIndex = 0;
    document.getElementById("Line").style.backgroundColor = lineColors[lineIndex];
    lineIndex++;
}

function ChangeBorders(){
    var color1 = document.getElementById('pic1').style.borderColor;
    var color2 = document.getElementById('pic2').style.borderColor;
    document.getElementById('pic1').style.borderColor = color2;
    document.getElementById('pic2').style.borderColor = color1;
    document.getElementById('pic3').style.borderColor = color2;
}