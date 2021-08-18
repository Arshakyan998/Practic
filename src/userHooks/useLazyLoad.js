import React from "react";

function useLazyLoad(isLoaded,showBlock,setPage,limit,page,filteredPostsLength) {
        let obsorver=React.useRef(null)


  React.useMemo(()=>{
        if(isLoaded) return
         if(obsorver.current!==null) obsorver.current.disconnect()//disconnect@ lriv qanduma
        var callback = function(entries) {
          if(entries[0].isIntersecting && page<limit){
           
            setPage(prev=>page+1)
          }
      };
      obsorver.current = new IntersectionObserver(callback);
      obsorver.current.observe(showBlock); //obsorv@ eti ena inchi html elementin inq@ petqa hetevi
    
      },[isLoaded])
      

}

export default useLazyLoad