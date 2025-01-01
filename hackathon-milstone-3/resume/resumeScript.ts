window.addEventListener("load", () => {
    
  let name = localStorage.getItem("name");
  let desig = localStorage.getItem("desig");
  let phone = localStorage.getItem("phone");
  let email = localStorage.getItem("email");
  let add = localStorage.getItem("add");
  let pass1 = localStorage.getItem("pass1");
  let deg1 = localStorage.getItem("deg1");
  let inst1 = localStorage.getItem("inst1");
  let pass2 = localStorage.getItem("pass2");
  let deg2 = localStorage.getItem("deg2");
  let inst2 = localStorage.getItem("inst2");
  let skill1 = localStorage.getItem("skill1");
  let skill2 = localStorage.getItem("skill2");
  let skill3 = localStorage.getItem("skill3");
  let lang1 = localStorage.getItem("lang1");
  let lang2 = localStorage.getItem("lang2");
  let intro = localStorage.getItem("intro");
  let styear = localStorage.getItem("styear");
  let inst = localStorage.getItem("inst");
  let info = localStorage.getItem("info");
  let title1 = localStorage.getItem("title1");
  let desc1 = localStorage.getItem("desc1");
  let title2 = localStorage.getItem("title2");
  let desc2 = localStorage.getItem("desc2");
  let picture = localStorage.getItem("profile-pic")


  let resName: any = document.getElementById('resName')
  resName.textContent = name

  let resDesig: any = document.getElementById('resDesig')
  resDesig.textContent = desig 

  let resPhone: any = document.getElementById('resPhone')
  resPhone.textContent = phone 

  let resEmail: any = document.getElementById('resEmail')
  resEmail.textContent = email

  let resAdd: any = document.getElementById('resAdd')
  resAdd.textContent = add 

  let resPass1: any = document.getElementById('resPass1')
  resPass1.textContent = pass1

  let resDeg1: any = document.getElementById('resDeg1')
  resDeg1.textContent = deg1

  let resInst1: any = document.getElementById('resInst1')
  resInst1.textContent = inst1

  let resPass2: any = document.getElementById('resPass2')
  resPass2.textContent = pass2

  let resDeg2: any = document.getElementById('resDeg2')
  resDeg2.textContent = deg2

  let resInst2: any = document.getElementById('resInst2')
  resInst2.textContent = inst2

  let resSkill1: any = document.getElementById('resSkill1')
  resSkill1.textContent = skill1

  let resSkill2: any = document.getElementById('resSkill2')
  resSkill2.textContent = skill2

  let resSkill3: any = document.getElementById('resSkill3')
  resSkill3.textContent = skill3

  let resLang1: any = document.getElementById('resLang1')
  resLang1.textContent = lang1
  
  let resLang2: any = document.getElementById('resLang2')
  resLang2.textContent = lang2

  let resIntro: any = document.getElementById('resIntro')
  resIntro.textContent = intro

  let resStyear: any = document.getElementById('resStyear')
  resStyear.textContent = styear

  let resInst: any = document.getElementById('resInst')
  resInst.textContent = inst

  let resInfo: any = document.getElementById('resInfo')
  resInfo.textContent = info

  let resTitle1: any = document.getElementById('resTitle1')
  resTitle1.textContent = title1

  let resDesc1: any = document.getElementById('resDesc1')
  resDesc1.textContent = desc1

  let resTitle2: any = document.getElementById('resTitle2')
  resTitle2.textContent = title2

  let resDesc2: any = document.getElementById('resDesc2')
  resDesc2.textContent = desc2

  let resImg: any = document.getElementById('resImg')
  resImg.src = picture


});




//print buton
let print_btn = document.getElementById("print_btn");

print_btn?.addEventListener("click", () => {
  window.print();
});
