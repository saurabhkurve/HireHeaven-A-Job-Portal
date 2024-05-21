import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";

import "./index.css"

const DisplayAllJobs = (props) => {

  const {jobsItem} = props;
  return (
    <div>
      <Link to={`/jobs/${jobsItem.id}`} className="all-jobs-card">
        <li className="jobs-card">
          <div className="title-icon-rating-cont">
           
           <img className="card-icon" src={jobsItem.company_logo_url} alt="company logo"/>
           
            <div>
              <h4>{jobsItem.title}</h4>
              <FaStar className="rating-icon"/> 
              <span className="mt-1">{jobsItem.rating}</span>
            </div>
          </div>

          <div className="location-emptype-package-cont">
            <div className="d-flex flex-row gap-1">
              <span className="me-1 icons-location-type"><FaLocationDot/></span>
              <p className="me-2">{jobsItem.location}</p>
              <span className="me-1 icons-location-type"> <BsBriefcaseFill/></span>
              <p className="me-2">{jobsItem.employment_type}</p>
            </div>

            <h5>{jobsItem.package_per_annum}</h5>

          </div>
          <hr />
          <h5>Description</h5>
          <p>{jobsItem.job_description}</p>
        </li>
        </Link>
    </div>
  )
}

export default DisplayAllJobs;