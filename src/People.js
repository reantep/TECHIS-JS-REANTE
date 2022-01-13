import React from 'react'

export default function People({ people }) {

    return (
        <div className='peoplelist'>
            {people.name} ({people.age})
        </div>
    )
}
