import './Popup.css';

const Popup = ({ isError = true, isPopupOpen, message }) => {
  return (
    <div className={`popup ${isPopupOpen && 'popup_visible'} ${!isError && 'popup_success'}`}>
      {message}
    </div>
  )
}

export default Popup;