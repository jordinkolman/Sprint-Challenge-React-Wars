import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

export default function CharacterCard({ charName, charGender, charBirthYear, charHeight, charMass, charEyeColor, charHairColor, charSkinColor }) {
    return (
        <Container className = 'character-card' style={{border: '2px dashed black', borderRadius: '10px', color: 'white', backgroundColor: 'grey', padding: '15px', margin: '10px', width: '300px'}}>
            <Header style={{fontSize:'2rem', margin: '10px'}}>{charName}</Header>
            <Segment style={{marginBottom: '7px'}}>Gender: {charGender}</Segment>
            <Segment style={{marginBottom: '7px'}}>Born: {charBirthYear}</Segment>
            <Segment style={{marginBottom: '7px'}}>Height: {charHeight}</Segment>
            <Segment style={{marginBottom: '7px'}}>Mass: {charMass}</Segment>
            <Segment style={{marginBottom: '7px'}}>Eye Color: {charEyeColor}</Segment>
            <Segment style={{marginBottom: '7px'}}>Hair Color: {charHairColor}</Segment>
            <Segment style={{marginBottom: '7px'}}>Skin Color: {charSkinColor}</Segment>
        </Container>
    )
}