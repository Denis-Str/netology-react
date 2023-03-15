import AddForm from "./components/AddForm";
import ServicesList from "./components/ServicesList";
import SearchField from "./components/SearchField";

export default function App() {
  return (
    <div className="wrap">
      <AddForm />
      <SearchField />
      <ServicesList />
    </div>);
}

