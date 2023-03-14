import { useSelector } from "react-redux";
import { services } from "../../redux/services";
import Service from "./Service";

export default function ServicesList() {
  const servicesList = useSelector(services);
  return (
    <ul className="services-comp">
      {servicesList.map((service, index) =>
        <Service key={`service-${index}`} service={service} />)}
    </ul>
  )
}
