import '../../src/components/styles/footer.css'; // Import your custom CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
import SubscribeCard from './SubscribeCard';
import logo_bw from '../assests1/logo_bw.png'; // Logo import


const Footer = () => {
  return (
    <div className='relative z-10'>
      <SubscribeCard />
      <footer className="footer relative">
        <div className="container mx-auto">
          <div className="footer-row">
            {/* Company Section */}
            <div className="footer-col">
              <h4 className="footer-heading">company</h4>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Our Services</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Affiliate Program</a></li>
              </ul>
            </div>

            {/* Get Help Section */}
            <div className="footer-col">
              <h4 className="footer-heading">get help</h4>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">FAQ</a></li>
                <li><a href="#" className="footer-link">Shipping</a></li>
                <li><a href="#" className="footer-link">returns</a></li>
                <li><a href="#" className="footer-link">order status</a></li>
                <li><a href="#" className="footer-link">payment options</a></li>
              </ul>
            </div>

            {/* Address Section */}
            <div className="footer-col">
              <h4 className="footer-heading">Address</h4>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">512, Pyramid Axis,</a></li>
                <li><a href="#" className="footer-link">Baner, Pune,</a></li>
                <li><a href="#" className="footer-link">Maharashtra, India 411045</a></li>
                <li><a href="#" className="footer-link">info@diacto.com</a></li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="footer-col relative z-10">
              <h4 className="footer-heading">follow us</h4>
              <div className="social-links">
                <a href="#" className="social-icon bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Logo in the bottom-left corner */}
        <img src={logo_bw} alt="Logo" className="footer-logo" />
      </footer>
    </div>
  );
};

export default Footer;
