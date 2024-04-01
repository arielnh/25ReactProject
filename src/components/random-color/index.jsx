import { useState } from 'react'
export default function RandomeColor () {
  const [typeOfColor, setTypeColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  const handleCreateRandomColor = () => {

  }

  const handleHex = () => {

  }
  const handleRBG = () => {

  }
  return (
    <div style={{
      width: '50vw',
      height: '50vh',
      background: color
    }}
    >
      <button onClick={() => setTypeColor('hex')}>Genera HEX aleatorio</button>
      <button onClick={() => setTypeColor('hex')}>Genera RBG aleatorio</button>
      <button onClick={typeOfColor === 'hex' ? handleHex : handleRBG}>Genera un color aleatorio</button>
    </div>
  )
}
