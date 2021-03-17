
const moon = document.getElementById('moon');
console.log(moon);
const sun = document.getElementById('sun');
console.log(sun);

var visual = document.getElementById('visual');
let peak1 = visual.firstElementChild;
let peak2 = visual.lastElementChild;


if (localStorage.getItem("theme") === "light") {
    document.body.classList.toggle('light');
    moon.style.display = "none";
    sun.style.display = "block";
    peak1.style.fill = "rgb(146, 201, 44)";
    peak2.style.fill = "darkgreen";

}
else{
    document.body.classList.toggle('light');
    moon.style.display = "block";
    sun.style.display = "none";
    peak1.style.fill = "indianred";
    peak2.style.fill = "brown";
   
    console.log(localStorage.getItem("theme"));
}


moon.addEventListener('click', () => {
    document.body.classList.toggle('light');
    moon.style.display = "none";
    sun.style.display = "block";
    peak1.style.fill = "rgb(146, 201, 44)";
    peak2.style.fill = "darkgreen";
    localStorage.setItem('theme', 'light');
    console.log(localStorage.getItem("theme"));

});
sun.addEventListener('click', () => {
    document.body.classList.toggle('light');
    moon.style.display = "block";
    sun.style.display = "none";
    peak1.style.fill = "indianred";
    peak2.style.fill = "brown";
    localStorage.setItem('theme', 'dark');
    console.log(localStorage.getItem("theme"));

});


var scaleButton = document.querySelectorAll(".awesome-button");
scaleButton.forEach(e => {
    e.addEventListener('click', handleClick);
});




function handleClick(e) {
    console.log(e.target.innerText);

    let property = e.target.innerText;
    let scaleArray = [0.5, 0.25, 1.5, 2, 2.5, 0.75];
    let skewArray = [10, 20, 30, -20, -30, , -10];
    let rotateArray = [-80, -40, -120, 40, 80, 120];
    let translateArray = [10, 20, 30, -20, -30, , -10];
    let randomX = Math.floor(Math.random() * 6);
    let text = e.target.previousElementSibling;
    console.log(text)
    if (property == "Scale") {
        text.style.transform = `scale(${scaleArray[randomX]})`;
    }
    else if (property == "Skew") {
        text.style.transform = `skewX(${skewArray[randomX]}deg)`;
    }
    else if (property == "Translate") {
        text.style.transform = `translate(${translateArray[randomX]}px)`;
    }
    else if (property == "Rotate") {
        text.style.transform = `rotate(${rotateArray[randomX]}deg)`;
    }

}