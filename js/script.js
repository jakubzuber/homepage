{
    const welcome = () => {
        console.log("Witam na mojej stronie")
    }
    welcome();
};
{ 
    const onChangeVisibilityAndTextButton = () => {
        const youtubeHidden = document.querySelector(".section__videoButton--videoHidden");
        youtubeHidden.classList.toggle("section__videoButton--videoVisible");
        videoButton.innerHTML = youtubeHidden.classList.contains("section__videoButton--videoVisible") ? "My first video<br>(click to close)" : "My first video<br>(click to see)"
    }
    
    const videoButton = document.querySelector(".section__videoButton");
    videoButton.addEventListener("click", onChangeVisibilityAndTextButton);
};