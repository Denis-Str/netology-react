import Popular from "../components/Popular";
import New from "../components/New"

 const Wrapper = ({children}) => {
  const {views} = children.props
  if (views > 1000) return <Popular>{children}</Popular>;
  if (views < 100) return <New>{children}</New>;
  return <>{children}</>;
}

export default Wrapper;
