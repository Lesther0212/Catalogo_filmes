const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

//Listagem dos modelos
modeloFilmes.map((item, index) => {
    let modeloItem = c('.movie .modelo-item').cloneNode(true);

    modeloItem.querySelector('.modelo-item img').src = item.img;
    modeloItem.querySelector('.modelo-item-name').innerHTML = item.name;
    modeloItem.querySelector(".a-link").href = item.link;

    c('.modelo-area').append(modeloItem);
});