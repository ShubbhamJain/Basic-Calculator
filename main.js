calculate_button = document.querySelector('#calbutton');
calculate_button.addEventListener('click',calculation);
let history = document.querySelector('#history_img');
let historyarr = [];

history.addEventListener('click',function () {
  let divelement = document.querySelector('#listhistory');
  divelement.classList.add('listhistory');
  let h4 = document.createElement('h4');
  h4.style.marginBottom = '0px';
  h4.appendChild(document.createTextNode(historyarr));
  if (historyarr.length == 0) {
    divelement.style.display = 'none';

  }
  else {
    divelement.appendChild(h4);
    divelement.style.display = 'block';
  }
  // for (var i = 0; i < historyarr.length; i++) {
  //
  // }
});

function calculation() {
  let value1 = parseFloat(document.querySelector('#value_1').value);
  let value2 = parseFloat(document.querySelector('#value_2').value);
  let op = document.querySelector('#operator').value;
  let msgdiv = document.querySelector('#msgdiv');
  let calculate;

  if (value1 === 0 || value2 === 0 || op === 'no') {
    let h6 = document.createElement('h6');
    h6.classList.add('added');
    h6.innerText = "Any one of the values were not entered";
    h6.style.marginTop = '0px';
    msgdiv.style.display = 'block';
    msgdiv.appendChild(h6);
    setTimeout(() => {
      msgdiv.classList.remove('added');
      msgdiv.innerHTML = "";
    },2000);
  }
  else {
    if (op === "Add") {
      calculate = value1 + value2;
      historyarr.push(calculate);
    }
    else if (op === "Sub") {
      calculate = value1 - value2;
      historyarr.push(calculate);
    }
    else if (op === "Mul") {
      calculate = value1 * value2;
      historyarr.push(calculate);
    }
    else if (op === "Div") {
      calculate = value1/value2;
      historyarr.push(calculate);
    }
    else {
      calculate = value1%value2;
      historyarr.push(calculate);
    }
    document.querySelector('#result').value = calculate;
  }
}
