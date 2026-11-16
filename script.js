
// 1. Form Handling
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (username !== "" && email !== "") {

        document.getElementById("message").textContent =
            "Thank you for visiting, " + username +
            "! We will contact you at " + email + ".";

    } else {

        document.getElementById("message").textContent =
            "Please enter your name and email.";

    }

});


// 2. Table Row Highlighting
const rows = document.querySelectorAll("table tr");

rows.forEach(function (row) {

    row.addEventListener("mouseover", function () {

        row.style.backgroundColor = "lightyellow";

    });

    row.addEventListener("mouseout", function () {

        row.style.backgroundColor = "";

    });

});


// 3. Dark / Light Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});


// 4. Order Total Calculator
const orderItems = document.querySelectorAll(".order-item");

const total = document.getElementById("total");

function calculateTotal() {

    let sum = 0;

    orderItems.forEach(function (item) {

        if (item.checked) {

            sum = sum + Number(item.dataset.price);

        }

    });

    total.textContent = "Total: Rs. " + sum;

}

orderItems.forEach(function (item) {

    item.addEventListener("change", calculateTotal);

});

