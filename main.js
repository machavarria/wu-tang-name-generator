document.querySelector('#button').addEventListener('click',getName)


function getName(){
    const results = [
        document.querySelector('input[name="first-question"]:checked')?.value,
        document.querySelector('input[name="second-question"]:checked')?.value,
        document.querySelector('input[name="third-question"]:checked')?.value,
        document.querySelector('input[name="forth-question"]:checked')?.value,
        document.querySelector('input[name="fifth-question"]:checked')?.value,
    ];


    if(results.includes(undefined)){
        document.querySelector('#result').textContent = "Please answer all the questions!";
        return;
    }

    const firstNames = {
        "Yes": ["Crimson", "Frost", "Titan", "Eternal", "Mystic"],
        "No": ["Fallen", "Soul", "Celestial", "Odyssey", "Starlight"]
    };

    const secondNames = {
        "Yes": ["Reign", "Tycoon", "Storm", "Killshot", "Saga"],
        "No": ["Prophet", "Ops", "Shadow", "Blades", "Logic"]
    };


    // Used AI to help with taking the answers the users submitted and letting the index give them a specfic name
    const firstIndex = results[3] === "Yes" ? 3 : 2;
    const firstName = firstNames[results[0]][firstIndex];


    const secondIndex = results[2] === "Yes" ? 2 : 4;
    const secondName = secondNames[results[1]][secondIndex];


    const wuTang = `${firstName} ${secondName}`


    document.querySelector('#result').textContent = `Here's your Wu-Tang name: ${wuTang}!`;
}
