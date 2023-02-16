const data = document.querySelector("#date");

const date = new Date();

const formatter = Intl.DateTimeFormat('pt-BR', {
    weekday: "long",
    year: "numeric",
    month: "short",
    day:"numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
});

data.innerHTML = formatter.format(date);

/**
 * @fonte
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 */

function recarregarAPagina(){
    window.location.reload(true);}