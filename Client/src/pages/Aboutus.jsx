import React from "react";

const Aboutus = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <img
          src="https://www.royalcarehospital.in/wp-content/uploads/2022/07/common-Banner.jpg"
          alt=""
          className="d-block w-100 img-fluid"
        />
      </div>

      <div className="container mt-5">
        <h5 className="text-dark " style={{ fontSize: "2rem" }}>
          Departments
        </h5>
        <h6 className="text-warning " style={{ fontSize: "1.4rem" }}>
          Exploring the Services of Hospital
        </h6>
        <div className="row">
          <div className="col">
            <p>
              In the heart of Coimbatore, Royal Care Super Speciality Hospital
              has been operating as a multi-speciality hospital since May 1st
              2015. After just one year of operation, our hospital was widely
              recognized by patients and quickly became the preferred hospital
              for emergency, primary, and specialty care in virtually all
              branches of modern medicine in western Tamil Nadu. Providing
              comprehensive healthcare to people is the mission of Royal Care
              Super Specialty Hospital. In order to accomplish this, our
              Chairman meticulously involved himself, bringing together highly
              talented medical professionals with stellar expertise in their
              respective fields, cutting edge innovative diagnostic and
              therapeutic technologies, as well as friendly medical and
              paramedical staff who provide compassionate, courteous care.
            </p>
            <p>
              In Western Tamil Nadu, Royal Care Hospital provides world-class
              healthcare services. As a premier healthcare provider, we offer
              state-of-the-art facilities, dedicated medical professionals, and
              a patient-centered approach. Find the best doctors in their fields
              at Royal Care Hospitals.
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center py-5">
            <div className="row">
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="https://www.royalcarehospital.in/wp-content/uploads/2021/04/33-radiation-oncology.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5>Radiation Oncology</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="https://www.royalcarehospital.in/wp-content/uploads/2021/04/30-renal-transplant.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5>Renal Transplant Unit</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="https://www.royalcarehospital.in/wp-content/uploads/2021/04/33-radiation-oncology.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5>Rheumatology</h5>
                  </div>
                </div>
              </div>
              <div className="col mt-5">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="https://www.royalcarehospital.in/wp-content/uploads/2023/12/Fertility-Centre.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5>Fertility Center</h5>
                  </div>
                </div>
              </div>
              <div className="col mt-5">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="https://www.royalcarehospital.in/wp-content/uploads/2021/04/25-spine-surgery.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5>Surgical Oncology</h5>
                  </div>
                </div>
              </div>
              <div className="col mt-5">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="https://www.royalcarehospital.in/wp-content/uploads/2021/04/10-surgical-oncology.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                  <h5>Surgical Endocrinology</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Aboutus;
