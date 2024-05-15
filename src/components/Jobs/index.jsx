import { useEffect, useState } from "react";
import Header from "../Header";
import Cookies from "js-cookies";
import DisplayAllJobs from "../DisplayAllJobs";
import FilterSection from "../FilterSection";
import "./index.css"

const Jobs = () => {
  const [allValues, setValues] = useState(
    {
      allJobsList : [],
      showErrorMsg:false
    }
  )

    const token = Cookies.getItem("jwtToken");

  useEffect(() => {
    
    const fetchJobsData = async() =>{
        const url = "https://apis.ccbp.in/jobs";

        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
    
    
        const response = await fetch(url,options);
        // console.log(response);
        const fetchData = await response.json();
        // console.log(fetchData);
        // console.log(fetchData.jobs);
        
        // const updatedData = fetchData.jobs;
        
        // updatedData.map((each)=>{
        //     console.log(each.title);
        // })

        if(response.ok === true){
          setValues({...allValues , allJobsList:fetchData.jobs, showErrorMsg:false})
        }else{
            setValues({...allValues, showErrorMsg:true})
        }
    }
    fetchJobsData()
  }, []);

  return (
    <div className="jobs-container">
        <Header />

        {allValues.showErrorMsg ? (<h1>Its not you its us!!!</h1>) : (

          <div className="jobs-section">
            
            <div className="filter-section">
              <FilterSection/>
            </div>

            <div className="all-jobs-section">
              <input type="search" className="form-control w-50"/>
              <ul className="w-100">
                {
                  allValues.allJobsList.map((each)=>{

                    return <DisplayAllJobs jobsItem={each} key={each.id}/>
                  })
                }
              </ul>
              
            </div>
          </div>
        )}

    </div>
  );
};

export default Jobs;
