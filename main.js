function onClickMap(event) {
    const allImages = document.querySelectorAll('img');
    const mapButtons = document.querySelectorAll('#navbar-map')[0].childNodes;
    mapButtons.forEach((button) => {
        button.className = 'map';
    });
    allImages.forEach((image) => {
        image.style.display = 'none';
    });
    const images = document.querySelectorAll(
        `img[data-map=${event.target.id}]`
    );
    images.forEach((image) => {
        image.style.display = 'block';
    });
    document.getElementById(event.target.id).className += ' active';
}

function onClick(event) {
    const allImages = document.querySelectorAll('img');
    if (event.target.id === 'all-locations') {
        allImages.forEach((image) => {
            image.style.display = 'block';
        });
        const locationButtons = document.querySelectorAll('.location');
        locationButtons.forEach((button) => {
            button.className = 'location';
        });
    } else if (event.target.id === 'all-types') {
        allImages.forEach((image) => {
            image.style.display = 'block';
            const typeButtons = document.querySelectorAll('.button-type');
            typeButtons.forEach((button) => {
                button.className = 'button-type';
            });
        });
    } else {
        allImages.forEach((image) => {
            image.style.display = 'none';
        });
        let query = '';
        const className = event.target.className;
        if (className.includes('location')) {
            query = `img[data-location='${event.target.id}']`;
            const locationButtons = document.querySelectorAll('.location');
            locationButtons.forEach((button) => {
                button.className = 'location';
            });
        } else {
            query = `img[data-type='${event.target.id}']`;
            const typeButtons = document.querySelectorAll('.button-type');
            typeButtons.forEach((button) => {
                button.className = 'button-type';
            });
        }
        const images = document.querySelectorAll(query);
        images.forEach((image) => {
            if (image.dataset.map === currentlyActiveMap()) {
                image.style.display = 'block';
            }
        });
    }

    document.getElementById(event.target.id).className += ' active';
}

function currentlyActiveMap() {
    return document.getElementsByClassName('map active')[0].id;
}
