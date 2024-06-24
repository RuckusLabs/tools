function getTotal() {
  let equals = document.querySelector('#equals');
  let rate = document.querySelector('#rate').value;
  let hours = document.querySelector('#hours').value;
  let minutes = document.querySelector('#minutes').value;
  let seconds = document.querySelector('#seconds').value;

  let total = ((hours * rate) + (minutes / 60 * rate) + (((seconds / 60) / 60) * rate))

  total = total.toFixed(2);
  equals.innerHTML = `$${total}`;
}

function buttonClick(event) {
  event.preventDefault();
  getTotal();
}