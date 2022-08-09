const h1 = document.querySelector(".hello:first-child h1");

function handleH1Click()
{
    h1.style.color = "blue";
    console.log("h1 was clicked!");
}

function handleMouseEnter()
{
    h1.style.color = "green";
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave()
{
    h1.style.color = "black";
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize()
{
     document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy()
{
    alert("copier!");
}

function handleWindowOffline()
{
    alert("SOS no WIFI");
}

function handleWindowOffline()
{
    alert("All good");
}

h1.addEventListener("click", handleH1Click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("offline", handleWindowOffline);