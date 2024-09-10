import Split from 'react-split'
import { createContext, useState } from 'react'

import Navbar from '../components/navbar'
import Editor from '@renderer/components/editor'

export const CodeContext = createContext<any>(null)

const App = () => {
  const [collapsedIdx, setCollapsedIdx] = useState<number>(1)

  const [viewData, setViewData] = useState({
    successfulViewData: {},
    darkSide: false
  })

  return (
    <div className="wrapper">
      <CodeContext.Provider value={{ viewData, setViewData }}>
        <Navbar />
        <Split
          style={{ display: 'flex' }}
          sizes={[25, 75]}
          gutterSize={10}
          collapsed={collapsedIdx}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          cursor="col-resize"
        >
          <div className="editor-view">
            <div
              className="editor-view-btn"
              onClick={() => {
                if (collapsedIdx === 0) setCollapsedIdx(1)
                else setCollapsedIdx(0)
              }}
            >
              {collapsedIdx === 1 ? '<' : '>'}
            </div>
            <Editor />
          </div>
          <div className="visualizer-wrapper">
            {/* <Visualizer /> */}
          </div>
        </Split>
      </CodeContext.Provider>
    </div>
  )
}

export default App
