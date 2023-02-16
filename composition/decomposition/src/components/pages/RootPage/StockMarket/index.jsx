/**
 *  Рендорит котировки
 *  @param stocks - массив данных с котировками
 */
import QuoteView from "./QuoteView";

export default function StockMarket({stocks}) {
  return(
    <ul>
      <QuoteView />
    </ul>
  )
}
