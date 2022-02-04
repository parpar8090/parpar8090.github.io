var oXHR = new XMLHttpRequest();

// Initiate request.
oXHR.onreadystatechange = function() {
    if (oXHR.readyState == 4) { // Check if request is complete.
        createGalleryFromJSON(this.responseText);
    }
};
oXHR.open("GET", "js/3d_gallery.json", true); // get json file.
oXHR.send();

function createGalleryFromJSON(req) {
    var jsonData = [];
    jsonData = JSON.parse(req);

    const cols = 4;
    var keys = Object.keys(jsonData);
    var size = keys.length;
    let rows = size;

    //todo zoomable images

    for (let i = 0; i < size; i++) {
        jsonItem = jsonData[keys[i]];

        var element =
            `<div class="col gallery-item" id="${i}"><div class="card h-100">
                <div class="card-img-div">
                    <img src="${jsonItem.image_url}" class="gallery-img card-img-top" alt="${jsonItem.title}"/>
                </div>
                <h3 class="card-title">${jsonItem.title}</h3>
                <div class="card-body">
                    <p class="card-text">${jsonItem.description}</p>
                </div>
            </div></div>`;

        $(`.gallery`).append(element);

        if (jsonItem.favorite) {
            fav = `<span style="position: relative;"><i class="fas fa-star"></i></span>`;
            $(`#${i}.gallery-item.card`).append(fav);
        }
    }

    /*for (let row = 0; row < rows; row++) {
        var rowEl = `<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="row-${row}"></div>`;
        $('.gallery').append(rowEl);

        for (let col = 0; col < cols; col++) {
            var i = row * cols + col;
            jsonItem = jsonData[keys[i]];

            console.log(col, i, cols, row);

            var element =
                `<div class="g-col-6 gallery-item" id="col-${i}"><div class="card h-100">
                    <div class="card-img-div">
                        <img src="${jsonItem.image_url}" class="card-img-top" alt="${jsonItem.title}"/>
                    </div>
                    <h3 class="card-title">${jsonItem.title}</h3>
                    <div class="card-body">
                        <p class="card-text">${jsonItem.description}</p>
                    </div>
                </div></div>`;

            $(`#row-${row}.row`).append(element);

            if (jsonItem.favorite) {
                fav = `<span><i class="fas fa-star"></i></span>`;
                $(`#row-${row}#col-${i}.card-img-div`).append(fav);
            }
        }
    }*/
};