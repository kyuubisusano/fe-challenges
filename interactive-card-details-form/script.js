let d_name, d_cn, d_mm, d_yy, d_cvv;
let i_name, i_cn, i_mm, i_yy, i_cvv;
let e_name, e_cn, e_date, e_cvv;

let f_wrap, c_wrap, f_ctrl;

function checkValue(str, max) {
  if (str.charAt(0) !== '0' || str == '00') {
    var num = parseInt(str);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
  };
  console.log(str);
  return str;
};
function hasAlphabet(str) {
  var regex = /[a-zA-Z]/g;
  return regex.test(str);
}

function validForm() {
  var f = true;
   if( i_name.value == "" )
   {
    e_name.classList.remove("hidden");
    f = false;
   }
   if( i_cn.value == "" ){
    e_cn.classList.remove("hidden");
    f = false;
   }
   else if( i_cn.value.replace(/\s/g,'').length < 16 ){
    e_cn.textContent = "Invalid number"
    e_cn.classList.remove("hidden");
    f = false;
   }
   else if( hasAlphabet(i_cn.value)){
    e_cn.textContent = "Wrong format, numbers only"
    e_cn.classList.remove("hidden");
    f = false;
   }
   if( i_mm.value == "" || i_yy.validForm == "" ){
    e_date.classList.remove("hidden");
    f = false;
   }
   if( i_cvv.value == ""){
    e_cvv.classList.remove("hidden");
    f = false;
   }
   return f;
}

function handleSubmit() {
  if( validForm() ) {
    f_wrap.classList.add("hidden");
    c_wrap.classList.remove("hidden");
  }
  else{
    console.log("error")
  }
}

function handleContinue() {
  f_ctrl.reset();
  c_wrap.classList.add("hidden");
  f_wrap.classList.remove("hidden");
}

window.onload = function () {

  d_name = document.getElementById("d-name");
  d_cn = document.getElementById("d-cn");
  d_mm = document.getElementById("d-mm");
  d_yy = document.getElementById("d-yy");
  d_cvv = document.getElementById("d-cvv");

  i_name = document.getElementById("i-name");
  i_cn = document.getElementById("i-cn");
  i_mm = document.getElementById("i-mm");
  i_yy = document.getElementById("i-yy");
  i_cvv = document.getElementById("i-cvv");

  e_name = document.getElementById("e-name");
  e_cn = document.getElementById("e-cn");
  e_date = document.getElementById("e-date");
  e_cvv = document.getElementById("e-cvv");
  
  f_wrap = document.getElementById("f-wrap");
  c_wrap = document.getElementById("c-wrap");
  f_ctrl = document.getElementById("f-ctrl");
  
  
  i_name.addEventListener("input", (event) => {
    d_name.textContent = event.target.value;
  })

  i_cn.addEventListener("input", (event) => {
    var target = event.target;
    position = target.selectionEnd;
    length = target.value.length;
    target.value.toUpperCase();
    if(length <=19) {
      target.value = target.value.replace(/[^\dA-Za-z]/g, '').replace(/(.{4})/g, '$1 ').trim().toUpperCase();
      d_cn.textContent = target.value;
      target.selectionEnd = position += ((target.value.charAt(position - 1) === ' ' && target.value.charAt(length - 1) === ' ' && length !== target.value.length) ? 1 : 0);}
    else {
      target.value = target.value.slice(0, 19);
    }
  })

  i_mm.addEventListener("input", (event) => {
    var str = event.target.value;
    str = checkValue(str, 12);
    d_mm.textContent = str;
    event.target.value = str;
  })

  i_yy.addEventListener("input", (event) => {
    var str = event.target.value;
    str = checkValue(str, 31);
    d_yy.textContent = str;
    event.target.value = str;
  })

  i_cvv.addEventListener("input", (event) => {
    d_cvv.textContent = event.target.value
  })
}

// if (i_name) {
//     console.log("0fck");
//     i_name.addEventListener("change", (event) => {
//         alert(event.target.value)
//         d_name.textContent = event.target.value;
//       })
//   }
// else {
//     console.log("fck");
// }
