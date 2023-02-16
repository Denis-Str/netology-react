/**
 *  Компонент рендорит список новостей, импортирует AppLink и AppRenderList, в пропсах принимает список новостей,
 *  формирует список новостей и передает его в AppRenderList
 */
import AppRenderList from "../../../general/AppRenderList";
import AppLink from "../../../general/AppLink";

export default function NewsView({news}) {
  return (
    <AppRenderList list={news}>
      <AppLink href={'#'} title={'Новость 1'} />
    </AppRenderList>
  )
}
