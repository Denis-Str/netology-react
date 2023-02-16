/**
 *  Индексовая (рутотовая) страница
 */

import AppHeader from "../components/common/Header";
import NewsView from "../components/pages/RootPage/NewsView";
import AppBanner from "../components/general/AppBanner";
import StockMarket from "../components/pages/RootPage/StockMarket";
import WeatherWidget from "../components/pages/RootPage/WeatherWidget";
import VisitedView from "../components/pages/RootPage/VisitedView";
import AppLink from "../components/general/AppLink";
import Teleprogram from "../components/pages/RootPage/Teleprogram";
import AppRenderList from "../components/general/AppRenderList";

export default function RootPage() {
  return (
    <>
      <AppHeader />
      <main>
        <div className="top-wrap">
          <NewsView />
          <AppBanner />
        </div>
        <StockMarket />
        <AppBanner />
        <div className="content">
          <div className="column">
            <WeatherWidget />
            <VisitedView />
          </div>
          <div className="column">
            <AppLink href={"#"} title={"Карта России"} />
            <AppLink href={"#"} title={"Расписание"} />
            <Teleprogram />
          </div>
          <div className="column">
            <h2>Эфир</h2>
            <AppRenderList />
          </div>
        </div>
      </main>
    </>
  )
}
