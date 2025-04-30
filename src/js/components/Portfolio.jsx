const Card = ({ image, content }) => {
  return (
    <div className="card p-0 mx-auto" style={{ width: "18rem" }}>
      <img src="./src/img/rigo-baby.jpg" className="card-img-top" alt="..."></img>
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
    <div className="text-center mt-5 w-100">
      <div className="row d-flex justify-content-between justify-content-sm-center mx-auto"> 
        <div className="col mt-3 p-0"><Card /></div>
        <div className="col mt-3 p-0"><Card /></div>
        <div className="col mt-3 p-0"><Card /></div>
        <div className="col mt-3 p-0"><Card /></div>
      </div>
    </div>
  );
};
