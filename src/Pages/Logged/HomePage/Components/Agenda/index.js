import moment from "moment";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Body, FormEvent, InputEvent, InputEventSelect, InputEventText } from "./styled";


const Agenda = () => {
    const [myEventsList, setMyEventsList] = useState([])

    const [title, setTitle] = useState("")

    const dia = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

    const mes = [
        {
        mes: "jan",
        value: 0
        },
        {
        mes: "fev",
        value: 1
        },
        {
        mes: "mar",
        value: 2
        },
        {
        mes: "abr",
        value: 3
        },
        {
        mes: "mai",
        value: 4
        },
        {
        mes: "jun",
        value: 5
        },
        {
        mes: "jul",
        value: 6
        },
        {
        mes: "ago",
        value: 7
        },
        {
        mes: "set",
        value: 8
        },
        {
        mes: "out",
        value: 9
        },
        {
        mes: "nov",
        value: 10
        },
        {
        mes: "dez",
        value: 11
        },

]


    const [startDay, setStartDay] = useState()
    const [startMonth, setStartMonth] = useState()
    const [startYear, setStartYear] = useState()
    const [startHour, setStartHour] = useState()
    const [startMin, setStartMin] = useState()


    useEffect(() => {
        console.log(startDay)
    },[startDay])

    useEffect(() => {
        console.log(startMonth)
    },[startMonth])

    const [endDay, setEndDay] = useState()
    const [endMonth, setEndMonth] = useState()
    const [endYear, setEndYear] = useState()
    const [endHour, setEndHour] = useState()
    const [endMin, setEndtMin] = useState()

    const localizer = momentLocalizer(moment)

    const addEvent = () => {
        let Array = [...myEventsList];
        Array.push({
            title:title,
            allDay: false,
            start: new Date(startYear, startMonth, startDay, startHour, startMin),
            end: new Date(endYear, endMonth, endDay, endHour, endMin )   
        })
        setMyEventsList(Array)
    }

    return(
    <Body>
        <Calendar
        culture="br"
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 , width: 800}}
        />
    <FormEvent>
        <text>Marcar um evento</text>
        <div>
        <InputEventText placeholder="Titulo da Marcação" value={title} onChange={(e) => setTitle(e.target.value)}></InputEventText>
        </div>
        <text>Inicio</text>
        <div>
        <InputEventSelect  placeholder="Dia" value={startDay} onChange={e => setStartDay(e.target.value)}>
            {dia.map((itens) => {
                return(
                    <option >{itens}</option>
                )
            })}
        </InputEventSelect>
        <InputEventSelect  placeholder="Mês" value={startMonth} onChange={(e) => setStartMonth(e.target.value)}>
        {mes.map((itens) => {
                return(
                    <option value={itens.value}>{itens.mes}</option>
                )
            })}
        </InputEventSelect>
        <InputEvent type="number" placeholder="Ano" value={startYear} onChange={(e) => setStartYear(e.target.valueAsNumber)}></InputEvent>
        <InputEvent type="number" placeholder="Hora" value={startHour} onChange={(e) => setStartHour(e.target.valueAsNumber)}></InputEvent><text>:</text>
        <InputEvent type="number" placeholder="Minuto" value={startMin} onChange={(e) => setStartMin(e.target.valueAsNumber)}></InputEvent>
        </div>
        <text>Final</text>
        <div>
        <InputEventSelect  placeholder="Dia" value={endDay} onChange={e => setEndDay(e.target.value)}>
            {dia.map((itens) => {
                return(
                    <option >{itens}</option>
                )
            })}
        </InputEventSelect>
        <InputEventSelect  placeholder="Mês" value={endMonth} onChange={(e) => setEndMonth(e.target.value)}>
        {mes.map((itens) => {
                return(
                    <option value={itens.value}>{itens.mes}</option>
                )
            })}
        </InputEventSelect>
        <InputEvent type="number" placeholder="Ano" value={endYear} onChange={(e) => setEndYear(e.target.valueAsNumber)}></InputEvent>
        <InputEvent type="number" placeholder="Hora" value={endHour} onChange={(e) => setEndHour(e.target.valueAsNumber)}></InputEvent><text>:</text>
        <InputEvent type="number" placeholder="Minuto" value={endMin} onChange={(e) => setEndtMin(e.target.valueAsNumber)}></InputEvent>
        </div>
        <button onClick={() => addEvent()}>Adicionar</button>
    </FormEvent>
    </Body>
    )
}

export default Agenda;