import { contact } from "../../data/contact";
import './ContactPanel.css'
import {SiGithub, SiGmail} from "react-icons/si";
import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa';


const ContactPanel = () => {
  return (
    <>
    <p style={{ color: "#febc2e" }}>CONTACTO:</p>
      <a className="contact-links" href={`mailto:${contact.email}`} target="_blank"><SiGmail style={{ color: '#c72c0d', fontSize: '20px' }} target="_blank"/> Enviame un correo</a>
      <br /><br />
      <a className="contact-links" href={contact.github} target="_blank"><SiGithub style={{ color: '#F0F6FC', fontSize: '22px' }}/>  Visita mi GitHub</a>
      <br /><br />
      <a className="contact-links" href={contact.linkedin} target="_blank"><FaLinkedin style={{ color: '#0A66C2', fontSize: '22px' }}/> Encuentrame en LinkedIn</a>
      <br /><br />
      <a className="contact-links" href={contact.cv} target="_blank">📄 Descarga mi CV</a>

      
    </>
  );
};

export default ContactPanel;