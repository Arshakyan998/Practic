import React from "react";

import c from "./main.module.scss";

import ServisWorker from "../servicWorker/ServisWorker";
import useFetching from "../userHooks/useFetching";
import useSerchAndFilter from "../userHooks/useFilter";

import Posts from "./Posts";
import Selected from "./Selected";
import MyInput from "../myInput/MyInput";
import usePagination from "../userHooks/usePagination";
import Pagination from "../components/Pagination";
import Loader from "../Loader/Loader";
import Form from "../MyForm/Form";
import MyButton from "../MyButton/MyButton";
import useLazyLoad from "../userHooks/useLazyLoad";

function Main() {
  const showBlock = React.useRef(null);

  const [posts, setPosts] = React.useState([]);

  const [filter, setFilter] = React.useState({
    sort: "",
    queryRequest: "",
  });

  const [showModalWindow, setShowModalWindow] = React.useState(false);

  const { sort, queryRequest } = filter;

  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [totalPage, setTotalPage] = React.useState(null);

  const [fetching, isLoaded, error] = useFetching(async () => {
    const response = await ServisWorker().getData(page, limit);
    setTotalPage(response.headers["x-total-count"]);
    setPosts([...posts, ...response.data]);
  });

  const pageCount = usePagination(limit, totalPage);

  const filteredPosts = useSerchAndFilter(posts, queryRequest, sort);

  React.useEffect(() => {
    if(queryRequest==="" ){
    fetching();
    }
  }, [queryRequest]);

  React.useEffect(() => {
    fetching();
    
  }, [page]);

  const removePost = (id) => {
    setPosts((prev) => prev.filter((element) => element.id !== id));
  };

  const addNewPost = (val) => {
    setPosts([val,...posts ]);
  };
 let filteredPostsLength=filteredPosts.length

useLazyLoad(isLoaded, showBlock.current, setPage, limit, page,filteredPostsLength);

  let ids = React.useMemo(() => {
    return {
      userId: posts.length + 1,
    };
  }, [posts.length]);


  return (
    <div className={c.main}>
      <MyButton onClick={() => setShowModalWindow(true)}>
        Добавить пост
      </MyButton>
      {showModalWindow && (
        <Form
          addNewPost={addNewPost}
          userId={ids.userId}
          isVisible={setShowModalWindow}
        />
      )}
      <MyInput
        placeholder="search"
        value={filter.queryRequest}
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, queryRequest: e.target.value }))
        }
      />
      <Selected
        options={[
          { value: "title", text: "По заголовку" },
          { value: "body", text: "По описанию" },
        ]}
        defaultValue="сортировать по"
        value={filter}
        setValue={setFilter}
      />
      {error && (
        <h1 style={{ color: "red", textAlign: "center" }}>
          Ошибка по запросу {error}{" "}
        </h1>
      )}

      {!filteredPosts.length && (
        <p style={{ textAlign: "center" }}>
          По вашему запросу нечего не найденно
        </p>
      )}

      <Posts posts={filteredPosts} removePost={removePost} />
      {isLoaded && <Loader />}
      {filteredPosts.length>9&&<div
        ref={showBlock}
        style={{
          height: "35px",
          background: "red",
          textAlign: "center",
          color: "#fff",
          marginBottom: "5px",
          marginTop: "5px",
        } }
      >
        <h2> SHOW MORE</h2>
      </div>}
{
   filteredPosts.length>9&&    <Pagination pages={pageCount} setPage={setPage} page={page} />

}
    </div>
  );
}

export default Main;
