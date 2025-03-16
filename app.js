function getElem(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

// print chat
const chat = getElem('#chat-container');
chat.then((response) => {
    console.log(response);
})

// remove redundant chat opening button below the description
const teaser = getElem('#teaser-carousel')
teaser.then((res) => {
    res.remove();
})

var styles = `
    #chat-container {
        display: flex;
        flex-direction: column;
    }
`

// var styleSheet = document.createElement("style")
// styleSheet.textContent = styles
// document.head.appendChild(styleSheet)



// include some kind of cancel function if chat can't be found. Could also check if it's a video. Could also check if chat is closed. 