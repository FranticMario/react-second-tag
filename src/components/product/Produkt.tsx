import "./Produkt.css";

interface ProduktProps {
    urlImg: string,
    title: string,
    price: number,
}

const Produkt: React.FC<ProduktProps> = (props) => {
    return (
        <div className="produkt__card">
            <div className="img__box">
                <img src={props.urlImg} alt={props.title} />
            </div>
            <h1 className="produkt__title">{props.title}</h1>
            <h2 className="produkt__title">${props.price}</h2>
            <a href="" className="produkt__btn">Buy now</a>
        </div>

    );
}
    

 
export default Produkt