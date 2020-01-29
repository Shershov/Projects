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
    '7': {
        'img': '../img/posters/Wasabi-1.jpeg',
        'name': 'Васаби',
        'year': '2001',
        'country': 'Франция',
        'genre': 'комедия',
        'director': 'Жерар Кравчик',
    },
    '8': {
        'img': '../img/posters/Taxi-4.jpeg',
        'name': 'Такси-4',
        'year': '2007',
        'country': 'Франция',
        'genre': 'комедия',
        'director': 'Жерар Кравчик',
    },
    '9': {
        'img': '../img/posters/Unforgiven.jpeg',
        'name': 'Непрощенный',
        'year': '2018',
        'country': 'Россия',
        'genre': 'Драма',
        'director': 'Сарик Андреасян',
    },
    '10': {
        'img': '../img/posters/Konvert.jpeg',
        'name': 'Конверт',
        'year': '2017',
        'country': 'Россия',
        'genre': 'Ужасы',
        'director': 'Владимир Марков',
    },
    '11': {
        'img': '../img/posters/Country-03.jpeg',
        'name': 'Страна 03',
        'year': '2015',
        'country': 'Россия',
        'genre': 'Комедия',
        'director': 'Василий Сигарев',
    },
};

let out = '';

for (let key in films) {
    out += `<div class="film__card">`;
    out += `<a class="poster" href="">`;
    out += `<img src="${films[key].img}" alt="">`;
    out += `<div class="film__descr">`;
    out += `<h3>${films[key].name} </h3>`;
    out += `<span>${films[key].year}, </span>`;
    out += `<span>${films[key].country}, </span>`;
    out += `<span>${films[key].genre}, </span>`;
    out += `<span>${films[key].director}</span>`;
    out += `</div>`;
    out += `</a>`;
    out += `</div>`;

}

let div = document.getElementById('films');
div.innerHTML = div.innerHTML + out;