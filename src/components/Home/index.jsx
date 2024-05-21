import Header from "../Header";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div>
    <Header />
    <div className="home-container">
      <h1>Find The Job That Fits Your Life</h1>
      <div className='home-sub-container'>
        <p>Millions of people searching for jobs, salary information, company review. Find the job that fits your abilities and potential</p>
        <Link to= "/jobs" className="link">
          <button className="btn btn-primary home-btn">All Jobs</button>
        </Link>
      </div>
    </div>
    </div> 
  );
};

export default Home;





{/* <div className="home-cont">
      <Header />
      <div className="home-container-inner">
        <h1 className="heading">Find The Job That Fits Your Life</h1>
        <p className="para">Millions of people are searching for jobs, salary information, company reviews. Find the job that fits your abilities and potential.</p>
        <Link to= "/jobs" className="link">
          <button className="btn btn-primary home-btn">All Jobs</button>
        </Link>
      </div>
</div> */}