import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faShield, faPhone} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="iconbox">
      <div className="iconbox-truck">
      <FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon>
      <span>Hızlı Teslimat</span>
      </div>
      <div className="iconbox-shield">
      <FontAwesomeIcon icon={faShield}></FontAwesomeIcon>
      <span>Güvenli Alışveriş</span>
      </div>
     <div className="iconbox-phone">
     <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
     <span>Müşteri Hizmetleri  0850 850 850</span>
     </div>
      </div>
    </div>
  )
}

export default Footer;