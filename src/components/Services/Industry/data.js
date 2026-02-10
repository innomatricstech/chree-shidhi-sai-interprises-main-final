import techExcel from "../../../assets/technicalExcellence.jpg"
import safety from "../../../assets/safetyFirst.avif"
import quality from "../../../assets/qualityAssurance.webp"
import reliability from "../../../assets/reliableFlexible.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBank,
  faBuilding,
  faBuildingNgo,
  faCar,
  faChild,
  faEnvelope,
  faHandshakeAlt,
  faLock,
  faPaw,
  faPhone,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FaExclamationCircle, FaOilCan, FaExplosion, FaWrench, FaTools, FaMapMarkedAlt, FaHandshake, Fa500Px } from 'react-icons/fa';
import { faFirstAid } from "@fortawesome/free-solid-svg-icons/faFirstAid";
import { faSmile } from "@fortawesome/free-solid-svg-icons/faSmile";
import { faTools } from "@fortawesome/free-solid-svg-icons/faTools";

const data = [
  
    
    
      {
        icon: faTools,
        image: techExcel,
        title: 'Technical Excellence',
        description: 'Proficient in complex demolition and excavation projects.'
      },
      {
        icon: faFirstAid,
        image: safety,
        title: 'Safety First',
        description: 'Certified workers and robust safety protocols ensure a secure working environment.'
      },
      {
        icon: faSmile,
        image: quality,
        title: 'Quality Assurance',
        description: 'Commitment to delivering superior results and client satisfaction.'
      },
      {
        icon: faHandshakeAlt,
        image: reliability,
        title: 'Reliability, Flexibility, Efficiency',
        description: 'Tailored services that minimize disruption and optimize project efficiency.'
      }
    
  
];

export default data;
