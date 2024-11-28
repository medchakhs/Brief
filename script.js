function namee() {
let btn = document.getElementById('form');
btn.classList.toggle('open');
}
let select = document.getElementById('pet-select');
function ajout(){
    // console.log('select.value', select.value);
    if (!validation()) {
        return; 
    }
    let lw = document.getElementById(`${select.value}`);
    let playerImage = lw.querySelector('img');
    let inputImage = document.getElementById('imge');
    playerImage.setAttribute('src',inputImage.value);
    let staticPlayer = lw.querySelectorAll('p');
    let inputRaghting = document.getElementById('raete');
    staticPlayer[0].textContent = inputRaghting.value;
    let inputName = document.getElementById('name');
    staticPlayer[2].textContent = inputName.value;
    let inputPace = document.getElementById('pace');
    staticPlayer[4].textContent = inputPace.value;
    let inputShooting = document.getElementById('Shooting');
    staticPlayer[6].textContent = inputShooting.value;
    let input = document.getElementById('Passing');
    staticPlayer[8].textContent = input.value;
    let inputDribbling = document.getElementById('Dribbling');
    staticPlayer[10].textContent = inputDribbling.value;
    let inputDefending = document.getElementById('Defending');
    staticPlayer[12].textContent = inputDefending.value;
    let inputPhysical = document.getElementById('Physical');
    staticPlayer[14].textContent = inputPhysical.value;
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Joueur ajouté avec succès !",
        showConfirmButton: false,
        timer: 1500
      });
}


function validation() {
    const name = document.getElementById("name").value.trim();
    const image = document.getElementById("imge").value.trim();
    const position = document.getElementById("pet-select").value;
    const rating = document.getElementById("raete").value.trim();
    const stats = [
        document.getElementById("pace").value.trim(),
        document.getElementById("Shooting").value.trim(),
        document.getElementById("Passing").value.trim(),
        document.getElementById("Dribbling").value.trim(),
        document.getElementById("Defending").value.trim(),
        document.getElementById("Physical").value.trim(),
    ];

    if (!name) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Veuillez entrer un nom.",
            showConfirmButton: false,
            timer: 1500
          });
        return false;
    }
    if (!image) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Veuillez entrer une URL de photo.",
            showConfirmButton: false,
            timer: 1500
          });
        return false;
    }
    if (!position) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Veuillez sélectionner une position.",
            showConfirmButton: false,
            timer: 1500
          });
        return false;
    }
    if (!rating || rating < 30 || rating > 100) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "euillez entrer une note entre 30 et 100.",
            showConfirmButton: false,
            timer: 1500
          });
        return false;
    }

    for (let stat of stats) {
        if (!stat || stat < 30 || stat > 100) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Toutes les statistiques doivent être entre 30 et 100.",
                showConfirmButton: false,
                timer: 1500
              });
            return false;
        }
    }

    return true; 
}





// const divParent = document.getElementById("ST");
// const divPlayer = document.createElement("div");
// const divName = document.createElement("div");
// const divRating = document.createElement("div");
// const divStatistique = document.createElement("div");
// divParent.appendChild(divPlayer);
// divParent.appendChild(divName);
// divParent.appendChild(divRating);
// divParent.appendChild(divStatistique);

// const img = document.createElement("img");
// divPlayer.appendChild(img);
// img.setAttribute('src', );//img.value dyal input photo

// const rate = document.createElement("p");
// const position = document.createElement("p");
// divRating.appendChild(rate);
// divRating.appendChild(position);

// const pName = document.createElement("p")
// divName.appendChild(pName)