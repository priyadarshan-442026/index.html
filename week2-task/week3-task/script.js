// ================================
// Smart Laundry Service
// JavaScript
// ================================


// Welcome Message
window.onload = function () {
    alert("Welcome to Smart Laundry Service!");
};


// Learn More Button

const learnBtn = document.getElementById("learnBtn");
const learnText = document.getElementById("learnText");

learnBtn.addEventListener("click", function () {

    learnText.innerHTML =
        "We provide premium washing, ironing, dry cleaning and doorstep pickup with affordable pricing.";

});



// Dark Mode

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

});



// Live Clock

function showTime() {

    let today = new Date();

    let time = today.toLocaleTimeString();

    document.getElementById("clock").innerHTML = time;

}

setInterval(showTime, 1000);

showTime();



// Counter

let count = 0;

const counter = document.getElementById("count");

document.getElementById("increase").addEventListener("click", function () {

    count++;

    counter.innerHTML = count;

});

document.getElementById("decrease").addEventListener("click", function () {

    if (count > 0) {

        count--;

        counter.innerHTML = count;

    }

});



// Random Quotes

const quotes = [

    "Clean clothes make a fresh start.",

    "Quality service is our priority.",

    "Laundry today, confidence tomorrow.",

    "Your satisfaction is our success.",

    "Every wash brings a smile."

];

document.getElementById("quoteBtn").addEventListener("click", function () {

    let random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerHTML = quotes[random];

});




// Form Validation

document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields.");

        return;

    }

    alert("Thank you! Your message has been submitted successfully.");

    this.reset();

});




// Heading Hover Effect

const heading = document.getElementById("mainHeading");

heading.addEventListener("mouseover", function () {

    heading.style.color = "yellow";

    heading.style.transform = "scale(1.05)";

});

heading.addEventListener("mouseout", function () {

    heading.style.color = "white";

    heading.style.transform = "scale(1)";

});




// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 250) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

};

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});




// Service Card Animation

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {

    card.addEventListener("mouseover", function () {

        card.style.background = "#0077cc";

        card.style.color = "white";

    });

    card.addEventListener("mouseout", function () {

        card.style.background = "white";

        card.style.color = "black";

    });

});




// Smooth Navigation

const links = document.querySelectorAll("nav a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("Navigation Clicked");

    });

});




// Console Message

console.log("Smart Laundry Service Website Loaded Successfully.");