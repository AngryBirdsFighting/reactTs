import React from "react"
import ReactDom from "react-dom"
import style from "./assets/css/index.scss"

const render = () =>{
    ReactDom.render(
        <div className={`${style.red} blue`}>哈哈哈</div>,
        document.getElementById('app')
    )
}
render()
