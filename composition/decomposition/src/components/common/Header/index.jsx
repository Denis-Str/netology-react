/**
 *  Импортирует компонент AppLink, AppDate
 */
import AppDate from "../../general/AppDate";
import AppLink from "../../general/AppLink";

export default function AppHeader() {
  return (
    <header>
      <div>
        <AppLink href={"#"} title={"Сейчас в СМИ"} />
        <AppLink href={"#"} title={"В России"} />
        <AppLink href={"#"} title={"Рекомендуем"} />
      </div>
      <AppDate />
    </header>
  )
}
