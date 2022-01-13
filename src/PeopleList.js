import React from 'react'
import People from './People.js'

export default function PeopleList({ peoples }) {
    return (
        peoples.map(people => {
            return <People key={people.id} people={people} />
        })
        
    )
}

