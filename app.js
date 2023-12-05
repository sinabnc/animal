const audio1=new Audio('./kate.mp3')
const audio2=new Audio('./teenage.mp3')
const audio3=new Audio('./ed.mp3')
const audio4=new Audio('./senorita.mp3')
const audio5=new Audio('./wake.mp3')
const audio6=new Audio('./sooraj.mp4')
const audio7=new Audio('./urva.mp3')
const audio8=new Audio('./good.mp3')


const btn1=document.getElementById("song1")
const btn2=document.getElementById("song2")
const btn3=document.getElementById("song3")
const btn4=document.getElementById("song4")
const btn5=document.getElementById("song5")
const btn6=document.getElementById("song6")
const btn7=document.getElementById("song7")
const btn8=document.getElementById("song8")



btn1.addEventListener("click",()=>{
    audio1.play()
})
btn2.addEventListener("click",()=>{
    audio2.play()
})
btn3.addEventListener("click",()=>{
    audio3.play()
})
btn4.addEventListener("click",()=>{
    audio4.play()
})
btn5.addEventListener("click",()=>{
    audio5.play()
})
btn6.addEventListener("click",()=>{
    audio6.play()
})
btn7.addEventListener("click",()=>{
    audio7.play()
})
btn8.addEventListener("click",()=>{
    audio8.play()
})


// document.querySelector("#search").addEventListener("click", Poki);


// function Poki(e) {
//     const name = document.querySelector("#nameBox").value;
   
  
//     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//       .then((response) => response.json())
//       .then((data) => {
//         document.querySelector("pokemonBox").innerHTML = `
//         <div>
//           <img
//             src="${data.sprites.other["official-artwork"].front_default}"
//             alt="Pokemon name"
//           />
//         </div>
//         <div class="pokemonInfos">
//           <h1>${data.name}</h3>
//           <p>Weight: ${data.weight}</p>
//         </div>`;
//       })
//       .catch((err) => {
//         document.querySelector(".pokemonBox").innerHTML = `
//         <h4>not found</h4>
//         `;
//         console.log("Pokemon not found", err);
//       });
  
//     e.preventDefault();
//   }