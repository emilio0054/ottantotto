import { Link } from 'react-scroll'
import './sideBar.css'

export const SideBar = () => {
  return (
    <div className='d-flex flex-column justify-content-center side-bar-container'>
        <a href='tel:930381911' target='_blank' className='btn'><i className="bi bi-telephone"></i></a>
        <a href='https://api.whatsapp.com/send?phone=34722194408&text=¡Hola!%20quiero%20hacer%20una
%20reserva:%20(incluye%20cantidad%20de%20personas,%20día%20y%20hora%20en%20tu%20solicitud.)' target='_blank' className='btn'><i className="bi bi-whatsapp"></i></a>
        <a href='https://www.instagram.com/pizzeriaottantotto/' target='_blank' className='btn'><i className="bi bi-instagram"></i></a>
        <Link 
        to='home-view' 
        smooth={true}
        duration={500} 
        className='btn'
        >
          <img src='/assets/chevron.png' width='20px' className='me-1' />
        </Link>
    </div>
  )
}
