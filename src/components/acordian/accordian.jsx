import data from './data'
import { useState } from 'react'

const Accordian = () => {
  const [selected, setSelected] = useState(null)
  const [enableMulti, setEnablM] = useState(false)
  const [multi, setMulti] = useState([])

  const handleSingleSelect = (getCurrentId) => {
    setSelected(getCurrentId)
    if (getCurrentId === selected && !enableMulti) setSelected(null)
  }

  const handleMultiSelec = (getCurrentId) => {
    const id = getCurrentId
    const copyMulti = [...multi]
    const indexId = copyMulti.indexOf(id)

    if (indexId === -1) copyMulti.push(id)
    else copyMulti.splice(indexId, 1)

    setMulti(copyMulti)
  }

  const handelEnableMulti = () => {
    setEnablM(!enableMulti)
    setSelected(false)
  }

  return (

    <>
      <h2>Accordeón</h2>
      <button onClick={handelEnableMulti}>
        {enableMulti === false ? 'Activar selección multiple' : 'Desactivar selección multiple'}
      </button>
      <div>
        {data && data.length > 0
          ? data.map(item => (
            <div key={item.id} className='card' onClick={enableMulti ? () => handleMultiSelec(item.id) : () => handleSingleSelect(item.id)}>
              <div>
                <h3>{item.quote}</h3>
                <span>📎</span>

              </div>
              {
                enableMulti ? multi.indexOf(item.id) !== -1 && (<p>{item.author}</p>) : (selected === item.id && <p>{item.author}</p>)

                }
            </div>
          ))
          : <p>No hay datos</p>}
      </div>
    </>

  )
}

export default Accordian
