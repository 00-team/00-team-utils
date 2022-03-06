type Point = [number, number]

interface Unit {
    viewBox: string
    points: Point[]
}

type Key = 'hexagon' | 'triangle'

type Shape = Key | Unit

type DataBaseType = {
    [k in Key]: Unit
}

export { Point, Key, Shape, DataBaseType }

const DataBase: DataBaseType = {
    hexagon: {
        viewBox: '0 0 6 6',
        points: [
            [1.5, 0.4],
            [0, 3],
            [1.5, 5.6],
            [4.5, 5.6],
            [6, 3],
            [4.5, 0.4],
        ],
    },
    triangle: {
        viewBox: '0 0 1 1',
        points: [
            [0, 1],
            [1, 1],
            [0.5, 0.134],
        ],
    },
}

export { DataBase }

const toPath = (ps: Point[]) => 'M' + ps.map(p => `${p[0]} ${p[1]}`).join(' ')

type GTS = (shape: Shape) => { path: string; points: Point[]; viewBox: string }
const GetTheShape: GTS = shape => {
    if (typeof shape !== 'string')
        return {
            path: toPath(shape.points),
            ...shape,
        }

    const unit = DataBase[shape]

    return {
        path: toPath(unit.points),
        ...unit,
    }
}

export { toPath, GetTheShape }
