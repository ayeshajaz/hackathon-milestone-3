"use strict";
let myName = document.getElementById('name');
let desig = document.getElementById('desig');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let add = document.getElementById('add');
let pass1 = document.getElementById('pass1');
let deg1 = document.getElementById('deg1');
let inst1 = document.getElementById('inst1');
let pass2 = document.getElementById('pass2');
let deg2 = document.getElementById('deg2');
let inst2 = document.getElementById('inst2');
let skill1 = document.getElementById('skill1');
let skill2 = document.getElementById('skill2');
let skill3 = document.getElementById('skill3');
let lang1 = document.getElementById('lang1');
let lang2 = document.getElementById('lang2');
let intro = document.getElementById('intro');
let styear = document.getElementById('styear');
let inst = document.getElementById('inst');
let info = document.getElementById('info');
let title1 = document.getElementById('title1');
let desc1 = document.getElementById('desc1');
let title2 = document.getElementById('title2');
let desc2 = document.getElementById('desc2');
let pic = document.getElementById('pic');
let submitBtn = document.getElementById("submitBtn");
let form = document.getElementById('form');
form?.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    // Save form data to localStorage
    localStorage.setItem("name", myName.value);
    localStorage.setItem("desig", desig.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("add", add.value);
    localStorage.setItem("pass1", pass1.value);
    localStorage.setItem("deg1", deg1.value);
    localStorage.setItem("inst1", inst1.value);
    localStorage.setItem("pass2", pass2.value);
    localStorage.setItem("deg2", deg2.value);
    localStorage.setItem("inst2", inst2.value);
    localStorage.setItem("skill1", skill1.value);
    localStorage.setItem("skill2", skill2.value);
    localStorage.setItem("skill3", skill3.value);
    localStorage.setItem("lang1", lang1.value);
    localStorage.setItem("lang2", lang2.value);
    localStorage.setItem("intro", intro.value);
    localStorage.setItem("styear", styear.value);
    localStorage.setItem("inst", inst.value);
    localStorage.setItem("info", info.value);
    localStorage.setItem("title1", title1.value);
    localStorage.setItem("desc1", desc1.value);
    localStorage.setItem("title2", title2.value);
    localStorage.setItem("desc2", desc2.value);
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result;
            localStorage.setItem("profile-pic", textImg);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    window.location.href = "./resume/resume.html";
});
