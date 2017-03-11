$("#butStart").click(function() {
    $(this).parent("#inf").toggleClass('hide');
    $(this).parent("#inf").siblings("#gamers").toggleClass('hide');
});



$("#butNext").click(function() {
    $(this).parent("#gamers").toggleClass('hide');

    for (var k = 1; k < 5; k++) {
        var text = document.getElementsByTagName("input")[k];
        var val = text.value;
        gamers[k - 1] = val;
        // alert(val);
        if (k == 1) {
            $("#g1").text(val);
        }
        if (k == 2) {
            $("#g2").text(val);
        }
        if (k == 3) {
            $("#g3").text(val);
        }
        if (k == 4) {
            $("#g4").text(val);
        }
    }
    gamerStep(activeGamer);
});

function aktiveGamer(nextGamer) {
    if (nextGamer < 5) {
        return activeGamer = nextGamer;
    }
    return activeGamer = 1;
};

function gamerStep(activeGamer) {
    if (activeGamer == 1) {
        $("#g1").html($("#g1").html() + '<input id="butTrade" type="button" name="" value="Ваш ход">');
    }
    if (activeGamer == 2) {
        $("#g2").html($("#g2").html() + '<input id="butTrade" type="button" name="" value="Ваш ход">');
    }
    if (activeGamer == 3) {
        $("#g3").html($("#g3").html() + '<input id="butTrade" type="button" name="" value="Ваш ход">');
    }
    if (activeGamer == 4) {
        $("#g4").html($("#g4").html() + '<input id="butTrade" type="button" name="" value="Ваш ход">');
    }
    alert("OK");
    alert("activeGamer" + activeGamer);

};

$("body").on("click", "#butTrade", function() {
    alert("click");
    if (activeGamer !== 1) {
        $("#g1").html($("#g1").html() + '<input id="butTrade" type="button" name="" value="Ваш ход">');
    }
    if (activeGamer !== 2) {
        $("#g2").html($("#g2").html() + '<input type="button" name="" value="Ваш ход">');
    }
    if (activeGamer !== 3) {
        $("#g3").html($("#g3").html() + '<input type="button" name="" value="Ваш ход">');
    }
    if (activeGamer !== 4) {
        $("#g4").html($("#g4").html() + '<input type="button" name="" value="Ваш ход">');
    }
    $("#br2").addClass("hide");
    // $('.brokerCard').css('display', 'none');
    alert($('div.brokerCard').html());
    // $(this).parent("div.brokerCard").toggleClass('hide');
});

var activeGamer = 1;
var gamers = ['Игрок', 'Игрок', 'Игрок', 'Игрок']; //Имена игроков
var ratingLots = [50, 50, 50, 50]; //Цена акций
var userLots1 = [11, 22, 33, 44, ]; //Количество акций у юзера. Необходим массив для 4-х игроков usersLots
var userLots2 = [50, 50, 50, 50, ];
var userLots3 = [11, 22, 33, 44, ];
var userLots4 = [11, 22, 33, 44, ];
var userslots = [userLots1, userLots2, userLots3, userLots4];
var usersCash = [1000, 1000, 1000, 1000];
var clc1 = [0, 10, 20, 30];
var clc2 = [30, 20, 10, 0];
var clc3 = [-20, 20, 0, 0];
var clc4 = [20, -20, 0, 0];
var clc5 = [-30, 50, 30, -30];
var clc6 = [0, -30, -30, 50];
var clc7 = [40, -20, -30, -40];
var clc8 = [-20, -10, 20, 10];
var clc9 = [10, 0, -10, 10];
var clc10 = [-30, -10, -10, -30];
var cangerLotCards1 = [clc1, clc2, clc3, clc4, clc5, clc6, clc7, clc8, clc9, clc10];
var cangerLotCards2 = [clc1, clc2, clc3, clc4, clc5, clc6, clc7, clc8, clc9, clc10];
var cangerLotCards3 = [clc1, clc2, clc3, clc4, clc5, clc6, clc7, clc8, clc9, clc10];
var cangerLotCards4 = [clc1, clc2, clc3, clc4, clc5, clc6, clc7, clc8, clc9, clc10];
var listCangerLotCards = [cangerLotCards1, cangerLotCards2, cangerLotCards3, cangerLotCards4];

// for (var k = 0; k < 2; k++) { //Выбираем игрока
//     brokerLots = userslots[k]; //Акции игрока
//     cangerLotCards = listCangerLotCards[k]; //Для текущего игрока - Карты изменения курсов акций
//     for (let key in cangerLotCards) {
//         document.write(key + ': ' + cangerLotCards[key] + '  ');
//     };
//     for (let key in brokerLots) {
//         document.write(key + 'в начале: ' + brokerLots[key] + '<br>');
//     };

//     var userCash = usersCash[k]; //Наличные деньги игрока
//     alert('Сумма наличных игрока  ' + k + ' - ' + userCash);

//     for (var i = 0; i < 2; i++) { //Выбираем акционерную компанию
//         var userLot = brokerLots[i];
//         var ratingLot = ratingLots[i];
//         document.write('Количество акций компании ' + i + ' в собственности игрока ' + k + ':  ' + userLot + '<br>');
//         document.write('Текущий курс акций компании ' + i + ':  ' + ratingLot + '<br>');

//         var trades = {
//             tradeLot: function() {
//                 if (actionTrade < = maxLot) {
//                     var userL = userLot + actionTrade;

//                     if (userL < 0) {
//                         userL = userLot;
//                         return alert('У Вас не достаточно акций.');
//                     }
//                     brokerLots[i] = userL;
//                     this.accountCash(userCash, actionTrade, ratingLot);
//                     alert('Новое количество акций компании ' + i + ' в собственности игрока ' + k + ' - ' + brokerLots[i]);
//                     return brokerLots[i];

//                 }
//                 return alert('У вас не достаточно денег.');

//             },
//             tradeCash: function() {
//                 var maxLot = Math.round(userCash / ratingLot);
//                 return maxLot;
//             },
//             accountCash: function() {
//                 userCash = userCash - actionTrade * ratingLot;
//                 alert('Остаток наличных - ' + userCash);
//                 return userCash;
//             }
//         };

//         var maxLot = trades.tradeCash(userCash, ratingLot);
//         alert('Доступное количество для покупки - ' + maxLot);
//         var actionTrade = +prompt("продажа/покупака акций." + i + " Введите количество ", "");
//         trades.tradeLot(actionTrade); //Ход игрока - торги
//     };
//     usersCash[k] = userCash;
//     document.write('Остаток наличных в массиве ' + usersCash[k] + '<br>');
//     userslots[k] = brokerLots;
//     for (let key in brokerLots) {
//         document.write(key + ':новое количество акций ' + brokerLots[key] + '<br>');
//     };

//     var nextRatingLots = {
//         changeRating: function() {
//             var lotCard = cangerLotCards[numberLotCard]; //Выбираем карту для с изменениями курсов
//             for (let key in lotCard) {
//                 document.write(key + ':выбраная карта ' + lotCard[key] + '<br>');
//             }
//             for (let key in ratingLots) {
//                 var rlk = ratingLots[key] + lotCard[key];
//                 if (rlk < 10) {
//                     rlk = 5;
//                 }
//                 ratingLots[key] = rlk;
//                 document.write(key + ':новые курсы ' + ratingLots[key] + '<br>');
//             }
//         }
//     };
//     var numberLotCard = +prompt("введите номер карты для изменения курсов акций ", "");
//     nextRatingLots.changeRating(numberLotCard); //Ход игрока - изменение курсов акций
// };
