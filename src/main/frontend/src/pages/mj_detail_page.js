import {
  SideLeftBox,
  SideRightBox,
} from "../component/mj_detail";
import style from "../css/mj_detail.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header_JW from "../component/jw_header";

function Mj_detail_page() {
  const { contentsId } = useParams();
  const data = useSelector(store => store.dataSet),
    selectedData = data.contentsData.find((x) => x.id === contentsId);


  return (
    <>
      <Header_JW />
      <div className={style.detail_box}>
        <SideLeftBox length={data.contentsData} data={selectedData} />
        <SideRightBox data={selectedData} />
      </div>
    </>
  );
}
export default Mj_detail_page;