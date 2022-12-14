import React from 'react'
import './how-to-use.css'


export default function HowToUse() {
  return (
    <div className='HowToUseBody'>
        <h1>How to use ?</h1>
        <p>To display sieges datas we use json files generated by Summoners War Exporter tool with "SiegeInsight.asar" plugin !
        </p>
        <p>After you correctly received your json file, go through "Siege Datas" page and simply import your file.</p>
        <p>If your json file is correct, siege datas will be automaticly displayed.</p>
        <p>Have fun !</p>
    </div>
  )
}
