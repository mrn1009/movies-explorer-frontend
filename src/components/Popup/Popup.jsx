import './Popup.css';

const Popup = ({ children, isPopupOpen }) => {
    return (
        <div className={`popup ${isPopupOpen && 'popup_visible'}`}>
            {children}
        </div>
    )
}

export default Popup;