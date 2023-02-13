import Listing from "./components/Listing";
import etsyData from "./mock/etsy"

export default function App() {
  return (
    <Listing items={etsyData} />
  )
}
