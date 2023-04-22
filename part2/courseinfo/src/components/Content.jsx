import Part from './Part'

const Content = ({ parts }) => {

    const total = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0,
    );

    return (
        <div className='wrapper'>
            <table>
                <tbody>
                {
                    parts.map(part => {
                        return <Part key={part.id} name={part.name} exercises={part.exercises}/>
                    })
                }
                <tr>
                    <td>Total Exercises:</td>
                    <td>{total}</td>
                </tr>
            </tbody>
        </table>

        </div>
    )
}

export default Content
