import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ""

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onBlur={setNameCallback}
                   onKeyDown={onEnter}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <div className={s.error}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
