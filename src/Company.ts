import { faker } from "@faker-js/faker";
import { MapData } from "./CustomMap";

export class Company implements MapData {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = "blue";

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
  markerContent(): string {
    return `<div>
              <h4>Company Name is: ${this.companyName}</h4>
              <h5>CatchPhrase is: ${this.catchPhrase}</h5>
            </div>`;
  }
}
