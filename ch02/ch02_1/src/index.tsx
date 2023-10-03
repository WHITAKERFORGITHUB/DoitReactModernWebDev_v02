import React from 'react'
import ReactDOM from 'react-dom/client'

const pVirtualDOM = React.createElement('p', null, 'Hello virtual Sangwoo DOM 땅우라서 좋았는데 마냥 따스해서 좋았는데')
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(pVirtualDOM)
