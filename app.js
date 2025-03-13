// Get chat box

function getchat() {
    return document.getElementById('chat-container');
}

if (document.readyState == 'complete') {
    console.log('loaded');
    setTimeout(() => {
        var chat = getchat();
    console.log(chat);
    },5000)
} 


    



// Try seeing if an on click works for chat retrieval; may just not be loaded on tab opening
// If not, perhaps it's an iframe fuckery. 