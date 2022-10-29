const dice = document.querySelector(".dice");
const p = document.querySelector("#advice-text");

// FETCHING DATA
const getAdvice = async () => {
    let res = await axios.get("https://api.adviceslip.com/advice");
    return res.data.slip.advice;
}

 // CLICK TO DICE
 dice.addEventListener("click", async function(){
    let adviceGetter = await getAdvice();
    p.innerHTML = "";
    p.textContent = `"${adviceGetter}"`;
 });
