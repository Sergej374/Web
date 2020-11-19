function task1(){
    var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    document.write("<table border=1 style='width: 400px; height: 400px;'>");
    for(var i = 8; i >= 1; i--){
        document.write("<tr>")
        document.write("<td>" + i + "</td>")
        for(var j = 8; j >=1; j--){
            if(i%2 != 0){
                if(j%2 != 0){
                    document.write("<td style='background-color:darkorchid'></td>")
                }else{
                    document.write("<td style='background-color:indigo'></td>")
                }
            }else{
                if(j%2 == 0){
                    document.write("<td style='background-color:darkorchid'></td>")
                }else{
                    document.write("<td style='background-color:indigo'></td>")
                }
            }
        }
        document.write("</tr>");
    }
    document.write("<tr>");
    for(var i = -1; i < 8; i++){
        document.write("<td>");
        if(i >= 0){
        document.write(chars[i]);
        document.write("</td>");
        }
    }
}

function task2(){
    var min = parseInt(prompt("Minimun: "));
    var max = parseInt(prompt("Maximum: "));
    document.write("<table border=1 width=30%><tr>");
    for(i = 1; i <= 10; i++){
        document.write("<td>" + i + "</td>");
    }
    document.write("</tr><tr>");
    for(i = 1; i <= 10; i++){
        document.write("<td>" + Math.floor(rand(min, max)) + "</td>");
    }
    document.write("</table>")
}

function rand(min, max){
    if(min <= max){
        return max * Math.random() + min;
    }else{
        return min * Math.random() +  max;
    }
}

function task3(){
    var a = parseFloat(prompt("Number a:"));
    var n = parseFloat(prompt("Power n:"));
    alert("Число " + a + " в " + n + "-й степени равно " + Math.pow(a, n));
}