
import  "./button.css";

function Button_(props){
    const {namePlan,name, type, backgroundColor, onClick, Value } = props;
    return(
        <>
            <button type={type}  className="generalBtn" name={name} value={Value}
                style={{
                    backgroundColor:(backgroundColor != null)?backgroundColor: "teal",
                }}
                onClick= {onClick}
            >
                {namePlan}
            </button>
        </>
    )
}

export default Button_;