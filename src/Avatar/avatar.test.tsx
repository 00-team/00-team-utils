/**
 * @jest-environment jsdom
 */

import React from 'react'
import { act } from 'react-dom/test-utils'
import { render } from 'react-dom'

// Avatar
import { Avatar } from '.'

const picture = 'https://picsum.photos/320/180'
const username = '00-Team'

describe('Avatar', () => {
    let container = document.createElement('div')
    document.body.appendChild(container)

    it('should display image', () => {
        act(() => {
            render(<Avatar picture={picture} />, container)
        })
        const avatar = container.querySelector('img')
        expect(avatar?.src).toBe(picture)
    })

    it('should display svg', () => {
        act(() => {
            render(<Avatar username={username} />, container)
        })
        const avatar = container.querySelector('svg')

        expect(avatar?.tagName).toBe('svg')
        expect(avatar?.textContent).toBe(username.charAt(0))
    })
})
