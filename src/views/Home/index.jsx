import React, { useEffect, useState } from 'react'
/*Styles*/
import styles from './styles.css'

import Font from 'react-font'

const Home = () => {

    const [values, setValues] = useState([100, 200, 300, 500, 100, 20])
    const [rate, setRate] = useState(12.00)
    const [resultado, setResultado] = useState(846.89)


    useEffect(() => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                values: values,
                rate: rate / 100
            })
        };

        fetch("https://localhost:44319/api/Spread/vna", requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    setResultado(result.toFixed(2))
                },
                (error) => {
                    console.error(error)
                }
            )




    }, [values])

    return (
        <div className="content">
            <div>
                <h1>Práctica Dictum Spread Sheet</h1> <br />

                <table>
                    <thead className="tableHead">
                        <tr>
                            <th>V1</th>
                            <th>V2</th>
                            <th>V3</th>
                            <th>V4</th>
                            <th>V5</th>
                            <th>V6</th>
                            <th>TASA %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input className="inputPrincipal" type="number" defaultValue={values[0]} onChange={(el) => {
                                    let newValues = [...values]
                                    newValues[0] = parseFloat(el.target.value)
                                    setValues(newValues)
                                }} />
                            </td>
                            <td>
                                <input className="inputPrincipal" type="number" defaultValue={values[1]} onChange={(el) => {
                                    let newValues = [...values]
                                    newValues[1] = parseFloat(el.target.value)
                                    setValues(newValues)
                                }} />
                            </td>
                            <td>
                                <input className="inputPrincipal" type="number" defaultValue={values[2]} onChange={(el) => {
                                    let newValues = [...values]
                                    newValues[2] = parseFloat(el.target.value)
                                    setValues(newValues)
                                }} />
                            </td>
                            <td>
                                <input className="inputPrincipal" type="number" defaultValue={values[3]} onChange={(el) => {
                                    let newValues = [...values]
                                    newValues[3] = parseFloat(el.target.value)
                                    setValues(newValues)
                                }} />
                            </td>
                            <td>
                                <input className="inputPrincipal" type="number" defaultValue={values[4]} onChange={(el) => {
                                    let newValues = [...values]
                                    newValues[4] = parseFloat(el.target.value)
                                    setValues(newValues)
                                }} />
                            </td>
                            <td>
                                <input className="inputPrincipal" type="number" defaultValue={values[5]} onChange={(el) => {
                                    let newValues = [...values]
                                    newValues[5] = parseFloat(el.target.value)
                                    setValues(newValues)
                                }} />
                            </td>
                            <td>
                                <input className="inputPrincipal" type="number" defaultValue={rate} onChange={(el) => {

                                    setRate(parseFloat(el.target.value))
                                }} />
                            </td>
                        </tr>
                        <tr>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                        </tr>
                        <tr>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                        </tr>
                        <tr>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                        </tr>
                        <tr>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                        </tr>
                        <tr>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                            <td><input className="input" placeholder="0" /></td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <div className="contentResult">
                    <Font family='Roboto'>
                        <p className="txtResult">Resultado: ${resultado}</p>
                    </Font>
                </div>
                <br />
            </div>
        </div>)
}

export default Home