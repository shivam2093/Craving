import React, { useState } from 'react'

function Practice() {


    const [name, setName] = useState({ firstname: '', lastname: '' })


    return (
        <div>

            <form>
                <input type="text" value={name.firstname} onChange={e => setName({ ...name, firstname: e.target.value })}></input>
                <input type="text" value={name.lastname} onChange={e => setName({ ...name, lastname: e.target.value })}></input>

                <h2>{name.firstname}</h2>


            </form>


        </div>
    )
}

export default Practice;