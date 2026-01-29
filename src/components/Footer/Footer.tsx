import "./Footer.css";
const Footer = () => {
  return (
    <p className="footer">
      &copy; {new Date().getFullYear()} Avinash Verma. All Rights Reserved.
    </p>
  );
};

export default Footer;
