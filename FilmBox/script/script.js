let films = {
    '5': {
        'img': '../img/posters/primal.jpeg',
        'name': 'Звериная ярость',
        'year': '2019',
        'country': 'США',
        'genre': 'боевик',
        'director': 'Ник Пауэлл',

    },
    '6': {
        'img': '../img/posters/aviator.jpeg',
        'name': 'Авиатор',
        'year': '2004',
        'country': 'США',
        'genre': 'исторический',
        'director': 'Мартин Скорсезе',

    },
};

let out = '';

for (let key in films) {
    out += `<img src="${films[key].img}"`;
    out += `${films[key].name}<br>`;
    out += `${films[key].year}<br>`;
    out += `${films[key].country}<br>`;
    out += `${films[key].genre}<br>`;
    out += `${films[key].director}<br>`;

}

document.getElementById('out').innerHTML = out;