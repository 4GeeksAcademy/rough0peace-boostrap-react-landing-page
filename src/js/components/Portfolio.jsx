import { Button } from "bootstrap";

const Card = ({ image, content, Button }) => {
  return (
    <div className="card" style="width: 18rem;">
      <img src="..." className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export const Portfolio = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">$</div>
        <div className="col">$</div>
        <div className="col">$</div>
        <div className="col">$</div>
      </div>
    </div>
  );
};
