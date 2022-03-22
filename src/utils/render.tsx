import React, { FC, createElement, ReactHTML } from 'react'

interface RenderProps {
    doc: string
    type?: keyof ReactHTML
    attrs?: object
}

const PrepareTheDoc = (doc: string) =>
    doc
        .replaceAll('\r', '')
        .split('\n')
        .map(line => {
            if (line) {
                let list = line.split('')
                if (list.length > 0 && list.every(w => w === ' ')) return ''
            }

            return line
        })

const NiceDoc: FC<RenderProps> = ({ doc, type = 'div', attrs }) => {
    if (!doc) return <></>

    return (
        <>
            {PrepareTheDoc(doc).map((line, idx) =>
                line ? (
                    createElement(type, { key: idx, ...attrs }, line)
                ) : (
                    <br key={idx} />
                )
            )}
        </>
    )
}

export { NiceDoc }
