import React from "react";

function usePagination(limit, totalPage) {
 let pageCounts = Math.ceil(totalPage / limit);
  let result = [];

  const pageCoutn=React.useMemo(()=>{
for(let i=1; i<=pageCounts;i++){
        result.push(i)
}
return result
  },[limit, totalPage])



  return pageCoutn
     
}

export default usePagination;
