import { useRef } from 'react'
import { useFullscreen } from 'ahooks'

function App() {
  const ref = useRef(null)
  const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] =
    useFullscreen(ref)
  return (
    <>
      <h3>useFullscreen</h3>
      <div ref={ref} style={{ background: 'red' }}>
        <div style={{ marginBottom: 16 }}>
          {isFullscreen ? 'Fullscreen' : 'Not fullscreen'}
        </div>
        <div>
          <button type="button" onClick={enterFullscreen}>
            enterFullscreen
          </button>
          <button
            type="button"
            onClick={exitFullscreen}
            style={{ margin: '0 8px' }}
          >
            exitFullscreen
          </button>
          <button type="button" onClick={toggleFullscreen}>
            toggleFullscreen
          </button>
        </div>
      </div>
    </>
  )
}

export default App
