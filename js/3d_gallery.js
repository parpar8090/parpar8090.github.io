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
    var size = (keys.length / cols);

    for (let rows = 0; rows < size; rows++) {
        var row = `<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="${rows}"></div>`;
        $('.gallery').append(row);

        for (let col = 1; col < (rows + 1) * cols; col++) {
            var i = col * (rows + 1);
            jsonItem = jsonData[keys[i - 1]];

            var element =
                `<div class="col gallery-item"><div class="card h-100">
                    <img src="${jsonItem.image_url}" class="card-img-top" alt="${jsonItem.title}" />
                    <h3 class="card-title">${jsonItem.title}</h3>
                    <div class="card-body">
                        <p class="card-text">${jsonItem.description}</p>
                    </div>
                </div></div>`;

            $(`#${rows}.row`).append(element);
        }
    }
};