function chills() {
    let cTemp = document.querySelector("#temp").textContent;
    let kmSpeed = document.querySelector("#speed").textContent;
    let fTemp = (cTemp * (9 / 5)) + 32;

    let mSpeed = kmSpeed * 0.621371;


    if (fTemp <= 50 && mSpeed > 3) {
        let fChill = 35.74 + (0.6215 * fTemp) - (35.75 * (Math.pow(mSpeed, 0.16))) + (0.4275 * fTemp * (Math.pow(mSpeed, 0.16)));
        let chill = (fChill - 32) * (5 / 9);
        document.querySelector("#chill-output").textContent = `Wind Chill: ${chill.toFixed(1)}°C`;


    } else {
        document.querySelector("#chill-output").textContent = `Wind Chill: N/A`;


    }
}

chills();