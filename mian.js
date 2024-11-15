let menuel = document.querySelector(".toggle");
let links = document.querySelector(".link");
let section = document.querySelector(".slider");
let boxel = document.querySelectorAll(" .slider .box");
let right = document.querySelector(".right");
let left = document.querySelector(".left");

let index = 1;
let timeout;




// 
menuel.onclick = function() {
    links.classList.toggle('active');
    if (links.classList.contains("active")) {
        menuel.classList.remove("fa-bars");
        menuel.classList.add("fa-x");

    } else {
        menuel.classList.add("fa-bars");
        menuel.classList.remove("fa-x");

    }
}
right.onclick = function() {
    index++;
    clearTimeout(timeout);
    update();
}
left.onclick = function() {
    index--;
    clearTimeout(timeout);
    update();
}

function update() {
    if (index > boxel.length) {
        index = 1;
    } else if (index < 1) {
        index = boxel.length;
    }

    section.style.transform = `translateX(-${(index - 1) *100}%)`;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        index++;
        update();
    }, 1000);
}

update(); // بدء التشغيل
// -----------------------------------------------
const test = [{
        username: "Jena toloe",
        photourl: "images/comments-1.jpg",
        infoo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
        username: "Listorel Amankina",
        photourl: "images/comments-2.jpg",
        infoo: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
    },
    {
        username: "Leel Alura",
        photourl: "images/comments-3.jpg",
        infoo: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source"
    }
];
let img = document.querySelector(".photo");
let info = document.querySelector(".info");
let namee = document.querySelector(".username");


let counter = 0;
change();

function change() {

    const { username, photourl, infoo } = test[counter];
    img.src = photourl;
    namee.textContent = username;
    info.textContent = infoo;
    counter++;
    if (counter == test.length) {
        counter = 0;
    }
    setTimeout(() => {
        change();
    }, 3000)
}