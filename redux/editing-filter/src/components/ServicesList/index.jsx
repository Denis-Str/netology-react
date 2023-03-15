import { useSelector } from "react-redux";
import { services } from "../../redux/services";
import { searchValue } from "../../redux/searchService";
import Service from "./Service";

export default function ServicesList() {
  const servicesList = useSelector(services) || [];
  const searchRequest = useSelector(searchValue) || '';
  const filteredServices = () => {
    if (searchRequest === '') return servicesList;
    return servicesList.filter(({ name }) => name.indexOf(searchRequest) >= 0);
  }

  return (
    <ul className="services-comp">
      {filteredServices().map((service, index) =>
        <Service key={`service-${index}`} service={service} currentIndex={index} />)}
    </ul>
  )
}
