import { useSelector, useDispatch } from "react-redux";
import { preview, list, addImg, addPreview } from "./redux/gallery";
import Img from "./components/Img";

export default function App() {
  const lastImg = useSelector(preview) || null;
  const galleryList = useSelector(list) || [];
  const dispatch = useDispatch();

  let reader = new FileReader();

  const handleUploadImg = file => {
    reader.onload = () => {
      dispatch(addImg(reader.result));
      dispatch(addPreview(reader.result));
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="wrap">
      <div className="preview-wrap">
        {lastImg && <img src={lastImg} alt="img" className="preview"/>}
        <input type="file" onChange={event => handleUploadImg(event.target.files[0])} className="upload"/>
      </div>
      <picture className="gallery">
        {galleryList.length > 0 && galleryList.map((src, index) => <Img key={index} src={src} alt="img"/>)}
      </picture>
    </div>);
}

