function namee() {
let btn = document.getElementById('form');
btn.classList.toggle('open');
}
let select = document.getElementById('pet-select');
let forme = document.getElementById('form');
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
     // goals keper

     let inputRating = document.getElementById('Rating');
     staticPlayer[0].textContent = inputRating.value;
     let inputDiving = document.getElementById('Diving');
     staticPlayer[4].textContent = inputDiving.value;
     let inputHandling = document.getElementById('handling');
     staticPlayer[6].textContent = inputHandling.value;
     let inputKicking = document.getElementById('Kicking');
     staticPlayer[8].textContent = inputKicking.value;
     let inputReflexes = document.getElementById('Reflexes');
     staticPlayer[10].textContent = inputReflexes.value;
     let inputSpeed = document.getElementById('speed');
     staticPlayer[12].textContent = inputSpeed.value;
     let inputPositioning = document.getElementById('positioning');
     staticPlayer[14].textContent = inputPositioning.value;
     // jeours

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
    // console.log(staticPlayer[0]);

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Joueur ajouté avec succès !",
        showConfirmButton: false,
        timer: 1500,
        background: "#383939",
        color: "white" 
    });
    let button = document.getElementById('button');
    if (button.innerHTML === 'Modifier') {
        button.innerHTML = 'Ajouter';
    }
    forme.reset();
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
            position: "center",
            icon: "error",
            title: "Veuillez entrer un nom.",
            showConfirmButton: false,
            timer: 1500,
            background:"#383939",
            color: "white"
        });
        return false;
    }
    if (!image) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Veuillez entrer une URL de photo.",
            showConfirmButton: false,
            timer: 1500,
            background:"#383939",
            color: "white"
          });
        return false;
    }
    if (!position) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Veuillez sélectionner une position.",
            showConfirmButton: false,
            timer: 1500,
            background:"#383939",
            color: "white"
          });
        return false;
    }
    if (!rating || rating < 30 || rating > 100) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "euillez entrer une note entre 30 et 100.",
            showConfirmButton: false,
            timer: 1500,
            background:"#383939",
            color: "white"
          });
        return false;
    }

    for (let stat of stats) {
        if (!stat || stat < 30 || stat > 100) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Toutes les statistiques doivent être entre 30 et 100.",
                showConfirmButton: false,
                timer: 1500,
                background:"#383939",
            color: "white"
              });
            return false;
        }
    }

    return true; 
}
let playerPosition = document.getElementById("stat1");
let JoueurPosition = document.getElementById("stat2");
select.addEventListener("change", function() {
    if (select.value === 'GK') {
        JoueurPosition.style.display = 'block';
        playerPosition.style.display = 'none';
        JoueurPosition.style.display = 'flex';
    } else {
        playerPosition.style.display = 'block';
        JoueurPosition.style.display = 'none';
        playerPosition.style.display = 'flex';
    }
});

function Mymodifier(playerId) {

    let select = document.getElementById('pet-select');
    let playerCard = document.getElementById(playerId);
    select.value = playerCard.id;
    // console.log(playerCard.id);
    let playerImage = playerCard.querySelector('img');
    let inputImage = document.getElementById('imge');
    inputImage.value = playerImage.src;
    // joueur
    let staticPlayer = playerCard.querySelectorAll('p');
    let inputRaghting = document.getElementById('raete');
    inputRaghting.value = staticPlayer[0].textContent;
    let inputName = document.getElementById('name');
    inputName.value = staticPlayer[2].textContent;
    let inputPace = document.getElementById('pace');
    inputPace.value = staticPlayer[4].textContent;
    let inputShooting = document.getElementById('Shooting');
    inputShooting.value = staticPlayer[6].textContent;
    let input = document.getElementById('Passing');
    input.value = staticPlayer[8].textContent;
    let inputDribbling = document.getElementById('Dribbling');
    inputDribbling.value = staticPlayer[10].textContent;
    let inputDefending = document.getElementById('Defending');
    inputDefending.value = staticPlayer[12].textContent;
    let inputPhysical = document.getElementById('Physical');
    inputPhysical.value = staticPlayer[14].textContent;
    // goals keeper
    let inputRating = document.getElementById('Rating');
    inputRating.value = staticPlayer[0].textContent;
    let inputDiving = document.getElementById('Diving');
    inputDiving.value = staticPlayer[4].textContent;
    let inputHandling = document.getElementById('handling');
    inputHandling.value = staticPlayer[6].textContent;
    let inputKicking = document.getElementById('Kicking');
    inputKicking.value = staticPlayer[8].textContent;
    let inputReflexes = document.getElementById('Reflexes');
    inputReflexes.value = staticPlayer[10].textContent;
    let inputSpeed = document.getElementById('speed');
    inputSpeed.value = staticPlayer[12].textContent;
    let inputPositioning = document.getElementById('positioning');
    inputPositioning.value = staticPlayer[14].textContent;

    let button = document.getElementById('button');
    if (button.innerHTML === 'Ajouter') {
        button.innerHTML = 'Modifier';
    }
    // button.setAttribute('onclick' , 'modif()');
}

function suprrimer(playerId) {
     
    let select = document.getElementById('pet-select');
    let playerCard = document.getElementById(playerId);
    select.value = playerCard.id;
    let playerImage = playerCard.querySelector('img');
    let inputImage = document.getElementById('imge');
    playerImage.removeAttribute("src");
    console.log(playerImage);
    let staticPlayer = playerCard.querySelectorAll('p');
     // goals keper

     let inputRating = document.getElementById('Rating');
     staticPlayer[0].textContent = inputRating.textContent='--';
     let inputDiving = document.getElementById('Diving');
     staticPlayer[4].textContent = inputDiving.textContent='--';
     let inputHandling = document.getElementById('handling');
     staticPlayer[6].textContent = inputHandling.textContent='--';
     let inputKicking = document.getElementById('Kicking');
     staticPlayer[8].textContent = inputKicking.textContent='--';
     let inputReflexes = document.getElementById('Reflexes');
     staticPlayer[10].textContent = inputReflexes.textContent='--';
     let inputSpeed = document.getElementById('speed');
     staticPlayer[12].textContent = inputSpeed.textContent='';
     let inputPositioning = document.getElementById('positioning');
     staticPlayer[14].textContent = inputPositioning.textContent='--';
     // jeours

    let inputRaghting = document.getElementById('raete');
    staticPlayer[0].textContent = inputRaghting.textContent='--';
    let inputName = document.getElementById('name');
    staticPlayer[2].textContent = inputName.textContent='--';
    let inputPace = document.getElementById('pace');
    staticPlayer[4].textContent = inputPace.textContent='--';
    let inputShooting = document.getElementById('Shooting');
    staticPlayer[6].textContent = inputShooting.textContent='--';
    let input = document.getElementById('Passing');
    staticPlayer[8].textContent = input.textContent='--';
    let inputDribbling = document.getElementById('Dribbling');
    staticPlayer[10].textContent = inputDribbling.textContent='--';
    let inputDefending = document.getElementById('Defending');
    staticPlayer[12].textContent = inputDefending.textContent='--';
    let inputPhysical = document.getElementById('Physical');
    staticPlayer[14].textContent = inputPhysical.textContent='--';
}









// function suprrimer(playerId) {
//     let playerCard = document.getElementById(playerId);
//     if (playerCard) {
//         playerCard.remove();
//         Swal.fire({
//             position: "center",
//             icon: "success",
//             title: "Joueur supprimé avec succès !",
//             showConfirmButton: false,
//             timer: 1500,
//             background: "#383939",
//             color: "white"
//         });
//     } else {
//         Swal.fire({
//             position: "center",
//             icon: "error",
//             title: "Impossible de trouver le joueur.",
//             showConfirmButton: false,
//             timer: 1500,
//             background: "#383939",
//             color: "white"
//         });
//     }
// }





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