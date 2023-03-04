import Wrapper from "../../hoc/Wrapper";
import Video from "../Video/Video";
import Article from "../Article/Article";

export default function List(props) {
  return props.list.map((item, index) => {
    switch (item.type) {
      case 'video':
        return (
          <Wrapper key={index}>
            <Video {...item} />
          </Wrapper>
        );

      case 'article':
        return (
          <Wrapper key={index}>
            <Article {...item} />
          </Wrapper>
        );
    }
  });
}
