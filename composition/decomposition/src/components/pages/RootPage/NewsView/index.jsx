/**
 *  Компонент рендорит список новостей, импортирует AppLink и AppRenderList, в пропсах принимает список новостей,
 *  формирует список новостей и передает его в AppRenderList
 */
import AppRenderList from "../../../general/AppRenderList";
import AppLink from "../../../general/AppLink";
import AppIcon from "../../../general/AppIcon";

export default function NewsView({news}) {
  return (
    <AppRenderList list={news}>
      <li>
        <AppIcon />
        <AppLink href={'#'} title={'Новость 1'} />
      </li>
    </AppRenderList>
  )
}
