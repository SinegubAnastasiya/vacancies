import { useEffect, useState } from "react"
import Header from "../../Components/Header/Header"
import style from './basket.module.scss'
import NotFound from "../../Components/NotFound/NotFound"
import { Link } from "react-router-dom"

function Basket() {
    const [newVacancies, setNewVacancies] = useState([])

    const getLikedVacancies = () => {
        let newLikedVacancies = JSON.parse(localStorage.getItem('LikedArr'))
        setNewVacancies(newLikedVacancies)
    }
    
    const removeVacancy = (el) => {
        const deletedVacancy = newVacancies.filter(elem => elem.id !== el.id)
        localStorage.setItem('LikedArr', JSON.stringify([...deletedVacancy, el]))
        setNewVacancies([...deletedVacancy])
    }

    useEffect(() => {
        getLikedVacancies()
    }, [])

    return <>
        <Header />

        <div className={style.info}>{
            newVacancies.map((el, i) =>
                <div key={i} className={style.item}>
                    <Link to={`/${el.id}/${el.title}`}>
                        <h3>{el.title}</h3>

                        <div className={style.dop_info}>
                            <h2>{el.salary}</h2>
                            <div className={style.point}></div>
                            <p>{el.workday}</p>
                        </div>

                        <div className={style.city}>
                            <div className={style.image}></div>
                            <p>{el.city}</p>
                        </div>
                    </Link>
                    <div className={style.starImg} onClick={() => removeVacancy(el)}></div>
                </div>
            )
        }
        </div>

        {!newVacancies.length ? <NotFound /> : null}
    </>
}

export default Basket