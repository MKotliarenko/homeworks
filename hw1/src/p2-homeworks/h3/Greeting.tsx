import React, {ChangeEvent, KeyboardEvent} from 'react'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler}
) => {


    return (
        <div>
            <SuperInputText value={name}
                            onChange={setNameCallback}
                            onKeyPress={onKeyPressHandler}
                            onBlur={setNameCallback}
                            spanClassName={s.testSpanError}
                            error={error}
            />
            <SuperButton onClick={addUser} >
                add
            </SuperButton>
            <span className={s.span}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
