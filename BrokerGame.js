$("#butStart").click(function() {
    $(this).parent("#inf").toggleClass('hide');
    $(this).parent("#inf").siblings("#gamers").toggleClass('hide');
    $("#butNext").show();
});



$("#butNext").click(function() {
    $("#gamers").addClass('hide');
    $(this).hide();
    for (var k = 1; k < 5; k++) {
        var text = document.getElementsByTagName("input")[k]; // Запись имен игроков в массив
        var val = text.value;
        gamers[k - 1] = val;
        var brokerLots = userslots[k - 1] //Количество акций игрока - массив
        if (k == 1) {
            $("#g1").text(val);
            $("#c1").text(usersCash[k - 1]);
            for (var i = 0; i < 4; i++) { //Записываем к-во акций игрока1 в поля
                if (i == 0) {
                    $("div#br1").find("h2.lot1").text(brokerLots[i]);
                }
                if (i == 1) {
                    $("div#br1").find("h2.lot2").text(brokerLots[i]);
                }
                if (i == 2) {
                    $("div#br1").find("h2.lot3").text(brokerLots[i]);
                }
                if (i == 3) {
                    $("div#br1").find("h2.lot4").text(brokerLots[i]);
                }
            }
        }
        if (k == 2) {
            $("#g2").text(val);
            $("#c2").text(usersCash[k - 1]);
            for (var i = 0; i < 4; i++) { //Записываем к-во акций игрока2 в поля
                if (i == 0) {
                    $("div#br2").find("h2.lot1").text(brokerLots[i]);
                }
                if (i == 1) {
                    $("div#br2").find("h2.lot2").text(brokerLots[i]);
                }
                if (i == 2) {
                    $("div#br2").find("h2.lot3").text(brokerLots[i]);
                }
                if (i == 3) {
                    $("div#br2").find("h2.lot4").text(brokerLots[i]);
                }
            }
        }
        if (k == 3) {
            $("#g3").text(val);
            $("#c3").text(usersCash[k - 1]);
            for (var i = 0; i < 4; i++) { //Записываем к-во акций игрока3 в поля
                if (i == 0) {
                    $("div#br3").find("h2.lot1").text(brokerLots[i]);
                }
                if (i == 1) {
                    $("div#br3").find("h2.lot2").text(brokerLots[i]);
                }
                if (i == 2) {
                    $("div#br3").find("h2.lot3").text(brokerLots[i]);
                }
                if (i == 3) {
                    $("div#br3").find("h2.lot4").text(brokerLots[i]);
                }
            }
        }
        if (k == 4) {
            $("#g4").text(val);
            $("#c4").text(usersCash[k - 1]);
            for (var i = 0; i < 4; i++) { //Записываем к-во акций игрока4 в поля
                if (i == 0) {
                    $("div#br4").find("h2.lot1").text(brokerLots[i]);
                }
                if (i == 1) {
                    $("div#br4").find("h2.lot2").text(brokerLots[i]);
                }
                if (i == 2) {
                    $("div#br4").find("h2.lot3").text(brokerLots[i]);
                }
                if (i == 3) {
                    $("div#br4").find("h2.lot4").text(brokerLots[i]);
                }
            }
        }

    }
    activeUserCash = usersCash[activeGamer - 1]; //Счет текущего игрока
    console.log(activeUserCash);
    gamerStep(activeGamer);
});

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



    // alert("activeGamer" + activeGamer);

};

$("body").on("click", "#butTrade", function() {

    $(this).parent("h1").html(gamers[activeGamer - 1]);

    if (activeGamer !== 1) {
        $("#br1").slideUp(500);
    }
    if (activeGamer !== 2) {
        $("#br2").slideUp(500);
    }
    if (activeGamer !== 3) {
        $("#br3").slideUp(500);
    }
    if (activeGamer !== 4) {
        $("#br4").slideUp(500);
    }
    $(".trade").slideDown(500);
    $(".result").slideDown(1500);

    $("#resultBidding").show();

    $("input.sell , input.buy").val("0")  // обнуление содержимого

});

$(".trade input").focusin(function() {

    var UserCash = activeUserCash;

    //Подсчет суммы полученной при продаже акций    
    for (var i = 0; i < 4; i++) {
        var num = document.getElementsByClassName("sell")[i];
        var sellLot = num.value;
        var ratingLot = ratingLots[i];
        UserCash = UserCash + sellLot * ratingLot;
        console.log(sellLot);
    }
    //Подсчет суммы потраченной на покупку акций
    for (var i = 0; i < 4; i++) {
        var num = document.getElementsByClassName("buy")[i];
        var buyLot = num.value;
        var ratingLot = ratingLots[i];
        UserCash = UserCash - buyLot * ratingLot;
    }

    var numberLot = $(this).attr('name');
    numberLot = +numberLot;
    var ratingLot = ratingLots[numberLot - 1]; //Цена акций для выбранной ячейки
    var brokerLots = userslots[activeGamer - 1];
    var userLot = brokerLots[numberLot - 1]; //Количество акций имеющееся у игрока
    console.log(ratingLot);

    if ($(this).hasClass("buy")) {
        console.log("buy");
        maxLot = Math.floor(UserCash / ratingLot) + +$(this).val(); //Максимальное к-во акций которое может купить игрок
    }
    if ($(this).hasClass("sell")) {
        console.log("sell");
        maxLot = userLot;
    }


    if (maxLot < 0) {
        maxLot = 0;
    }

    console.log(maxLot);
    // $(this).val(maxLot);
    // if (activeGamer == 1) {
    //     $("#c1").text(UserCash);
    // }
    // if (activeGamer == 2) {
    //     $("#c2").text(UserCash);
    // }
    // if (activeGamer == 3) {
    //     $("#c3").text(UserCash);
    // }
    // if (activeGamer == 4) {
    //     $("#c4").text(UserCash);
    // }
    $("#userCash").text(UserCash);

});

$(".trade input").focusout(function() {

    var buySellLot = $(this).val(); //Кво акций купленных/проданных игроком
    if (buySellLot > maxLot) {
        $(this).val(maxLot);
    }
    // resultBidding();
});

$("body").on("click", "#resultBidding", function resultBidding() { //Завершение торгов и фиксирование результатов

    $("#resultBidding").hide();
    $("#changeRating").show();
    var brokerLots = userslots[activeGamer - 1];
    var UserCash = activeUserCash;

    for (var i = 0; i < 4; i++) {
        var num = document.getElementsByClassName("sell")[i];
        var sellLot = +num.value;
        num = document.getElementsByClassName("buy")[i];
        var buyLot = +num.value;
        var ratingLot = +ratingLots[i];
        UserCash = UserCash + (sellLot - buyLot) * ratingLot;
        var brokerLot = +brokerLots[i];
        console.log(typeof(brokerLot));
        brokerLot = brokerLot + buyLot - sellLot;
        brokerLots[i] = brokerLot;
        userslots[activeGamer - 1] = brokerLots;
        console.log(typeof(brokerLot));

        for (let key in brokerLots) {
            console.log(key + ':новое количество акций ' + brokerLots[key]);
        };

        if (i == 0) {
            $("#lot1").text(brokerLot);
        }
        if (i == 1) {
            $("#lot2").text(brokerLot);
        }
        if (i == 2) {
            $("#lot3").text(brokerLot);
        }
        if (i == 3) {
            $("#lot4").text(brokerLot);
        }

    }
    usersCash[activeGamer - 1] = UserCash;
    $("#userCash").text(UserCash);
    $(".buy").prop("disabled", true);
    $(".sell").prop("disabled", true);



});

//Изменение курсов акций и завершение хода

$("body").on("click", "#changeRating", function() {

    $(".result").slideUp(600);
    $(".buyLot").slideUp(1200);
    $(".sellLot").slideUp(1800);

    $(".buy").prop("disabled", false);
    $(".sell").prop("disabled", false);
    $("#changeRating").hide();

    var brokerLots = userslots[activeGamer - 1] //Количество акций текущего игрока - массив
    if (activeGamer == 1) {

        $("#c1").text(usersCash[activeGamer - 1]);
        for (var i = 0; i < 4; i++) { //Записываем к-во акций текущего игрока1 в поля
            if (i == 0) {
                $("div#br1").find("h2.lot1").text(brokerLots[i]);
            }
            if (i == 1) {
                $("div#br1").find("h2.lot2").text(brokerLots[i]);
            }
            if (i == 2) {
                $("div#br1").find("h2.lot3").text(brokerLots[i]);
            }
            if (i == 3) {
                $("div#br1").find("h2.lot4").text(brokerLots[i]);
            }
        }
    }
    if (activeGamer == 2) {

        $("#c2").text(usersCash[activeGamer - 1]);
        for (var i = 0; i < 4; i++) { //Записываем к-во акций текущего игрока2 в поля
            if (i == 0) {
                $("div#br2").find("h2.lot1").text(brokerLots[i]);
            }
            if (i == 1) {
                $("div#br2").find("h2.lot2").text(brokerLots[i]);
            }
            if (i == 2) {
                $("div#br2").find("h2.lot3").text(brokerLots[i]);
            }
            if (i == 3) {
                $("div#br2").find("h2.lot4").text(brokerLots[i]);
            }
        }
    }
    if (activeGamer == 3) {

        $("#c3").text(usersCash[activeGamer - 1]);
        for (var i = 0; i < 4; i++) { //Записываем к-во акций текущего игрока3 в поля
            if (i == 0) {
                $("div#br3").find("h2.lot1").text(brokerLots[i]);
            }
            if (i == 1) {
                $("div#br3").find("h2.lot2").text(brokerLots[i]);
            }
            if (i == 2) {
                $("div#br3").find("h2.lot3").text(brokerLots[i]);
            }
            if (i == 3) {
                $("div#br3").find("h2.lot4").text(brokerLots[i]);
            }
        }
    }
    if (activeGamer == 4) {

        $("#c4").text(usersCash[activeGamer - 1]);
        for (var i = 0; i < 4; i++) { //Записываем к-во акций текущего игрока4 в поля
            if (i == 0) {
                $("div#br4").find("h2.lot1").text(brokerLots[i]);
            }
            if (i == 1) {
                $("div#br4").find("h2.lot2").text(brokerLots[i]);
            }
            if (i == 2) {
                $("div#br4").find("h2.lot3").text(brokerLots[i]);
            }
            if (i == 3) {
                $("div#br4").find("h2.lot4").text(brokerLots[i]);
            }
        }
    }
    // $(".cangerLotCards").slideDown() ;  
    // var lotCard = $("div.construct").html();
    // console.log(lotCard);
    // $("div.cangerLotCards").append(lotCard);
    // $("div.cangerLotCards").append(lotCard);
    // newLotCard.innerHTML = '"<div>Привет!</div>"'

    var cangerLotCards = listCangerLotCards[activeGamer - 1]; //Создание карточек для изменения курса

    
    var initialHtml = $("div.cangerLotCards").html()

    for (let key in cangerLotCards) {
        var t = +key + 1;
        $(".construct #clc").text(t);
        clc = cangerLotCards[key];
        console.log(clc);
        for (let k in clc) {
            if (k == 0) {
                $(".construct #clc0").text(clc[k]);
            }
            if (k == 1) {
                $(".construct #clc1").text(clc[k]);
            }
            if (k == 2) {
                $(".construct #clc2").text(clc[k]);
            }
            if (k == 3) {
                $(".construct #clc3").text(clc[k]);
            }
        };
        var lotCard = $("div.construct").html();
        $("div.cangerLotCards").append(lotCard);
    };
    $(".cangerLotCards").slideDown(1800);
    // Выбираем карточку изменения курсов
    $(".lotCard").click(function() {

        $(".cangerLotCards").slideUp(1800); //скрываем игровые карточки
        $("div.cangerLotCards").html(initialHtml); //записываем начальный html


        var nlc = $(this).find("h1#clc").text();
        console.log(nlc);
        var lotCard = cangerLotCards[nlc - 1];
        cangerLotCards.splice(nlc - 1, 1);
        console.log(cangerLotCards);
        //сохраняем остаток карточек игрока в массиве
        listCangerLotCards[activeGamer - 1] = cangerLotCards;
        //изменение курсов и запись новых значений в игровое поле
        var maxRating = 0;
        for (var i = 0; i < 4; i++) {
            var ratingLot = ratingLots[i];
            var cr = lotCard[i];
            console.log(ratingLot, cr, ratingLot + cr);
            ratingLot = ratingLot + cr;

            if (maxRating < ratingLot) {
                maxRating = ratingLot
            }

            if (ratingLot < 5) {
                ratingLot = 5;
            }
            ratingLots[i] = ratingLot;

            if (i == 0) {
                $("#rl1").text(ratingLots[i]);

            }
            if (i == 1) {
                $("#rl2").text(ratingLots[i]);
            }
            if (i == 2) {
                $("#rl3").text(ratingLots[i]);
            }
            if (i == 3) {
                $("#rl4").text(ratingLots[i]);
            }

        }
        console.log(maxRating);
        for (var i = 0; i < 4; i++) {
            var ratingDiagram = Math.round(ratingLots[i] * 100 / maxRating);
            if (i == 0) {
                $("#s1").width(ratingDiagram + "%");
            }
            if (i == 1) {
                $("#s2").width(ratingDiagram + "%");
            }
            if (i == 2) {
                $("#s3").width(ratingDiagram + "%");
            }
            if (i == 3) {
                $("#s4").width(ratingDiagram + "%");
            }
        }

        if (activeGamer !== 1) {
            $("#br1").slideDown(2500);
        }
        if (activeGamer !== 2) {
            $("#br2").slideDown(2500);
        }
        if (activeGamer !== 3) {
            $("#br3").slideDown(2500);
        }
        if (activeGamer !== 4) {
            $("#br4").slideDown(2500);
        }

        //Передаем ход следующему игроку
        if (activeGamer < 4) {
            activeGamer = activeGamer + 1;
            console.log("activeGamer:-" + activeGamer);

        } else {
            console.log("activeGamer:-" + activeGamer);
            activeGamer = 1;
            console.log("activeGamer:-" + activeGamer);
        }
        // alert("g1");
        console.log("g1");
        $("#butNext").show();
        // gamerStep(activeGamer);

    });

});


// $(".buyLot input").focusout(function() {
//     var buyLot = $(this).val();  //Кво акций купленных игроком
//     if (buyLot > maxLot) {
//         $(this).val(maxLot);
//     }
//     var buyLot = $(this).val();
//     activeUserCash = activeUserCash - buyLot*ratingLot;
//     alert(activeUserCash);
// });

// var trades = {
//     tradeLot: function() {
//         if (actionTrade < = maxLot) {
//             var userL = userLot + actionTrade;

//             if (userL < 0) {
//                 userL = userLot;
//                 return alert('У Вас не достаточно акций.');
//             }
//             brokerLots[i] = userL;
//             this.accountCash(userCash, actionTrade, ratingLot);
//             alert('Новое количество акций компании ' + i + ' в собственности игрока ' + k + ' - ' + brokerLots[i]);
//             return brokerLots[i];

//         }
//         return alert('У вас не достаточно денег.');

//     },
//     tradeCash: function() {
//         var maxLot = Math.round(userCash / ratingLot);
//         return maxLot;
//     },
//     accountCash: function() {
//         userCash = userCash - actionTrade * ratingLot;
//         alert('Остаток наличных - ' + userCash);
//         return userCash;
//     }
// };


var gamers = ['Игрок', 'Игрок', 'Игрок', 'Игрок']; //Имена игроков
var ratingLots = [51, 52, 53, 54]; //Цена акций
var userLots1 = [11, 22, 33, 44, ]; //Количество акций у юзера. Необходим массив для 4-х игроков usersLots
var userLots2 = [51, 52, 53, 54, ];
var userLots3 = [61, 62, 63, 64, ];
var userLots4 = [71, 72, 73, 74, ];
var userslots = [userLots1, userLots2, userLots3, userLots4];
var usersCash = [1001, 1002, 1003, 1004];
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

var activeGamer = 4; //Текущий игрок
var activeUserCash;
// var activeUserCash = usersCash[activeGamer - 1]; //Счет текущего игрока
var maxLot; //


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
