const MDCTextField = mdc.textField.MDCTextField;
const textFields = [].map.call(
  document.querySelectorAll(".mdc-text-field"),
  (el) => {
    return new MDCTextField(el);
  }
);
const image = document.querySelector(".wave");
let i = 1;
setInterval(function () {
  image.setAttribute("src", `../images/Foto(${i}).png`);
  i = i === 3 ? (i = 0) : i + 1;
}, 3000);

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const tfEmail = textFields[0];
  const tfPassword = textFields[1];
  if (validEmail(tfEmail.value) && validPassword(tfPassword.value)) {
    console.log("send");
    window.location.href = "main.html";
  }
});

const validEmail = (value) => {
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regexEmail.test(value)) {
    document.querySelector(".email").classList.add("mdc-text-field--invalid");
    return false;
  } else {
    document
      .querySelector(".email")
      .classList.remove("mdc-text-field--invalid");
    return true;
  }
};

const validPassword = (value) => {
  if (value === "") {
    document.querySelector(".pass").classList.add("mdc-text-field--invalid");
    return false;
  } else {
    document.querySelector(".pass").classList.remove("mdc-text-field--invalid");
    return true
  }
};

document.querySelector(".show").addEventListener("click", (e) => {
  e.preventDefault();
  const refICon = document.querySelector(".icon");
  const refInput = document.querySelector(".input-pass");
  let iconState = refICon.classList[1];
  switch (iconState) {
    case "eye-close":
      refICon.classList.replace("eye-close", "eye-open");
      refICon.setAttribute("src", "../images/Group 5111.svg");
      refInput.setAttribute("type", "text");
      break;
    case "eye-open":
      refICon.classList.replace("eye-open", "eye-close");
      refICon.setAttribute("src", "../images/Group 5109.svg");
      refInput.setAttribute("type", "password");
      break;

    default:
      break;
  }
});
