


function setEventListenersForSelect(elems) {
    elems.forEach(elem => {
        elem.addEventListener('click', (e) => {
            const previousSelected = document.querySelector(`${e.target.localName}.uni-selected`)
            if (previousSelected) previousSelected.classList.remove('uni-selected')
            e.target.classList.add('uni-selected')
        })
    })
}

parseJSON = (response) => response.json()

// regions and subregions

const subregions = document.querySelectorAll('li')
const regions = document.querySelectorAll('path')

setEventListenersForSelect(subregions)
setEventListenersForSelect(regions)

//property type

const buttons = document.querySelectorAll('.button')

setEventListenersForSelect(buttons)

//submit

const submitButton = document.querySelector('.cta')


submitButton.addEventListener('click', (e) => {
    selectedItems = document.querySelectorAll('.uni-selected')
    const data = {
        location: {
            region: selectedItems[0].getAttribute('title'),
            subregion: selectedItems[1].innerText
        },
        type: selectedItems[2].innerText,
        full_name: document.querySelector('input[name = name]').value,
        email: document.querySelector('input[name = email]').value,
        phone: document.querySelector('input[name = phone]').value
    }
    const url = "http://localhost:3001/add/property"
    const options = {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(url,options)
    .then(parseJSON)
    .then(response => {
        alert(response.message)
    })
    .catch(console.log)
    
})





