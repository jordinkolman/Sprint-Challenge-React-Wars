import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from 'semantic-ui-react'
import CharacterCard from './CharacterCard.js'

export default function CharacterGrid() {
    const [characterData, setCharacterData] = useState([])

    

    useEffect(() => {
        const getData = async () => {
            return await axios
            .get (`https://swapi.co/api/people/`)

        }
        getData()
            .then(response => {
                console.log(response)
                let characters = response.data.results
                setCharacterData(characters)
            })
            .catch(error => {
                console.log('ERROR: ', error)
            })
    }, [])
    
    
    return (
        <Container style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around'}}>
            {characterData.map(character => {
                return <CharacterCard charName = {character.name}
            charGender = {character.gender}
            charBirthYear = {character.birth_year}
            charHeight = {character.height}
            charMass = {character.mass}
            charEyeColor = {character.eye_color}
            charHairColor = {character.hair_color}
            charSkinColor = {character.skin_color}
            style = {{backgroundColor: 'white', margin:'10px' }} />
            })}
        </Container>
    )


}