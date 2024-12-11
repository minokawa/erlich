
import { IcoSoc} from "./icons/socials";
import { Logo } from "./logo";
import "@/styles/footer.scss"

export function Footer() {


  return (
    <>
      <footer  className="footer">
      <div className={"footer-nav"}>
        <h3>Company Info</h3>
        <a>About THREADED</a>
        <a>Addiliate</a>
        <a>Blog</a>
        <a>Careers</a>
      </div>
      <div className={"footer-nav"}>
        <h3>Help & Support</h3>
        <a>FAQ</a>
        <a>Shipping</a>
        <a>Returns</a>
        <a>How To Order</a>
        <a>How To Track</a>
      </div>
      <div className={"footer-nav"}>
        <h3>Customer Care</h3>
        <a>Contact Us</a>
        <a>Payment Methods</a>
      </div>
      <div className={"footer-nav"}>
        <h3>Follow Us</h3>
        <a><IcoSoc.Facebook/></a>
        <a><IcoSoc.Insta/></a>
        <a><IcoSoc.Tiktok/></a>
        <a><IcoSoc.PinterestAlt/></a>
        <h3>We Accept</h3>
        <a className="pay-method"><img src="/images/pay1.png" /></a>
        <a className="pay-method"><img src="/images/pay2.png" /></a>
        <a className="pay-method"><img src="/images/pay3.png" /></a>
        <a className="pay-method"><img src="/images/pay4.png" /></a>
        <a className="pay-method"><img src="/images/pay5.png" /></a>
      </div>
      <div className={"footer-nav"}></div>
      </footer>
      <div className="footer-sub">
          <span className="copyright">©2021 THREADED All Rights Reserved.</span>
          <Logo.Standard className="logo"/>
      </div>
    </>
  );
}
