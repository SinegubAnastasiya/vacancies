import { Button, TextField, Pagination } from "@mui/material"
import style from './style.module.scss'

function Vacancy() {
    const arr = [
        { name: 'Менеджер-дизайнер', salary: 'з/п от 70000 rub', workday: 'Полный рабочий день', city: 'Новый Уренгой' },
        { name: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', workday: 'Полный рабочий день', city: 'Москва' },
        { name: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', workday: 'Сменный график работы', city: 'Самара' },
        { name: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', workday: 'Полный рабочий день', city: 'Тюмень' },
        { name: 'Менеджер-дизайнер', salary: 'з/п от 70000 rub', workday: 'Полный рабочий день', city: 'Новый Уренгой' },
        { name: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', workday: 'Полный рабочий день', city: 'Москва' },
        { name: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', workday: 'Сменный график работы', city: 'Самара' },
        { name: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', workday: 'Полный рабочий день', city: 'Тюмень' },
        { name: 'Менеджер-дизайнер', salary: 'з/п от 70000 rub', workday: 'Полный рабочий день', city: 'Новый Уренгой' },
        { name: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', workday: 'Полный рабочий день', city: 'Москва' },
        { name: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', workday: 'Сменный график работы', city: 'Самара' },
        { name: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', workday: 'Полный рабочий день', city: 'Тюмень' }]

    return <div className={style.wrapper}>
        <div className={style.form}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Search</Button>
        </div>
        
        <div className={style.info}>{
            arr.map((el, i) =>
                <div className={style.item} key = {i}>
                    <h1>{el.name}</h1>
                    
                    <div className={style.dop_info}>
                        <p>{el.salary}</p>
                        <div className={style.point}></div>
                        <p>{el.workday}</p>
                    </div>

                    <div className={style.city}>
                        <div className={style.image}></div>
                        <p>{el.city}</p>
                    </div>
                </div>
            )
        }
        </div>
        <Pagination count={10} variant="outlined" shape="rounded" color="secondary" />
    </div>
}

export default Vacancy