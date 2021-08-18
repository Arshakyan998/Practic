import React from "react";

function useSorted(posts, key) {
  const result = React.useMemo(() => {
    if (key) {
      return [...posts].sort((a, b) => a[key].localeCompare(b[key]));
    } else {
      return posts;
    }
  }, [posts, key]);

  return result;
}

 const useSerchAndFilter=(posts, query, key)=> {
  const sorted= useSorted(posts, key);



  const result = React.useMemo(() => {
    if (query) {
      const result = [...posts].filter((element) =>
        element.title.toLowerCase().includes(query.toLowerCase())
      );
      return result
    }
    return sorted;
  }, [query,key,posts]);


  return result
}
export default useSerchAndFilter