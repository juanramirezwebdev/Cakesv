import footerdata from '../data/footerData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-2">
              {/* Email */}
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl mr-2" />
                <a href="mailto:avrueda26@hotmail.com" className="text-white hover:text-gray-300">avrueda26@hotmail.com</a>
              </div>
              {/* Phone */}
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-xl mr-2" />
                <a href="tel:+57 3163540243" className="text-white hover:text-gray-300">+57 3163540243</a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-col space-y-2">
              {footerdata.map((footer, index) => (
                <a key={index} href={footer.linkUrl} className="text-white flex items-center hover:text-gray-300">
                  <img src={footer.iconUrl} alt={`${footer.name} icon`} className="footer-icon mr-2 w-6 h-6" />
                  {footer.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-purple-600 mt-6 pt-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Victoria Rueda Cakes. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
