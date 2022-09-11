const body = document.body;

function disableEvent(event)
{
    event.preventDefault();
}

document.oncontextmenu = disableEvent;
document.ondragstart = disableEvent;
document.onselectstart = disableEvent;
document.onscroll = disableEvent;