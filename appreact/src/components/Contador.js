import React from 'react'
import '../Style/Contador.css'

function Contador({ nroClicks, mostrar }){
    return(
        
       mostrar ? <div className='contador'>{nroClicks}</div> :null
    );
}

export default Contador