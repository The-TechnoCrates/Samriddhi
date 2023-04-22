let locationBtn = document.getElementById('location')
let name = document.getElementById('name')
let number = document.getElementById('number')
let message = document.getElementById('message')
let address = document.getElementById('address')


let details = {
    name: '',
    number: '',
    message: '',
    address: ''
}
locationBtn.addEventListener('click', async () => {
    details.name = name.value
    details.number = number.value
    details.message = message.value
    details.address = address.value
    const successCallback = (position) => {
        console.log(position);
        let { latitude, longitude } = position.coords
        details = {
            ...details,
            lat: latitude,
            lon: longitude,
        }
        console.log(details);
    };
    const errorCallback = (error) => {
        console.log(error);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    // POST request using fetch()
    fetch("http://localhost:3000/locate", {
        // Adding method type
        method: "POST",
        // Adding body or contents to send
        body: JSON.stringify(details),
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

        // Converting to JSON
        .then(response => response.json())

        // Displaying results to console
        .then(json => console.log(json));

})