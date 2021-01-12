const app = {
    mainContainer: document.querySelector('#mainContainer'),
    galleryContainer: document.querySelector('#gallery'),
    imagesArr: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg',],

    /**
     * Фнукиця инициализации приложения.
     */
    init() {
        this.render();
        this.galleryContainer.addEventListener('click', event => this.clickHandler(event));
    },

    /**
     * Функция рендера плитки миниатюр фотографий.
     */
    render() {
        for (let length = 0; length < this.imagesArr.length; length++) {
            let imgElement = document.createElement('img');
            this.galleryContainer.appendChild(imgElement);
            imgElement.id = `${length + 1}`;
            imgElement.src = `img/${length + 1}.jpg`;
            imgElement.classList.add('gallery_img');
        }
    },

    /**
     * Функция отслеживания кликов по контейнеру галереи.
     * @param event - передаётся ивент.
     */
    clickHandler(event) {
        if (event.target.tagName !== 'IMG') return;
        this.createWrap(event.target.id);
    },

    /**
     * Метод генерирует налегающий блок, который показывает увеличенную версию фотографии из плитки фотографий.
     * @param id - передаётся id фотографии, по которой был осуществлён клик.
     */
    createWrap(id) {
        // Создаём главный затемняющий экран, который будет иметь определённый id.
        const wrapElement = document.createElement('div');
        wrapElement.classList.add('gallery_wrap');
        wrapElement.id = 'wrap';

        // Создаём кнопку закрыть.
        const closeElement = document.createElement('img');
        closeElement.classList.add('gallery_wrap_close');
        closeElement.src = 'img/utils/close.png';
        // Добавляем слушатель кликов, чтобы закрывать весь затемняющий блок.
        closeElement.addEventListener('click', () => this.close('wrap'))
        wrapElement.appendChild(closeElement);

        // Создаём текстовое поле с отслеживанием фото.
        const textElement = document.createElement('p');
        textElement.classList.add('wrap_position');
        textElement.innerHTML = `${id} / ${this.imagesArr.length}`;
        wrapElement.appendChild(textElement);

        // Создаём кнопки переключения картинок.
        const chevronLeft = document.createElement('img');
        chevronLeft.classList.add('wrap_left');
        chevronLeft.src = 'img/utils/left-chevron.png';
        chevronLeft.id = 'left';
        chevronLeft.addEventListener('click', event => this.turn(event.target.id, id));
        wrapElement.appendChild(chevronLeft);

        const chevronRight = document.createElement('img');
        chevronRight.classList.add('wrap_right');
        chevronRight.src = 'img/utils/right-chevron.png';
        chevronRight.id = 'right';
        chevronRight.addEventListener('click', event => this.turn(event.target.id, id));
        wrapElement.appendChild(chevronRight);

        // Создаём элемент фотографии и добавляем ей id и src
        const image = document.createElement('img');
        image.classList.add('gallery_wrap_image');
        image.src = `img/${id}.jpg`;
        image.id = 'img_wrap';
        wrapElement.appendChild(image);

        this.mainContainer.appendChild(wrapElement);
    },

    /**
     * Метод удаления перекрывающего блока. Нужен для выхода из просмотра полной версии фотографии.
     * @param id - передаётся id перекрывающего блока.
     */
    close(id) {
        document.querySelector(`#${id}`).remove();
    },

    /**
     * Метод позволяет переключать фотографии в режиме увеличенного просмотра фотографий.
     * @param chevronId - получаем ID стрелки, так как важно знать в какую сторону листать.
     * @param imageId - получаем нынешний ID фотографии.
     */
    turn(chevronId, imageId) {
        imageId = Number(imageId);

        if (chevronId === 'right' && imageId < this.imagesArr.length) {
            let newId = imageId + 1;
            this.createWrap(newId);
            this.close('wrap');
        } else if (chevronId === 'right' && imageId >= this.imagesArr.length) {
            this.createWrap(1);
            this.close('wrap');
        }

        if (chevronId === 'left' && imageId > this.imagesArr.length - (this.imagesArr.length - 1)) {
            let newId = imageId - 1;
            this.createWrap(newId);
            this.close('wrap');
        } else if (chevronId === 'left' && imageId <= this.imagesArr.length - (this.imagesArr.length - 1)) {
            this.createWrap(6);
            this.close('wrap');
        }
    }
}

app.init();