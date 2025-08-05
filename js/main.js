const canvas = document.getElementById('canvas');
let btnLeft = document.getElementById('move-left');
let btnRight = document.getElementById('move-right');
console.log(window.innerHeight)
const game = new Lumberjack({
    el: canvas,
    maxWidth: 600,
    maxHeight: window.innerHeight - 150,
    btnLeft, btnRight
});
game.init()
game.render();
function showNoCodeMessage() {
    const msg = document.getElementById("no-code-message");
    msg.style.display = "block";

    const audio = new Audio("assets/sound/no-code.mp3"); // pastikan file ini ada
    audio.play();

    setTimeout(() => {
        msg.style.display = "none";
    }, 2000);
}
showNoCodeMessage();
document.getElementById("request-code").addEventListener("click", () => {
    alert("Requesting code from ETH OS...");
    
    setTimeout(() => {
        alert("✅ Access Granted!\nYou received: 0xEThOS_code_7f3...");
    }, 1500);
});
