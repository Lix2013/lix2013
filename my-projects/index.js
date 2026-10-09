let title = document.getElementById("typewriter");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let texts = ["Welcome to my projects", "I have a mini projects"];
let text = "";

async function main() {
    let textIndex = 0;
    while (true) {
        text = texts[textIndex];

        for (let i = 0; i < text.length; i++) {
            await delay(100);
            title.innerHTML = title.innerHTML + text[i];
        }

        await delay(1000);

        for (let i = text.length; i > 0; i--) {
            await delay(100);
            title.innerHTML = title.textContent.slice(0, -1);
        }

        textIndex = (textIndex + 1) % texts.length;
    }
}

main();