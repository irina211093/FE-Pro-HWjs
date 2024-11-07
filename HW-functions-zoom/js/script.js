//Продолжить функцию zoom() на экране у нас есть изображение размером w = 200,
// h = 200. при каждом клике изображения увеличивайте
  // его размер на 50 (w+ = 50, h + = 50). Если в результате очередного клика 
  //размер изображения превышает 500, то во время всех
   //последующих кликов уменьшайте размер изображения на 50.:

   let width = 200;
   let height = 200;
   let increasing = true; 

    function zoom() {

       if (increasing) {
           width += 150;
           height += 150;
          
           if (width > 500) {
               increasing = false;
           }
       } else {
           width -= 50;
           height -= 50;

           if (width <= 200) {
               increasing = true;
           }
       }
       const image = document.getElementById("zoomImage");
       image.style.width = `${width}px`;
       image.style.height = `${height}px`;
     }
    
//      Задача состоит в создании формы выбора курсов для студента, где студент может выбрать 
//      различные модули: Frontend, Backend и Design,
// а затем выбрать конкретные курсы из каждого модуля. Каждый курс имеет свою стоимость. Студент
//  также должен указать количество приобретаемых курсов.

// После выбора курсов и указания количества, при нажатии кнопки должна
//  отобразиться общая стоимость выбранных курсов.
// Если общая стоимость превышает $3000, студенту предоставляется 30% скидка,
//  и должна отобразиться окончательная сумма со скидкой.

// Например, если студент выбрал курсы JavaScript, PHP и Photoshop, каждый со своей
//  стоимостью, и указал количество 12,
// то должна быть рассчитана общая стоимость (сумма стоимостей каждого выбранного курса, 
//     умноженная на количество) и отображена на экране.
// Если общая стоимость превышает $3000, то должна быть применена скидка в размере 30%,
//  и должна быть показана окончательная сумма со скидкой.

// Например, сообщение на экране может быть: "Уважаемый студент, вы должны заплатить $5400".
// Если общая стоимость превышает $3000,
// то сообщение может быть: "Уважаемый студент, вы должны заплатить $5400, но вы получаете 
// 30% скидку, и окончательная сумма составляет $3780".

const courses = {
    frontend: {
        "JavaScript": 400,
        "HTML & CSS": 300,
        "React": 500
    },
    backend: {
        "PHP": 450,
        "Node.js": 500,
        "Python": 550
    },
    design: {
        "Photoshop": 350,
        "Illustrator": 400,
        "Figma": 300
    }
};

function populateCourses() {
    const module = document.getElementById("moduleSelect").value;
    const coursesContainer = document.getElementById("coursesContainer");
    coursesContainer.innerHTML = "";
    document.getElementById("courseOptions").style.display = "none";

    if (module) {
        document.getElementById("courseOptions").style.display = "block";
        for (const course in courses[module]) {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = courses[module][course];
            checkbox.name = "course";
            checkbox.id = course;

            const label = document.createElement("label");
            label.htmlFor = course;
            label.innerText = `${course} - $${courses[module][course]}`;

            const br = document.createElement("br");
            coursesContainer.appendChild(checkbox);
            coursesContainer.appendChild(label);
            coursesContainer.appendChild(br);
        }
    }
}

function calculateTotal() {
    const quantity = parseInt(document.getElementById("quantity").value);
    const selectedCourses = document.querySelectorAll('input[name="course"]:checked');
    let total = 0;

    selectedCourses.forEach(course => {
        total += parseInt(course.value);
    });

    total *= quantity;

    let resultText = `Уважаемый студент, вы должны заплатить $${total}`;

    if (total > 3000) {
        const discount = total * 0.3;
        const discountedTotal = total - discount;
        resultText += `, но вы получаете 30% скидку, и окончательная сумма составляет $${discountedTotal.toFixed(2)}`;
    }

    document.getElementById("result").innerText = resultText;
}