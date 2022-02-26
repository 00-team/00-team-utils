import React, { FC } from 'react'

type ITEM = string | undefined | null
interface AvatarProps {
    picture?: ITEM
    username?: ITEM
}

export const Avatar: FC<AvatarProps> = ({ picture, username }) => {
    if (picture) {
        return (
            <img
                src={picture}
                draggable={false}
                alt={`${username || 'user'} avatar`}
                onContextMenu={e => e.preventDefault()}
            />
        )
    } else {
        const Color = COLOR()
        return (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 500 500'
            >
                <rect
                    x='0'
                    y='0'
                    width='100%'
                    height='100%'
                    rx='0'
                    fill={Color.b}
                />

                <text
                    x='50%'
                    y='50%'
                    dy='.1em'
                    fill={Color.c}
                    textAnchor='middle'
                    dominantBaseline='middle'
                    style={{
                        fontFamily: 'inherit',
                        fontSize: '300px',
                        lineHeight: 1,
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                    }}
                >
                    {FirstChar(username)}
                </text>

                <defs>
                    <linearGradient
                        id='gradient'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='0'
                    >
                        <stop offset='0%' stopColor='#ff0000' />
                        <stop offset='10%' stopColor='#ff9a00' />
                        <stop offset='20%' stopColor='#d0de21' />

                        <stop offset='30%' stopColor='#4fdc4a' />
                        <stop offset='40%' stopColor='#3fdad8' />
                        <stop offset='50%' stopColor='#2fc9e2' />

                        <stop offset='60%' stopColor='#1c7fee' />
                        <stop offset='70%' stopColor='#5f15f2' />
                        <stop offset='80%' stopColor='#ba0cf8' />

                        <stop offset='90%' stopColor='#fb07d9' />
                        <stop offset='100%' stopColor='#ff0000' />
                    </linearGradient>

                    <pattern
                        id='pattern'
                        x='0'
                        y='0'
                        width='300%'
                        height='100%'
                        patternUnits='userSpaceOnUse'
                    >
                        <rect
                            x='0'
                            y='0'
                            width='150%'
                            height='100%'
                            fill='url(#gradient)'
                        >
                            <animate
                                attributeType='XML'
                                attributeName='x'
                                from='0'
                                to='150%'
                                dur='3s'
                                repeatCount='indefinite'
                            />
                        </rect>
                        <rect
                            x='-150%'
                            y='0'
                            width='150%'
                            height='100%'
                            fill='url(#gradient)'
                        >
                            <animate
                                attributeType='XML'
                                attributeName='x'
                                from='-150%'
                                to='0'
                                dur='3s'
                                repeatCount='indefinite'
                            />
                        </rect>
                    </pattern>
                </defs>
            </svg>
        )
    }
}

const FirstChar = (username?: ITEM) => {
    if (username && username.charAt(0)) return username.charAt(0)
    else return 'G'
}

// b == background color
// c == color
const COLOR = (): { b: string; c: string } => {
    const rgb = Math.floor(Math.random() * 16777215)
    const hex = '#' + rgb.toString(16)

    if (hex.length !== 7) {
        return COLOR()
    }

    let c = '#fff'

    const r = (rgb >> 16) & 0xff
    const g = (rgb >> 8) & 0xff
    const b = (rgb >> 0) & 0xff

    const rate = 0.2126 * r + 0.7152 * g + 0.0722 * b

    // if background was too bright the color gonna be black
    if (rate > 200) c = '#000'

    // easteregg
    if (Math.floor(Math.random() * 1000) === 707) {
        return { b: '#040404', c: 'url(#pattern)' }
    }

    return { b: hex, c: c }
}
