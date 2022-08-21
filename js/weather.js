function onGeoSuccess(position)
{
    console.log(position);
}

function onGeoError()
{
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);