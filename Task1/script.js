            function task1(){
                var day = +prompt("Day:");
                var month = +prompt("Month:");
                var dayOweek = +prompt("Day of the week:");
                var output = "Today is: ";
                switch(month){
                    case 1: output += "Jarnuary, "; break;
                    case 2: output += "February, "; break;
                    case 3: output += "March, "; break;
                    case 4: output += "April, "; break;
                    case 5: output += "May, "; break;
                    case 6: output += "June, "; break;
                    case 7: output += "July, "; break;
                    case 8: output += "August, "; break;
                    case 9: output += "September, "; break;
                    case 10: output += "October, "; break;
                    case 11: output += "November, "; break;
                    case 12: output += "December, "; break;
                }
                output += day + ", ";
                switch(dayOweek){
                    case 1: output += "Monday"; break;
                    case 2: output += "Tuesday"; break;
                    case 3: output += "Wednesday"; break;
                    case 4: output += "Thurstday"; break;
                    case 5: output += "Friday"; break;
                    case 6: output += "Saturday"; break;
                    case 7: output += "Sunday"; break;
                }
                document.write();
                document.write('<style> *{ color: red } </style>' + output);
            }
            function task2(){
            var number = +prompt("Enter the number");
            var sum = 0;
            var tim = 1;
            while(number > 1){
                sum += Math.floor(number%10);
                tim *= Math.floor(number%10);
                number /= 10;
            }
            alert("Sum = " + sum + ', ' + "Mul = " + tim);
        }
        function task3(){
var lowBoarder = parseInt(prompt("Low boarder:"));
var topBoarder = parseInt(prompt("Top boarder:"));
var number = Math.floor( Math.random()*topBoarder + lowBoarder);
alert("Your random number is: " + number);
        }