{
    const welcome = () => {
        console.log("Witam na mojej stronie")
    }
    welcome();
};

{
    const youtubeHidden = document.querySelector(".section__iframe");
    const videoButton = document.querySelector(".section__videoButton");

    const onChangeVisibilityButton = () => {
        youtubeHidden.classList.toggle("section__iframe--Visible");
    }

    const onChangeVideoButtonText = () => {
        videoButton.innerHTML = youtubeHidden.classList.contains("section__iframe--Visible") ? "My first video<br>(click to close)" : "My first video<br>(click to see)"
    }
    
    const button = () => {
        videoButton.addEventListener("click", () => {
            onChangeVisibilityButton();
            onChangeVideoButtonText();
            })
    }
    button()
};