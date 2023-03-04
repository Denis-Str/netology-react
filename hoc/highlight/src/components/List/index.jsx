import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Video from "../Video/Video";
import Article from "../Article/Article";

export default function List({ list }) {
  return list.map((item, index) => {
    const VideoWrapper = Wrapper(Video, item);
    const ArticleWrapper = Wrapper(Article, item);

    switch (item.type) {
      case 'video':
        return (<VideoWrapper key={index} item={item}/>);
      case 'article':
        return (<ArticleWrapper key={index} item={item}/>);
    }
  });
}
