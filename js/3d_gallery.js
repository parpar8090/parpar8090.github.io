const jsonData = require('./3d_gallery.json');
for (var i in jsonData) {
    var element =
        `<div class="container">
        <img src="${jsonData[i].image_url}" />
        <div class="desc">${jsonData[i].description}</div>
    </div>`;

    $('.gallery').append(element);
}