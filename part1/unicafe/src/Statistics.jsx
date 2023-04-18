import StatisticLine from "./StatisticLine";

const Statistics = ({good, neutral, bad, total}) => {
    return (
        <table>
            <tbody>
                <StatisticLine text="Good" value={good} />
                <StatisticLine text="Neutral" value={neutral} />
                <StatisticLine text="Bad" value={bad} />

                <StatisticLine text="All Feedback" value={good + neutral + bad} />
                <StatisticLine text="Average Score" value={good - bad} />
                <StatisticLine text="Positive Feedback" value={(good / total) * 100} />
            </tbody>
        </table>
    )
}

export default Statistics;