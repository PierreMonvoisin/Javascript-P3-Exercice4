document.getElementById("button").onclick = function() {check()};

function check() {
  let password1 = document.getElementById("password").value;
  let confirm = document.getElementById("confirmPassword").value;

  if (password1 == confirm) {
    document.getElementById("password").style.border = "2px solid green";
    document.getElementById("confirmPassword").style.border = "2px solid green";
    alert("Mot de passe enregistré !");
  } else {
    document.getElementById("password").style.border = "2px solid red";
    document.getElementById("confirmPassword").style.border = "2px solid red";
    alert("Mot de passe incorrect");
  }

  document.getElementById("password").value = '';
  document.getElementById("confirmPassword").value = '';
}
