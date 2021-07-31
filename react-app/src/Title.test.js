import React from 'react'
import ReactDOM from 'react-dom'
import Title from './Title'

test('renders <Title>', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Title />, div)
    expect(div.querySelector('div').textContent).toBe('Hello World!')
    expect(div.querySelector('div')).toHaveTextContent('Hello World!')
})

/** Check API Docs for Jest DOM here -> https://github.com/testing-library/jest-dom#table-of-contents */
/** create-react-app already imports this module for us in setupTests.js */