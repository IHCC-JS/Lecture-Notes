// THIS FILE DISPLAYS CLASS INFORMATION
// Just focus on what to show in the DOM!

// This function gets called from HandleUserForm.js when the user picks a class
// We will write all of our code in this function
export function displayClassInfo(classCode) {
    console.log("classCode:" + classCode);
    const output = document.querySelector("#output");
    output.innerHTML = "";

    if(!classCode) {
        output.innerHTML = "<p class='text-yellow-400'>Please select a class</p>";
        return;
    }

    let classInfo = "";

    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const img = document.createElement("img");

    img.classList.add("w-100", "h-100");

    //Dynamic Rendering
    switch(classCode) {
        case "BCA185":
            h1.textContent = "BCA 185 Beginner Web Dev";
            p.textContent = "This is a beginner class for web development";
            img.src = "https://upload.wikimedia.org/wikipedia/commons/d/d1/WWW-LetShare.svg";
            break;
        case "CIS598":
            h1.textContent = "CIS 598 Python";
            p.textContent = "This is a beginner class for Python";
            img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png";
            break;
        case "CIS198":
            h1.textContent = "CIS 198 JavaScript";
            p.textContent = "This is the best JS class in the world";
            img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
            break;
    }
    //output to the screen
    //do this first
    // output.innerHTML = classInfo;

    output.appendChild(h1);
    output.appendChild(p);
    output.appendChild(img);
}