document.addEventListener("DOMContentLoaded", () => {
  const $select = document.getElementById("s_product");
  const $plazos = document.getElementById("txt_plazo");
  const $extras = document.querySelectorAll("#pres-check input[type=checkbox]");
  const $total = document.getElementById("presupuesto_total");
  const $form = document.getElementById("form-presupuesto");

  // input text
  const $txt_name = document.getElementById("txt_name");
  const $txt_lastname = document.getElementById("txt_lastname");
  const $txt_number = document.getElementById("txt_number");
  const $txt_email = document.getElementById("txt_email");
  $total.value = "0€";
  $form.addEventListener("submit", presupuestoSubmit);
  $select.addEventListener("change", optionSelect);
  $plazos.addEventListener("change", optionSelect);
  $extras.forEach((checkbox) =>
    checkbox.addEventListener("change", optionSelect)
  );

  function optionSelect() {
    let option = parseFloat($select.value);
    let extra = 0;
    $extras.forEach((checkbox) => {
      if (checkbox.checked) {
        extra += parseFloat(checkbox.value);
      }
    });
    let plazosValue = parseInt($plazos.value);
    if (isNaN(plazosValue) || plazosValue === 0) {
      $total.value = `${option + extra}€`;
    } else {
      const total = (option + extra) / plazosValue;
      $total.value = `${total.toFixed(2)}€`;
    }
  }

  function validarDatos() {
    const name = document.getElementById("txt_name").value.trim();
    const lastname = document.getElementById("txt_lastname").value.trim();
    const number = document.getElementById("txt_number").value.trim();
    const email = document.getElementById("txt_email").value.trim();
    const $privacy = document.getElementById("privacy");
    const $lbl_privacy = document.getElementById('lbl_privacy')

    const regexName = /^[a-zA-Z]{1,15}$/;
    const regexLastName = /^[a-zA-Z]{1,40}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexNumber = /^[0-9]{1,9}$/;

    if (!$privacy.checked) {
      $lbl_privacy.classList.add("input-no-valido");
      return false;
    }
    $privacy.classList.remove("input-no-valido");

    if (!regexName.test(name)) {
      $txt_name.classList.add("input-no-valido");
      return false;
    }
    $txt_name.classList.remove("input-no-valido");

    if (!regexLastName.test(lastname)) {
      $txt_lastname.classList.add("input-no-valido");
      return false;
    }
    $txt_lastname.classList.remove("input-no-valido");

    if (!regexNumber.test(number)) {
      $txt_number.classList.add("input-no-valido");
      return false;
    }
    $txt_number.classList.remove("input-no-valido");

    if (!regexEmail.test(email)) {
      $txt_email.classList.add("input-no-valido");
      return false;
    }
    $txt_email.classList.remove("input-no-valido");

    return true;
  }

  function presupuestoSubmit(event) {
    event.preventDefault();
    if (validarDatos()) {
      console.log("Los datos son válidos.");
      alert('Se envió el formulario!')
    } else {
      console.log("Los datos no son válidos.");
    }
  }
});
