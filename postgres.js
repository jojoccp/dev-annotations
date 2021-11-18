let classe = document.querySelector('.wraper')
classe.style.display = 'none'


function showQuery(param) {
    const event = new CustomEvent("alteraQuery", {
        detail: { param }
    });

    document.dispatchEvent(event);
}


document.addEventListener("alteraQuery", (event) => {
    const param = event.detail.param;

    document.querySelectorAll('.wrapper').forEach(function(el) {
        el.style.display = 'none';
    });
    document.getElementById(param).style.display = 'block';
});