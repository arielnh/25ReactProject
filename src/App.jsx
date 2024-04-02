import './App.css'
import Accordian from './components/acordian/accordian'
import RandomeColor from './components/random-color'
import { StarRating } from './components/star-rating'

function App () {
  return (
    <>
      <h1>Proyecto 1</h1>
      <Accordian />

      <h1>Proyecto 2</h1>
      <RandomeColor />

      <h1>Proyecto 3</h1>
      <StarRating />
    </>
  )
}

export default App
