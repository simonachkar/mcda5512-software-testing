import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './HelloWorld'

test('renders HelloWorld', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HelloWorld />, div)
    expect(div.querySelector('div').textContent).toBe('Hello World!')
})