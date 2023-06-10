import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'

function Cronometro () {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie um cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao 
                texto="Começar!"
            /> 
        </div>
    )
}

export default Cronometro;