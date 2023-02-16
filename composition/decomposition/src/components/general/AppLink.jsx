/**
 *  Компонент рендорит ссылки
 *  @param title - текст ссылки
 *  @param href - путь
 */

export default function AppLink({title, href}) {
  return (
    <a href={href}>{title}</a>
  )
}
