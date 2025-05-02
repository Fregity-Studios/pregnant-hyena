let queef = 0;

function update() {
    document.getElementById('queefs').innerHTML = "Queefs: " + formatNumber(queef).toString();

}

function addQueef() {
    queef += 1;
    update();
}