
import  "./button.css";

function Button_(props){
    const {name, type, backgroundColor, } = props;
    return(
        <>
            <button type={type}  className="generalBtn"
                style={{
                    backgroundColor:(backgroundColor != null)?backgroundColor: "teal",
                }}
            >
                {name}
            </button>
        </>
    )
}

export default Button_;