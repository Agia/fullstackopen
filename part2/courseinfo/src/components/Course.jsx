import Header from "./Header";
import Content from "./Content";

const Course = ({course, parts}) => {


    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
        </div>
    )
}

export default Course;