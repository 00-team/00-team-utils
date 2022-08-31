import React, { FC, useEffect, useRef, useState } from 'react'

import { sleep } from '..'

const DEFAULT_FRAMES: Keyframe[] = [
    { opacity: 1, offset: 0 },
    { opacity: 1, offset: 0.4 },
    { opacity: 0, offset: 0.6 },
    { opacity: 0, offset: 1 },
]

const DEFAULT_OPTIONS: KeyframeAnimationOptions = {
    duration: 600,
    easing: 'linear',
    iterations: Infinity,
    direction: 'alternate',
}

type Delayer = (() => number) | number

interface TyperProps {
    words: [string, ...string[]]
    WriteDelay?: Delayer
    DeleteDelay?: Delayer
    MidDelay?: Delayer
    EndDelay?: Delayer
    CursorFrames?: Keyframe[]
    CursorOptions?: KeyframeAnimationOptions
}

const Typer: FC<TyperProps> = ({ words, ...props }) => {
    const { CursorFrames = DEFAULT_FRAMES } = props
    const { DeleteDelay = 100, WriteDelay = 100 } = props
    const { MidDelay = 1500, EndDelay = 500 } = props
    const { CursorOptions = DEFAULT_OPTIONS } = props

    const [word, setWord] = useState('')
    const cursor = useRef<HTMLSpanElement>(null)

    const GetDelayed = (delayer: Delayer) => {
        if (typeof delayer === 'number') return delayer
        else return delayer()
    }

    const Loop = async () => {
        let word_index = 0

        while (true) {
            let w = words[word_index]!

            // write
            for (const char of w.split('')) {
                setWord(w => w + char)
                await sleep(GetDelayed(WriteDelay))
            }

            await sleep(GetDelayed(MidDelay))

            // delete
            for (let i = 0; i < w.length; i++) {
                setWord(w => w.slice(0, -1))
                await sleep(GetDelayed(DeleteDelay))
            }

            await sleep(GetDelayed(EndDelay))

            word_index++
            if (word_index >= words.length) word_index = 0
        }
    }

    useEffect(() => {
        Loop()
    }, [words])

    useEffect(() => {
        if (!cursor.current) return

        cursor.current.animate(CursorFrames, CursorOptions)
    }, [cursor])

    return (
        <>
            <span className='word'>{word}</span>
            <span className='cursor' ref={cursor} />
        </>
    )
}

export { Typer }
