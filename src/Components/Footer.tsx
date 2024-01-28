import footerdata from '../data/footerData';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#a28089' }} className="text-light p-4" >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <p>
              <span className="me-2">
                <img src="https://static.vecteezy.com/system/resources/previews/023/618/290/non_2x/email-icon-clipart-free-free-png.png" alt="Email icon" style={{ width: '24px', height: '24px' }} />
              </span>
              Email: <a href="mailto:avrueda26@hotmail.com" className="text-light">avrueda26@hotmail.com</a>
            </p>

            <p>
              <span className="me-2">
                <img src="https://cdn-icons-png.flaticon.com/512/2934/2934394.png" alt="Email icon" style={{ width: '24px', height: '24px' }} />
              </span>
              Calls: <a href="tel:+573163540243" className="text-light">+57 316 354-0243</a>

            </p>
          </div>
          <div className="col-md-6">
            <h4>Follow Us</h4>
            {footerdata.map((footer, index) => (
              <p key={index}>
                <a href={footer.linkUrl} className="text-light d-flex align-items-center">
                  <img src={footer.iconUrl} alt={`${footer.name} icon`} className="footer-icon me-2" style={{ width: '24px', height: '24px' }} />
                  {footer.name}
                </a>
              </p>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p >© 2023 Juan Ramirez Web Dev. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;