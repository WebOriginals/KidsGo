//массив из рейтингов
const ratings = document.querySelectorAll('.rating');

if( ratings.length > 0){
    initRatings();
}

//Основная функция
function initRatings() {
    let ratingActive,ratingValue;
    //Бегаем по всем рейтингам на странице

    for(let index = 0; index < ratings.length; index ++){
        const rating = ratings[index];
        initRating(rating);

    }

    //Инициализируем конкрентый рейтинг
    function  initRating(rating){
        initRatingVars(rating)

        setRatingActiveWidth();
    }

    // Инициализация переменных
    function initRatingVars(rating){
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }

    //Изменяем ширину активных звезд
    function setRatingActiveWidth ( index = ratingValue.innerHTML){
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ ratingActiveWidth }%`;
    }
}


