import React from "react";

const Careers = () => {
  const jobs = [
    {
      title: "Delivery Executive",
      location: "Bhubaneswar, Odisha",
      type: "Full Time",
      description:
        "Timely delivery of groceries with excellent customer interaction. Must have a bike and a smartphone.",
    },
    {
      title: "Warehouse Associate",
      location: "Bhubaneswar, Odisha",
      type: "Full Time",
      description:
        "Responsible for packaging, sorting, and maintaining inventory in the warehouse.",
    },
    {
      title: "Customer Support Executive",
      location: "Remote",
      type: "Part Time",
      description:
        "Assist customers via chat or phone with order-related queries and issues.",
    },
    {
      title: "Frontend Developer (React.js)",
      location: "Remote",
      type: "Internship",
      description:
        "Help build and maintain our web interfaces for the grocery platform using React.js.",
    },
  ];

  return (
    <div className="careers-container">
      <div className="row">
        <div className="col-md-12 mb-6">
          <div className="section-head text-center mt-8">
            <h1 className="h3style" style={{ color: "green" }} data-title="Join Our Grocery Team">
              Join Our Grocery Team
            </h1>
            <div className="wt-separator bg-primarys"></div>
            <div className="wt-separator2 bg-primarys"></div>
            {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
          </div>
        </div>
      </div>
      <p className="careers-intro">
        We’re on a mission to deliver groceries fast, fresh, and affordably.
        Want to be part of our growing family? Check out the open roles below.
      </p>

      <div className="job-list">
        <div className="row">
          {jobs.map((job, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="job-card">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-info">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="job-info">
                  <strong>Type:</strong> {job.type}
                </p>
                <p className="job-desc">{job.description}</p>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
