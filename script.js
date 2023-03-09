function time() {
    var time = new Date();
    document.querySelector(".watch").innerHTML = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}
setInterval(time, 1000); 