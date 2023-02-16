/**
 *  Компонент рендорит список новостей, импортирует AppLink, в пропсах принимает список, в чилдренах
 *  компонент (элемент списка)
 *   @param list - массив данных
 */

export default function AppRenderList({list}) {
  return (
    <ul>{list}</ul>
  )
}
