import { checkURL } from "./urlChecker";

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (checkURL(formText)) {

        await fetch('/userData', {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input: formText })
        })
            .then(res => res.json())
            .then(res => {
                updateUI(res);
            })
    }
    else {
        alert("ERROR! Please enter a valid URL")
        console.log("Invalid");
    }
}

// Update UI
const updateUI = (res) => {
    document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
    document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
    document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
    document.getElementById('polarity').innerHTML = `Polarity: ${res.score_tag}`;
}


export { handleSubmit, updateUI };