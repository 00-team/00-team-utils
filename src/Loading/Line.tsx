import React, { FC } from 'react'

// points
import { Point } from './Points'

interface LineProps {
    point: Point
    points: Point[]
    index: number
    dur: string | number
}

const MainAnimeProps = {
    fill: 'freeze',
    calcMode: 'spline',
    keyTimes: '0; 1',
    keySplines: '0.35, 0.18, 0.2, 1.0',
}

const AID = (adx: number, idx: number) => `OOTeamLoadingAnime${adx}${idx}`

const Line: FC<LineProps> = ({ point, index, dur, points }) => {
    const LastIndex = points.length - 1

    const NextPoint = index === LastIndex ? points.at(0) : points.at(index + 1)
    if (!NextPoint) return <></>

    const x1 = point[0]
    const y1 = point[1]
    const x2 = NextPoint[0]
    const y2 = NextPoint[1]

    const FirstBegin =
        index === 0 ? `0;${AID(2, LastIndex)}.end` : `${AID(1, index - 1)}.end`
    const SecondBegin =
        index === 0 ? `${AID(1, LastIndex)}.end` : `${AID(2, index - 1)}.end`
    const ResetBegin =
        index === 0 ? `${AID(2, LastIndex)}.end` : `${AID(1, index - 1)}.end`

    return (
        <line x1={x1} y1={y1} x2={x1} y2={y1} visibility='hidden'>
            {/* visibility */}
            <animate
                attributeName='visibility'
                values='visible'
                dur='0s'
                begin={FirstBegin}
                fill='freeze'
            />
            <animate
                attributeName='visibility'
                values='hidden'
                dur='0s'
                begin={`${AID(2, index)}.end`}
                fill='freeze'
            />

            {/* forward */}
            <animate
                id={AID(1, index)}
                attributeName='x2'
                values={`${x1};${x2}`}
                begin={FirstBegin}
                dur={dur}
                {...MainAnimeProps}
            />
            <animate
                attributeName='y2'
                values={`${y1};${y2}`}
                begin={FirstBegin}
                dur={dur}
                {...MainAnimeProps}
            />

            {/* backward */}
            <animate
                id={AID(2, index)}
                attributeName='x1'
                values={`${x1};${x2}`}
                begin={SecondBegin}
                dur={dur}
                {...MainAnimeProps}
            />
            <animate
                attributeName='y1'
                values={`${y1};${y2}`}
                begin={SecondBegin}
                dur={dur}
                {...MainAnimeProps}
            />

            {/* reset */}
            <animate
                attributeName='x1'
                values={`${x1}`}
                dur='0s'
                begin={ResetBegin}
            />
            <animate
                attributeName='y1'
                values={`${y1}`}
                dur='0s'
                begin={ResetBegin}
            />
        </line>
    )
}

export default Line
