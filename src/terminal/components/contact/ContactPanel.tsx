import { contact } from "../../data/contact";
import './ContactPanel.css'
import {SiGithub} from "react-icons/si";
import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa';


const ContactPanel = () => {
  return (
    <>
      <a className="contact-links" href={`mailto:${contact.email}`} target="_blank">✉️ Enviame un correo</a>
      <br /><br />
      <a className="contact-links" href={contact.github}><SiGithub style={{ color: '#F0F6FC', fontSize: '20px' }} target="_blank"/>  Visita mi GitHub</a>
      <br /><br />
      <a className="contact-links" href={contact.linkedin}><FaLinkedin style={{ color: '#F0F6FC', fontSize: '20px' }} target="_blank"/> Encuentrame en LinkedIn</a>
      <br /><br />
      <a className="contact-links" href={contact.cv} target="_blank">📄 Descarga mi CV</a>

      
    </>
  );
};

export default ContactPanel;