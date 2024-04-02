import { useState } from 'react'
export default function RandomeColor () {
  const [typeOfColor, setTypeColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  const random = (lenght) => Math.floor(Math.random() * lenght)

  const handleHex = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#'

    for (let i = 0; i < 6; i++) {
      hexColor += hex[random(hex.length)]
    }
    setTypeColor('hex')
    setColor(hexColor)
  }
  const handleRBG = () => {
    const r = random(256)
    const g = random(256)
    const b = random(256)

    setTypeColor('rgb')
    setColor(`rgb(${r},${g},${b})`)
  }
  return (
    <div style={{
      width: '50vw',
      height: '50vh',
      background: color
    }}
    >
      <button onClick={handleHex}>Genera HEX aleatorio </button>
      <button onClick={handleRBG}>Genera RBG aleatorio</button>

      <div className='darkBg'>
        {typeOfColor}

      </div>
      <div className='darkBg'>
        {color}
      </div>
    </div>
  )
}
