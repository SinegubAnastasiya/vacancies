import { Button, TextField, Pagination } from "@mui/material"
import { Link } from "react-router-dom"
import arr from '../../storage/arr.json'
import NotFound from "../../Components/NotFound/NotFound"
import Header from "../../Components/Header/Header"
import style from './style.module.scss'
import { useState } from "react"

function Vacancy() {
    const [likedVacancies, setLikedVacancies] = useState(JSON.parse(localStorage.getItem('LikedArr')) || [])

    const addToBasket = (el) => {
        const checkVacancies = likedVacancies.filter(elem => elem.id == el.id)
        if (!checkVacancies.length) {
            setLikedVacancies([...likedVacancies, el])
            localStorage.setItem('LikedArr', JSON.stringify([...likedVacancies, el]))
        }
        console.log(likedVacancies);
    }

    return <div className={style.wrapper}>
        <Header />
        <div className={style.form}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Search</Button>
        </div>

        <div className={style.info}>{
            arr.map((el, i) =>
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
                    <div className={style.starImg} onClick={() => addToBasket(el)}></div>
                </div>
            )
        }

        </div>

        {!arr.length ? <NotFound /> : null}

        <Pagination count={12} variant="outlined" shape="rounded" color="secondary" />
    </div>
}

export default Vacancy