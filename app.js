const getAdvice = async () => {
    const res = await axios.get("https://api.adviceslip.com/advice");
    console.log(res)
}

getAdvice()