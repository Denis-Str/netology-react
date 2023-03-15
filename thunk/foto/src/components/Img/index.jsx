import { useDispatch } from "react-redux";
import { deleteImg } from "../../redux/gallery";

export default function Img({src}) {
  const dispatch = useDispatch();
  return (
    <div className="image-comp">
      <img src={src} alt="img" className="preview"/>
      <span className="material-icons close" onClick={() => dispatch(deleteImg(src))}>close</span>
    </div>
  )
}
