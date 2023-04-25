import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const Modal = (props) => {
    
    const styles = {
        width: '350px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        alignItems: 'center',
        justifyContent: 'center' ,
        fontFamily: 'Karla, sans-serif',   
    
    }
  return (

    <div style={styles}>
        <h4>Your Resume is Saved</h4>
        <FontAwesomeIcon icon={faCircleCheck} beat color={'#f02d3a'} fontSize = {32}/>
    </div>
  )
};

export default Modal;
