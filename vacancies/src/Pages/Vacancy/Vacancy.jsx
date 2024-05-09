import { Button, TextField, Pagination } from "@mui/material"
import style from './style.module.scss'
import { Link } from "react-router-dom"

import arr from '../../storage/arr.json'

function Vacancy() {

    return <div className={style.wrapper}>
        <div className={style.form}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Search</Button>
        </div>

        <div className={style.info}>{
            arr.map((el, i) =>
                <Link to={`/${el.id}/${el.title}`} key={i}>
                <div className={style.item}>
                    <h1>{el.title}</h1>

                    <div className={style.dop_info}>
                        <p>{el.salary}</p>
                        <div className={style.point}></div>
                        <p>{el.workday}</p>
                    </div>

                    <div className={style.city}>
                        <div className={style.image}></div>
                        <p>{el.city}</p>
                    </div>
                </div></Link>
            )
        }
        </div>
        <Pagination count={12} variant="outlined" shape="rounded" color="secondary" />
    </div>
}

export default Vacancy