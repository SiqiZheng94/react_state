import './App.css'
import {ChangeEvent, useEffect, useState} from "react";
import {Character} from "./component/Character.ts";
// import the characters json document from other folder
import charactersData from "./charactersData/characters.json";

function App() {
// an example to put the character json directly in the code
    const [characters] = useState<Character[]>([
        {"id": 1, "name": "Rick Sanchez", "status": "Alive", "species": "Human", "type": "", "gender": "Male"},
        {"id": 2, "name": "Morty Smith", "status": "Alive", "species": "Human", "type": "", "gender": "Male"},
        {"id": 3, "name": "Summer Smith", "status": "Alive", "species": "Human", "type": "", "gender": "Female"},
        {"id": 4, "name": "Beth Smith", "status": "Alive", "species": "Human", "type": "", "gender": "Female"},
        {"id": 5, "name": "Jerry Smith", "status": "Alive", "species": "Human", "type": "", "gender": "Male"},
        {"id": 6, "name": "Abadango Cluster Princess", "status": "Alive", "species": "Alien", "type": "", "gender": "Female"}
    ])

    const [input, setInput] = useState<string>("")

// to ensure that renderError() is executed after the state update of input => use useEffect hook
    useEffect(()=>{renderError();},[input])

// if something in <input/> changes, this function will catch the ChangeEvent and use "setInput" to update "input"
    function onInput(inputString:ChangeEvent<HTMLInputElement>){
        setInput(inputString.target.value)
        // clear any previous error
        setError("")
        // input updates, execute renderError()
        renderError()
    }

// filter the search with character's name
    const filteredAllCharacters:Character[] = charactersData.filter((character:Character) =>
        character.name.toLowerCase().includes(input.toLowerCase())
    )

// error can be a message or null
    const [error, setError] = useState<string>("")

    // const renderError = () => {
    //     if (!filteredAllCharacters.length && input.trim() !== "") {
    //         return <p>No matching characters found.</p>;
    //     }
    //     return null;
    // };

    const renderError = () => {
        //if input.trim() isn't null, and fifilteredAllCharacters is null => that means nothing found => update error
        if (!filteredAllCharacters.length && input.trim() !== "") {
            setError("No matching characters found.")
        } else {
            setError("")
        }
    }

    return (
        <>

            <input
                type="text"
                placeholder="character"
                onChange={onInput}
                value={input}
            />
            <div>
                {error}
                {filteredAllCharacters.map((character) => (
                    <div key={character.id}>
                        <h6>{character.name}</h6>
                    </div>
                ))}
            </div>


        </>
    )
}

export default App
