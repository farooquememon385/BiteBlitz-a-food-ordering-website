import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className="footer">
      <div className="share">
        <Link to="#" target="_blank" className="btn">facebook</Link>
        <Link to="#" target="_blank" className="btn">twitter</Link>
        <Link to="#" target="_blank" className="btn">instagram</Link>
        <Link to="#" target="_blank" className="btn">pinterest</Link>
        <Link to="#" target="_blank" className="btn">linkedin</Link>
      </div>

      <h1 className="credit"> created by <span> M Farooq </span> | all rights reserved! </h1>
    </section>
  );
}

export default Footer;
