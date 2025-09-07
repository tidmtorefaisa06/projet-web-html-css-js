<script>
let form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  let nom = document.querySelector("input[type='text']").value;
  let email = document.querySelector("input[type='email']").value;
  let message = document.querySelector("textarea").value;

  let confirmation = document.getElementById("confirmation");
  if (!confirmation) {
    confirmation = document.createElement("p");
    confirmation.id = "confirmation";
    form.appendChild(confirmation);
  }


  if (nom === "") {
    confirmation.textContent = "Le nom est obligatoire.";
    confirmation.style.color = "red";
    return;
  }

  
  if (email.indexOf("@") === -1) {
    confirmation.textContent = " Email invalide.";
    confirmation.style.color = "red";
    return;
  }

 
  if (message.length < 10) {
    confirmation.textContent = " Le message doit avoir au moins 10 caractères.";
    confirmation.style.color = "red";
    return;
  }


  confirmation.textContent = " Message envoyé !";
  confirmation.style.color = "green";

  form.reset(); 
});


let btnTheme = document.createElement("button");
btnTheme.textContent = "Changer le thème";
document.body.appendChild(btnTheme);

btnTheme.addEventListener("click", function() {
  if (document.body.style.background === "black") {
    document.body.style.background = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.background = "black";
    document.body.style.color = "white";
  }
});


let btnTop = document.createElement("button");
btnTop.textContent = "↑ Haut";
btnTop.style.position = "fixed";
btnTop.style.bottom = "20px";
btnTop.style.right = "20px";
btnTop.style.display = "none";
document.body.appendChild(btnTop);

window.addEventListener("scroll", function() {
  if (window.scrollY > 100) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", function() {
  window.scrollTo(0, 0);
});
</script>