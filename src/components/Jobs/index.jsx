import { useEffect, useState } from "react";
import Header from "../Header";
import Cookies from "js-cookies";
import DisplayAllJobs from "../DisplayAllJobs";
import FilterSection from "../FilterSection";
import { FaSearch } from "react-icons/fa";
import "./index.css";

const Jobs = () => {
  const [allValues, setValues] = useState({
    allJobsList: [],
    showErrorMsg: false,
    empType: [],
    minPackage: "",
    searchInput: "",
  });

  const token = Cookies.getItem("jwtToken");

  useEffect(() => {
    console.log(allValues.empType);

    const fetchJobsData = async () => {
      const url = ` https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.minPackage}&search=${allValues.searchInput}`;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);
      // console.log(response);
      const fetchData = await response.json();
      console.log(fetchData);
      // console.log(fetchData.jobs);

      // const updatedData = fetchData.jobs;

      // updatedData.map((each)=>{
      //     console.log(each.title);
      // })

      if (response.ok === true) {
        setValues({
          ...allValues,
          allJobsList: fetchData.jobs,
          showErrorMsg: false,
        });
      } else {
        setValues({ ...allValues, showErrorMsg: true });
      }
    };
    fetchJobsData();
  }, [allValues.searchInput, allValues.empType, allValues.minPackage]);

  //! onChangeInput function
  const onChangeSearchInput = (event) => {
    // console.log(event.key);
    if (event.key === "Enter") {
      setValues({ ...allValues, searchInput: event.target.value });
    }
  };
  
  //!onChangeEmpType
  const onChangeEmpType = (value, isChecked) => {
    // console.log(value);
    if (isChecked === true) {
      setValues({ ...allValues, empType: [...allValues.empType, value] });
    }else{
      setValues({ ...allValues, empType: allValues.empType.filter((each) => (each !== value))});
    }
  };

  //!onChangeEmpRange
  const onChangeSalaryRange = (SalaryRange, isChecked) => {
    if (isChecked) {
      setValues({ ...allValues, minPackage: SalaryRange });
    } 
    // else {
    //   setValues({ ...allValues, minPackage: "" });
    // }
  }

  const handleSearch = () => {
    const searchInput = document.querySelector(".input-search").value;
    setValues({ ...allValues, searchInput });
  };

  return (
    <div className="jobs-container">
      <Header />

      {allValues.showErrorMsg ? (
        <h1>Its not you its us!!!</h1>
      ) : (
        <div className="jobs-section">
          <div className="filter-section">
            <FilterSection
              onChangeEmpType={onChangeEmpType}
              onChangeSalaryRange={onChangeSalaryRange}
            />
          </div>

          <div className="all-jobs-section">
            <div className="w-100 input-container">
              <input
                type="search"
                className="form-control w-50 input-search bg-transparent text-white"
                onKeyDown={onChangeSearchInput}
                placeholder="Search"
              />
              <span className="search-icon">
                <FaSearch onClick={handleSearch} />
              </span>
            </div>
            <ul className="w-100">
              {allValues.allJobsList.map((each) => {
                return (
                  <DisplayAllJobs jobsItem={each} key={each.id} />
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
