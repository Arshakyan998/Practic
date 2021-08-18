import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostsList from "./PostsList";

import './transition.scss'

function Posts({ posts, removePost }) {
  return (
    <div>
      <TransitionGroup>
        {posts.map((element) => {
          return (
            <CSSTransition 
            key={element.id}
             timeout={400}
              classNames="post">
              <PostsList
                key={element.id}
                {...element}
                removePost={removePost}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}

export default Posts;
