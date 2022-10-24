import { useState } from 'react'
import './App.css'
import Buttonnext from './components/Buttonnext'
import Quotebox from './components/Quotebox'
import pharses from './pharses.json'

function App() {

  const [index, setIndex] = useState(Math.floor(Math.random() * pharses.length))

  const increment = () => {
    setIndex(Math.floor(Math.random() * pharses.length))
  }
  const colorsChange = ["#845EC2" , "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"]

  const colorUltimate = colorsChange[Math.floor(Math.random() * colorsChange.length)]

  return (
    <div className="App" style={{backgroundColor:colorUltimate}}>
      <div className='Card-two'>
      <Quotebox index={index} colorUltimate={colorUltimate}/>
      <Buttonnext increment={increment} colorUltimate={colorUltimate}/>
      </div>
    </div>
  )
}

export default App
