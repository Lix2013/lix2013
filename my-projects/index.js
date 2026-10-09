let title = document.getElementById("typewriter");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let texts = ["Welcome to my projects", "I have a mini projects"];

async function main() {
    let textIndex = 0;
    while (true) {
        let currentText = texts[textIndex];

        for (let i = 0; i <= currentText.length; i++) {
            await delay(100);

            title.innerHTML = `| - ${currentText.substring(0, i)} -|`;
        }

        await delay(1500);

        for (let i = currentText.length; i >= 0; i--) {
            await delay(50);
            title.innerHTML = `| - ${currentText.substring(0, i)} -|`;
        }

        await delay(500);

        textIndex = (textIndex + 1) % texts.length;
    }
}

main();