import { Button, TextField, Pagination } from "@mui/material"
import { Link } from "react-router-dom"
import arr from '../../storage/arr.json'
import NotFound from "../../Components/NotFound/NotFound"
import Header from "../../Components/Header/Header"
import style from './style.module.scss'
import { useEffect, useState } from "react"

function Vacancy() {
    const [allVacancies, setAllVacancies] = useState(arr)
    const [search, setSearch] = useState('')
    const [flagSearch, setFlagSearch] = useState(false)

    const [likedVacancies, setLikedVacancies] = useState(JSON.parse(localStorage.getItem('LikedArr')) || [])

    useEffect(() => {
        const filteredVacancies = arr.filter(el => el.title.toLowerCase().includes(search.toLowerCase()))
        setAllVacancies(filteredVacancies)
        setFlagSearch(false)
    }, [flagSearch])

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
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => setSearch(e.target.value)} />
            <Button variant="contained" onClick={() => setFlagSearch(true)}>Search</Button>
        </div>

        <div className={style.info}>{
            allVacancies.map((el, i) =>
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