import React from "react";

const Events = () => {
  return (
    <div className="mt-5">
      <h3 className="text-center text-warning">News & Events</h3>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://www.royalcarehospital.in/wp-content/uploads/2024/11/Focused-Treatment.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Focused Treatment Initiative Special Camp
                </h5>
                <p className="card-text">01-11-2024</p>
                <a href="#" className="btn btn-warning">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://www.royalcarehospital.in/wp-content/uploads/2024/11/SRC-thumbnail-600-400.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  SRC’s Center of Excellence in Neurosurgery
                </h5>
                <p className="card-text"> 04-11-2024</p>
                <a href="#" className="btn btn-warning">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://www.royalcarehospital.in/wp-content/uploads/2024/10/jci-news-thumb.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  First Hospital to Achieve JCI Accreditation
                </h5>
                <p className="card-text">17-10-2024</p>
                <a href="#" className="btn btn-warning">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center mt-5">
          <div className="row">
            <div className="col">
              {" "}
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://www.royalcarehospital.in/wp-content/uploads/2024/10/liver-camp-thumb.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Liver Camp</h5>
                  <p className="card-text"> 19-10-2024</p>
                  <a href="#" className="btn btn-warning">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://www.royalcarehospital.in/wp-content/uploads/2024/10/thumb-camp.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Medical Camp at Vellalore</h5>
                  <p className="card-text">06-10-2024</p>
                  <a href="#" className="btn btn-warning">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://www.royalcarehospital.in/wp-content/uploads/2024/10/cardiology-thumb.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Cardiology Camp</h5>
                  <p className="card-text"> 29-09-2024</p>
                  <a href="#" className="btn btn-warning">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
