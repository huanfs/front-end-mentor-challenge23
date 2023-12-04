
import Button from "./button.jsx";
const Container = ({source, title, description}) => {
    return(
        <section className="card">
            <img src={source}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <Button/>
        </section>
    )
}

export default Container;