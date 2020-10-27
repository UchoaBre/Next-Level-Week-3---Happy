//create map
const map = L.map('mapid').setView([-23.5601917,-46.641581], 15)


//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// add photo field
function addPhotoField() {
    // get the photo container #images
    const container = document.querySelector('#images')
    // get the container to duplicate .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // get a clone of the last image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // check if the field is empty, and do not add in the photo container
    const input = newFieldContainer.children[0]
    
    if(input.value == "") {
        return
    }
    // clean the new field
    input.value = ""
    // add the clone in #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    if(fieldsContainer.length <= 1) {
        // clean the field value
        span.parentNode.children[0].value = ""
        return
    }

    // delete the field
    span.parentNode.remove()
}

// select yes or no
function toggleSelect(event) {
    // remove the class .active (of the buttons)
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))
    // add the class .active in the clicked button
    const button = event.currentTarget
    button.classList.add('active')
    // update the input hidden with the selected value
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}

/*
function validate(event) {
    // check if lat and lng are valid
    const needsLatAndLng = true;
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa.')
    }
}
*/