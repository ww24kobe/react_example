import { useState, useEffect } from 'react'
import { Wcontainer, Wbar } from '@alicloud/cloud-charts'

import LineGraphy from './components/LineGraphy'
import LineGraphy2 from './components/LineGraphy2'
import WpieDemo from './components/WpieDemo'
import WpieDemo2 from './components/WpieDemo2'
import Wradar from './components/Wradar'

const data = [
  {
    name: '柱1',
    data: [
      ['一', 59],
      ['二', 23],
      ['三', 19],
      ['四', 27],
      ['五', 77],
      ['六', 100],
      ['七', 70],
      ['八', 61],
      ['九', 15],
    ],
  },
  {
    name: '柱2',
    data: [
      ['一', 92],
      ['二', 15],
      ['三', 4],
      ['四', 49],
      ['五', 64],
      ['六', 76],
      ['七', 21],
      ['八', 100],
      ['九', 71],
    ],
  },
]

const options = {
  padding: [40, 5, 24, 29],
}

function App() {
  return (
    <>
      <Wcontainer className="demos">
        <Wbar height="300" config={options} data={data} />
      </Wcontainer>
      <LineGraphy />
      <LineGraphy2 />
      <WpieDemo />
      <WpieDemo2 />
      <Wradar />
    </>
  )
}

export default App
