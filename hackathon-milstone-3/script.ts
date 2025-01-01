let myName:any = document.getElementById('name');
let desig:any = document.getElementById('desig');
let phone:any = document.getElementById('phone');
let email:any = document.getElementById('email');
let add:any = document.getElementById('add');
let pass1:any = document.getElementById('pass1');
let deg1:any = document.getElementById('deg1');
let inst1:any = document.getElementById('inst1');
let pass2:any = document.getElementById('pass2');
let deg2:any = document.getElementById('deg2');
let inst2:any = document.getElementById('inst2'); 
let skill1:any = document.getElementById('skill1');
let skill2:any = document.getElementById('skill2');
let skill3:any = document.getElementById('skill3');
let lang1:any = document.getElementById('lang1');
let lang2:any = document.getElementById('lang2');
let intro:any = document.getElementById('intro');
let styear:any = document.getElementById('styear');
let inst:any = document.getElementById('inst');
let info:any = document.getElementById('info');
let title1:any = document.getElementById('title1');
let desc1:any = document.getElementById('desc1');
let title2:any = document.getElementById('title2');
let desc2:any = document.getElementById('desc2'); 
let pic:any = document.getElementById('pic'); 


let submitBtn = document.getElementById("submitBtn") 
let form = document.getElementById('form') 


    form?.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload

        // Save form data to localStorage
        localStorage.setItem("name", myName.value );
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

        if (pic.files && pic.files[0]){
        let reader = new FileReader()
        reader.addEventListener("load", ()=>{
        let textImg:any = reader.result
        localStorage.setItem("profile-pic", textImg)
        })
        reader.readAsDataURL(pic.files[0])
        }


        window.location.href="./resume/resume.html"
    });