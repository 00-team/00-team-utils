import { Component } from 'react'

type CheckEnd = (count: number, end: number) => boolean
type Operation = (count: number, accumulator: number) => number
type GetAccumulator = () => number

interface CountAnimProps {
    end: number
    speed?: number
    start?: number
    format?: false
    CheckEnd?: CheckEnd
    Operation?: Operation
    GetAccumulator?: GetAccumulator
}

interface CountAnimState {
    Count: number
    accumulator: number
}

class CountAnim extends Component<CountAnimProps, CountAnimState> {
    override state: CountAnimState = {
        Count: this.props.start || 0,
        accumulator: 0,
    }

    private formatter = new Intl.NumberFormat()

    private UpdaterID: NodeJS.Timer | null = null
    private ClearUpdater() {
        if (this.UpdaterID) {
            clearInterval(this.UpdaterID)
            this.UpdaterID = null
        }
    }

    private CheckEnd: CheckEnd = (count, end) => {
        return end <= count
    }
    private Operation: Operation = (count, accumulator) => {
        return Math.ceil(count + accumulator)
    }

    private UpdateCounterPr() {
        this.setState(s => {
            if (!this.CheckEnd(s.Count, this.props.end)) {
                let result = this.Operation(s.Count, s.accumulator)
                if (this.CheckEnd(result, this.props.end)) {
                    this.ClearUpdater()
                    return { Count: this.props.end }
                }
                return { Count: result }
            }

            this.ClearUpdater()
            return null
        })
    }
    UpdateCounter = this.UpdateCounterPr.bind(this)

    private StartUpdate() {
        this.ClearUpdater()
        this.UpdaterID = setInterval(this.UpdateCounter, this.props.speed || 70)
    }

    private GetAccumulator() {
        // if you divide to some number like 77 its gives better animation
        return Math.ceil((this.props.end / 77) * 1e5) / 1e5
    }

    override componentDidMount() {
        if (this.props.CheckEnd) this.CheckEnd = this.props.CheckEnd
        if (this.props.Operation) this.Operation = this.props.Operation
        if (this.props.GetAccumulator)
            this.GetAccumulator = this.props.GetAccumulator

        this.setState({ accumulator: this.GetAccumulator() })
        this.StartUpdate()
    }

    override componentDidUpdate(prevProps: CountAnimProps) {
        if (
            prevProps.end !== this.props.end ||
            prevProps.start !== this.props.start
        ) {
            if (typeof this.props.start === 'number')
                this.setState({ Count: this.props.start })

            this.setState({ accumulator: this.GetAccumulator() })

            this.StartUpdate()
        }
    }

    override render(): string {
        if (this.props.format === false) return this.state.Count.toString()

        return this.formatter.format(this.state.Count).toString()
    }
}

export { CountAnim }
export default CountAnim
