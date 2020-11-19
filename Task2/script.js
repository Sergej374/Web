function task1(){
    var firstNum = parseInt(prompt('First number:'));
    var secondNum = parseInt(prompt('Second num: '));
    var sum = 0;
    var str = "";
    if(secondNum >= firstNum){
        for(var i = firstNum; i <= secondNum; i++){
            if(i%2 != 0){
                sum+=i;
            }
        }
    }else{
        for(var i = firstNum; i >= secondNum; i--){
            if(i%2 != 0){
                sum+=i;
            }
        }
    }
    alert("Sum: " + sum);
}

function task2(){
    var firstNum = parseInt(prompt('First number:'));
    var secondNum = parseInt(prompt('Second num: '));
    var str = "";
    if(secondNum >= firstNum){
        for(var i = firstNum; i <= secondNum; i++){
            if(i%2 == 0 && i!=0){
                if(str!=""){
                    str+=", "
                }
                str+=i;
            }
        }
    }else{
        for(var i = firstNum; i >= secondNum; i--){
            if(i%2 == 0 && i!=0){
                if(str!=""){
                    str+=", ";
                }
                str+=i;
            }
        }
    }
    alert(str);
}

function task3(){
    var range = parseInt(prompt('Range from 0 to...'));
    var randomNumber = Math.floor(Math.random()*range);
    var num = randomNumber;
    var sum = 0;
    while(randomNumber > 1){
        sum += randomNumber%10;
        randomNumber = Math.floor(randomNumber/10);
    }
    alert("Random number is: " + num + ". Sum of its digits is: " + sum);
}

function task4(){
    document.write("<table border=1 style='width: 400px; height: 400px;'>");
    for(var i = 1; i <= 8; i++){
        document.write("<tr>")
        for(var j = 1; j <=8; j++){
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
}