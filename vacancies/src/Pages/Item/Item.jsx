import { useParams } from 'react-router-dom'
import arr from '../../storage/arr.json'
import style from './style.module.scss'

function Item() {
    const { id } = useParams()

    const [result] = arr.filter((el) => el.id === +id)
    return <div>
        <div className={style.info}>
            <h1>{result.title}</h1>

            <div className={style.dop_info}>
                <p>{result.salary}</p>
                <div className={style.point}></div>
                <p>{result.workday}</p>
            </div>

            <div className={style.city}>
                <div className={style.image}></div>
                <p>{result.city}</p>
            </div>
        </div>

        <div className={style.descript}>
            <h2>Обязанности:</h2>
            {result.responsibilities.map((el, index) => <p key={index}>• {el}</p>)}

            <h2>Требования:</h2>
            {result.requirements.map((el, index) => <p key={index}>• {el}</p>)}

            <h2>Условия:</h2>
            {result.conditions.map((el, index) => <p key={index}>• {el}</p>)}
        </div>
    </div>
}

export default Item