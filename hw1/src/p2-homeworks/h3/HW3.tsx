import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}[]

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, {_id: v1(), name: name}]) // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <ul/>
            {users.map((el) => {
                return (
                    <li key={el._id}>
                        {el.name}
                    </li>
                )
            })}
            <ul/>
        </div>
    )
}

export default HW3
