const title = document.querySelector(".hello:first-child h1");

function handleTitleClick()
{
    title.style.color = "blue";
    console.log("Title was clicked!");
}

function handleMouseEnter()
{
    title.style.color = "green";
    title.innerText = "Mouse is here!";
}

function handleMouseLeave()
{
    title.style.color = "black";
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);