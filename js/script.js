{ /* console welcome message */
    const welcome = () => {
        console.log("Witam na mojej stronie")
    }
    welcome();
};

{ /* video button */
    const youtubeHidden = document.querySelector(".section__videoButton--videoHidden");
    const videoButton = document.querySelector(".section__videoButton");

    const onChangeVisibilityButton = () => {
        youtubeHidden.classList.toggle("section__videoButton--videoVisible");
    }

    const onChangeVideoButtonText = () => {
        videoButton.innerHTML = youtubeHidden.classList.contains("section__videoButton--videoVisible") ? "My first video<br>(click to close)" : "My first video<br>(click to see)"
    }
    
    
    videoButton.addEventListener("click", () => {
    onChangeVisibilityButton();
    onChangeVideoButtonText();
    })
};