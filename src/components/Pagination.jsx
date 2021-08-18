import React from "react";

import './pagination.scss'


function Pagination({ pages,setPage,page }) {

const changeCurrentPage=(e)=>{
        setPage(e)
}

  return (
    <div className="main_page">
      {
    
          pages.map((element) => {
 return <span key={element} 
 className={element===page?"active":""} 
 onClick={()=>changeCurrentPage(element)}>{element}</span>;
          })
      
      }
    </div>
  );
}

export default Pagination;
