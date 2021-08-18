import React from "react";
import Main from "../components/Main";

import MyButton from "../MyButton/MyButton";
import MyInput from "../myInput/MyInput";
import ServisWorker from "../servicWorker/ServisWorker";
import useFetching from "../userHooks/useFetching";

import "./form.scss";

function Form({ userId, addNewPost, isVisible }) {
  const [params, setParams] = React.useState({
    title: "",
    body: "",
  });

  const [fetching, isLoaded] = useFetching(async () => {
    let result = {
      ...params,
      userId,
    };
    const response = await ServisWorker().postNewUser(result);
    const data = await response.json();

    addNewPost(data);
  });
  const newUser = (e) => {
    e.preventDefault();
    isVisible(false);
    if(params.title===""&&params.body===""){
      return
    }else{
          fetching();

    }
  };

  const changeVisible = () => {
    isVisible(false);
  };

  React.useEffect(()=>{
    document.body.style.overflow="hidden"
    return ()=>document.body.style.overflow="auto"
  },[])

  return (
    <div className="main_form" onClick={changeVisible}>
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <MyInput
          value={params.title}
          onChange={(e) => {
            setParams((prev) => ({ ...prev, title: e.target.value }));
          }}
          placeholder="Title"
        />
        <MyInput
          value={params.body}
          onChange={(e) => {
            setParams((prev) => ({ ...prev, body: e.target.value }));
          }}
          placeholder="Body"
        />
        <MyButton onClick={newUser}>Добвить пост</MyButton>
      </form>
    </div>
  );
}

export default Form;
