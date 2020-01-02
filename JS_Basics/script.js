//====================================
//Coding challenge 1
//====================================

/* var markMass, johnMass;
var markHeight, johnHeight;

markMass = prompt("mark what is your mass?");
johnMass = prompt("John what is your mass?");
markHeight = prompt("Mark what is your height?");
johnHeight = prompt("John what is your height?");

var markBMI = markMass / (markHeight*markHeight);
var johnBMI = johnMass / (johnHeight*johnHeight);

var compare = markBMI > johnBMI;

console.log ("Is mark's BMI higher than john's? - " + compare); */

//====================================
//Coding Challenge 2
//====================================

/* var john1 = 90,
    john2 = 120,
    john3 = 123;

var mike1 = 120,
    mike2 = 105,
    mike3 = 110;

var mary1 = 120,
    mary2 = 110,
    mary3 = 105;


avgJohn = (john1 + john2 + john3)/3;
avgMike = (mike1 + mike2 + mike3)/3;
avgMary = (mary1 + mary2 + mary3)/3;

var winner, winnerAvg = 0;

if (avgJohn > avgMike && avgMike > avgMary){
    winner = "John";
    winnerAvg = avgJohn;

} else if (avgMike > avgMary && avgMike > avgJohn){
    winner = "Mike";
    winnerAvg = avgMike;
} else if (avgMary > avgMike && avgMary > avgJohn) {
    winner = "Mary";
    winnerAvg = avgMary;
} else {
    winner = "everyone";
}

console.log("winner is " + winner + " with the score " + winnerAvg); */


//====================================
//Coding Challenge 3
//====================================


/* var bills = [124, 48, 268];
var tips = [];
var paid = [];

function tipCalculator(bill){
    var tip;
    if (bill<50){
        tip = bill*0.2;
    } else if (bill>=50 && bill <=200){
        tip = bill*0.15;
    } else {
        tip = bill*0.1;
    }
    tips.push(tip);
    paid.push(bill+tip);
}

for (i = 0; i<bills.length; i++){
    tipCalculator(bills[i]);
}

console.log(tips);
console.log(paid); */

//====================================
//Coding Challenge 4
//====================================

/* var data = {
    name: ["John", "Mark", "Mary", "Alex"],
    mass: [68, 90, 40, 50],
    height: [1.2, 1.8, 1.6, 1.4],
    BMI: [],
    calcBMI: function(){
            for (i = 0; i < this.name.length; i++) {
            this.BMI.push(this.mass[i]/(this.height[i]*this.height[i]));
         }
    }, 
    winner: function(){
        var win = this.BMI[0];
        for (i =0; i < this.name.length; i++) {
            if (this.BMI[i] < this.BMI[i+1]){
                win = this.BMI[i+1];
            }
        }
        var x = this.BMI.indexOf(win);
        console.log(this.BMI[x]);
        return this.name[x];
    }
}

data.calcBMI();
var winner = data.winner();
console.log("winner is "+ winner); */


//====================================
//Coding Challenge 5
//====================================

var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    paid: [],
    calc: function(){
        var percentage;
        for (var i =0; i<this.bills.length; i++){
            if(this.bills[i] < 50){
                percentage = 0.2;
            } else if (this.bills[i] >= 50 && this.bills[i]<= 200){
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }
            this.tips.push(this.bills[i]*percentage);
            this.paid.push(this.bills[i]+this.bills[i]*percentage);
        }
    }
}

john.calc();
//console.log(john.tips);

var markBills = [77, 375, 110, 45];
var markTips = [];
var markPaid = [];

function calcMark(bills){
    var percentage;
    for ( var i =0; i< bills.length; i++){
        if (bills[i] < 100){
            percentage = 0.2;
        } else if (bills[i] >= 100 && bills[i] <=300){
            percentage = 0.1;
        } else {
            percentage = 0.25;
        }
        var tips = ((bills[i]) * percentage);
        var paid = tips = bills[i];
      //  console.log(tips);
        console.log(bills[i] * percentage);

        markTips.push(bills[i] * percentage);
        
        markPaid.push(bills[i] * percentage + bills[i]);
    }
}

function calcAverage(data){
    var sum=0;
    for (var i =0; i<data.length; i++){
        sum = sum + data[i];
    }
    console.log(sum/data.length);
    return sum/data.length;
}

calcMark(markBills);
//console.log(markTips);
//console.log(markPaid);

 var avgJohn = calcAverage(john.tips);
 var avgMark = calcAverage(markTips);

 (avgJohn > avgMark) ? console.log("John paid more") : console.log("Mark paid more");
