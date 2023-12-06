import './App.css'
import {ChangeEvent, useState} from "react";
import {Character} from "./component/Character.ts";

function App() {

    const [characters] = useState<Character[]>([
        {"id": 1, "name": "Rick Sanchez", "status": "Alive", "species": "Human", "type": "", "gender": "Male"},
        {"id": 2, "name": "Morty Smith", "status": "Alive", "species": "Human", "type": "", "gender": "Male"},
        {"id": 3, "name": "Summer Smith", "status": "Alive", "species": "Human", "type": "", "gender": "Female"},
        {"id": 4, "name": "Beth Smith", "status": "Alive", "species": "Human", "type": "", "gender": "Female"},
        {"id": 5, "name": "Jerry Smith", "status": "Alive", "species": "Human", "type": "", "gender": "Male"},
        {"id": 6, "name": "Abadango Cluster Princess", "status": "Alive", "species": "Alien", "type": "", "gender": "Female"}
    ])

    const [input, setInput] = useState<string>("")

    function onInput(inputString:ChangeEvent<HTMLInputElement>){
        setInput(inputString.target.value)
    }

    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(input.toLowerCase())
    )


    return (
        <>

            <input
                type="text"
                placeholder="character"
                onChange={onInput}
                value={input}
            />
            <div>
                {filteredCharacters.map((character) => (
                    <div key={character.id}>
                        <h6>{character.name}</h6>
                    </div>
                ))}
            </div>



        </>
    )
}

export default App
