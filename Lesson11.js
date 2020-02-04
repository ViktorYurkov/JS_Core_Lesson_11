function show(data) {
    console.log(data);
}

// 1
function myFunct(str){
    return (str[0].toUpperCase()+str.slice(1));
}
show(myFunct("yura"));

// 2
function truncate(str, maxlength){
    var end = '...';
//    var strArray = new String(str);
   // var strLength = length(strArray);
    if (maxlength > 0){
    if (maxlength < 3){
       return str.slice(0,maxlength);
    }else if (str.length > (maxlength-3)){
       return (str.slice(0,maxlength-3)+end);   
    }else return str;
    }else return 'Невірне введення';
};

show(truncate("Ось, що мені хотілося б сказати на цю тему:", 20));
show(truncate ("Всім привіт!", 20));
show(truncate ("Всім привіт!", 2));
show(truncate ("Всім привіт!", -2));

//3
function extractCurrencyValue(str){
 var arrayStr = str.split(' ');
 for(i=0; i<arrayStr.length; i++){
    if (arrayStr[i] == '$'){
     return arrayStr[i+1]
    }
 }
};

show(extractCurrencyValue('Наприклад є вартість у вигляді рядка: $ 120 . Тобто, першим йде знак валюти, а потім - число. В дан'));
