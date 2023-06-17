

const Modal = ({activeID, setShowModal}) => {
    const portfolio = portfolio.find(portfolio => portfolio.id === activeID);



    return (
        <div className="" >
            <img src={portfolio.imgurl} alt="" />
        </div>
    );
    
    
}
 
export default Modal;