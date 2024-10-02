const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation",
        pic: "images\\stella.png"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi",
        pic: "images\\cody.png"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian",
        pic: "images\\mango.png"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python",
        pic: "images\\lucy.png"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog",
        pic: "images\\buhmie.png"
    }
];

const showInfo = () => {
    let petNumber = document.querySelector("#petNum").value;
    petNumber = parseInt(petNumber) - 1;
    let selectedPetInfo = document.querySelector(".selectedPetInfo");
    let pet = petsData[petNumber];
    selectedPetInfo.textContent = `${pet.petName} is a ${pet.breed} and is ${pet.age} years old.`;
    let petPic = document.querySelector(".selectedPetPic");
    petPic.src = pet.pic;
}


let petsInfo = document.querySelector(".petsInfo");
// Add content by modifying the textContent property
petsInfo.textContent = `Welcome to our newest pet, ${petsData[petsData.length - 1].petName} the ${petsData[petsData.length - 1].breed}`;

let petsList = document.querySelector(".petsList");

let allPetsList = `<ol>`;
petsData.forEach((pet) => {
allPetsList += `<li> ${pet.petName} the ${pet.breed}</li>`;});
allPetsList += `</ol>`;

petsList.innerHTML = allPetsList;