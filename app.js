const dice = document.querySelector(".dice");
const diceBg = document.querySelector("svg");
const p = document.querySelector("#advice-text");
const h1 = document.querySelector("#advice-id");

// FETCHING DATA
const getAdvice = async () => {
    let res = await axios.get("https://api.adviceslip.com/advice");
    return res.data.slip;
}

 // CLICK TO DICE
dice.addEventListener("click", async function(){
    let adviceGetter = await getAdvice();
    h1.innerHTML = "";
    h1.textContent = `"Advice ${adviceGetter.id}"`;

    p.innerHTML = "";
    p.textContent = `"${adviceGetter.advice}"`;
 });

// TREBALO BY PREROBIT
diceBg.addEventListener("click", async function(){
    let adviceGetter = await getAdvice();
    h1.innerHTML = "";
    h1.textContent = `"Advice ${adviceGetter.id}"`;

    p.innerHTML = "";
    p.textContent = `"${adviceGetter.advice}"`;
});
