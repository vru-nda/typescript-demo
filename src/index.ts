import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./user";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
