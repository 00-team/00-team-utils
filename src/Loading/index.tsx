import React, { FC } from 'react'

// points
import { GetTheShape, Shape } from './Points'

// line
import Line from './Line'

interface LoadingProps {
    duration?: string | number
    shape?: Shape
}

const Loading: FC<LoadingProps> = props => {
    const { duration = '707ms', shape = 'hexagon' } = props
    const { path, points, viewBox } = GetTheShape(shape)

    return (
        <svg viewBox={viewBox}>
            <clipPath id='hex'>
                <path d={path} />
            </clipPath>

            <g clipPath='url(#hex)'>
                {points.map((p, idx) => (
                    <Line
                        point={p}
                        points={points}
                        index={idx}
                        key={idx}
                        dur={duration}
                    />
                ))}
            </g>
        </svg>
    )
}

export { Loading }
