import TrafficLight from './TrafficLight.js';

const signal = new TrafficLight();

function updateLightUI(newColor) {
    const lightIds = ['red', 'yellow', 'green'];

    lightIds.forEach(color => {
        document.getElementById(`light-${color}`).classList.remove(color);
    });

    document.getElementById(`light-${newColor}`).classList.add(newColor);

    document.getElementById('status-message').textContent =
        `Current State: ${newColor.toUpperCase()}`;
}


function runTrafficSystem() {
    const newColor = signal.nextState();

    updateLightUI(newColor);

    //each light has a different delay
    const delay = TrafficLight.getTransitionTime(newColor);

    setTimeout(runTrafficSystem, delay);
}

// Light starts at red
updateLightUI('red');
//Runs the method on an infinite loop with a 1-second delay
setTimeout(runTrafficSystem, 1000);
