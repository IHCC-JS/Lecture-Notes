const output = document.querySelector('#output');

async function getData() {
    // First use the wong file path to see the error,
    // Then remove a "," from the JSON file to see the error

    const response = await fetch('people.json');

    // If the response is not ok, a file most likely was not found
    if (!response.ok) {
        console.log("JSON file not found, Check the file path/name");
        return [];
    }
    //Now TRY to parse the JSON file
    try {
        return await response.json();
    } catch (error) {
        console.log("JSON file has bad syntax: ", error);
        return [];
    }
}

function convertToHTML(data) {
    return data.map(person => `
            <article>
                <h2>${person.name}</h2>
                <p>Age: ${person.age}</p>
                <p>Is Employed: ${person.isEmployed ? "Yes": "Nope"}</p>
                <img src="${person.image}" alt="${person.name}" style="width: 200px;"/>
            </article>
       `).join('');
}

async function main(){
    const bikiniBottom = await getData();
    output.innerHTML = convertToHTML(bikiniBottom);
}

//Before building "main" just try to run getData() here and see the output
main();