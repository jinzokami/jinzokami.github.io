main();

function main() {
    const canvas = document.querySelector("#gameCanvas");
    const context = canvas.getContext("2d");

    context.strokeStyle = 'red';
    context.lineWidth = 2;
    context.rect(74, 74, 250, 250);
    context.stroke();

    context.strokeStyle = 'blue';
    context.lineWidth = 2;
    context.rect(76, 76, 246, 246);
    context.stroke();
}

function drawChain(links) {
    for (var i = 0; i < links.length; i++) {

    }
}