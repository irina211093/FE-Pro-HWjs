//Создать 3 input полей и также 4 кнопки, каждая кнопка будет выполнять определённое действие и будет вызывать свой метод

//Создать функцию checkEquality с помощью которого проверяем равны ли все 3 значение внутри input-ов или нет
//Например если 3, 3, 3 то в результате должны получать "Все поле равны" если нет то пишем "Все поле не равны"

//Создать функцию hasZero с помощью которого проверяем есть ли поле которое равно 0 если есть пишем "Да, есть", если нет пишем просто "Нет"
//Например если будет 1, 2, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет"

//оздать функцию sameOne с помощью которого проверяем есть ли поле которое совпадают, если есть пишем "Да, есть", если нет пишем просто "Нет"
//Например если будет 1, 1, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет" 

  function getInputValues() {
      return [
         +document.querySelector(".input-1").value,
         +document.querySelector(".input-2").value,
          +document.querySelector(".input-3").value
      ];
  }

function checkEquality() {
    const [val1, val2, val3] = getInputValues();
    document.querySelector('.result').textContent = (val1 === val2 && val2 === val3) 
        ? "Все поля равны" 
        : "Все поля не равны";
}

function hasZero() {
    const [val1, val2, val3] = getInputValues();
    document.querySelector('.result').textContent = (val1 === 0 || val2 === 0 || val3 === 0) 
        ? "Да, есть" 
        : "Нет";
}

function sameOne() {
    const [val1, val2, val3] = getInputValues();
    document.querySelector('.result').textContent = (val1 === val2 || val1 === val3 || val2 === val3) 
         ? "Да, есть" 
         : "Нет";
   
}

// Создать функцию sortNumbers которая будет сортировать три числа в порядке возрастания
// Например если 3, 4, 2 то в результате получим "2 3 4"

function sortNumbers() {
    const [val1, val2, val3] = getInputValues();
    const sortedNumbers = [val1, val2, val3].sort((a, b) => a - b);
    document.querySelector('.result').textContent = sortedNumbers.join(" ");
}

// ЗАДАЧА 2
// Продолжить задачу по тестам, добавить возможность проверка, добавить еще 5 полей чтобы окончательный результат было 20, далее
// Если ученик получил 18 >, то мы отображаем текст "Вы получили 18, отлично"
// Если ученик получил от 12 до 18, то мы отображаем текст "Вы получили 16, хорошо"
// Если ученик получил от 8 до 12, то мы отображаем текст "Вы получили 11, удовлетворительно"
// Если ученик получил до 8, то мы отображаем текст "Вы получили 7, неудовлетворительно"


function displayResult() {
    let score = +document.querySelector(".score").value;

    if (score >= 18) {
        document.querySelector(".result-1").innerText  = `Вы получили ${score}, отлично`;
    } else if (score >= 12 && score < 18) {
        document.querySelector(".result-1").innerText  = `Вы получили ${score}, хорошо`;
    } else if (score >= 8 && score < 12) {
        document.querySelector(".result-1").innerText  = `Вы получили ${score}, удовлетворительно`;
    } else {
        document.querySelector(".result-1").innerText  = `Вы получили ${score}, неудовлетворительно`;
    }
}

// Создать функцию convertSeconds() которая используется для преобразования количества 
// секунд в формат с днями, часами и минутами и отображения этого значения в элементе с идентификатором "result".

function convertSeconds() {
    const secondsInput = document.querySelector(".secondsInput").value;
    let seconds = parseInt(secondsInput);

    if (isNaN(seconds) || seconds < 0) {
        document.querySelector(".result-2").innerText = "Введите корректное количество секунд.";
        return;
    }

    const days = Math.floor(seconds / (24 * 3600));
    seconds %= (24 * 3600);

    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    const result = `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;

    document.querySelector(".result-2").innerText = result;
}






