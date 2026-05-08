/**
 * @jest-environment jsdom
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    expect(div).toBeTruthy()
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the starter code text', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    expect(div.textContent).toContain('Starter Code')
    ReactDOM.unmountComponentAtNode(div)
  })
})
