let videoButton = document.querySelector(".section__videoButton");
let youtubeHidden = document.querySelector(".section__videoButton--videoHidden");

videoButton.addEventListener("click", () => {
    youtubeHidden.classList.toggle("section__videoButton--videoVisible");

 if (youtubeHidden.classList.contains("section__videoButton--videoVisible")) {
    videoButton.innerHTML = "My first video<br>(click to close)"
}
else { videoButton.innerHTML = "My first video<br>(click to see)" }})