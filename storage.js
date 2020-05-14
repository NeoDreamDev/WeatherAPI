class Storage {
  constructor() {
    this.city;
    this.country;
    this.defaultCity = "New York";
    this.defaultCountry = "USA";
  }

  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.coty = localStorage.getItem("city");
    }
    if (localStorage.getItem("country") === null) {
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem("country");
    }

    return {
      city: this.city,
      country: this.country,
    };
  }

  setLocationData(city, country) {
    localStorage.setItem("city", city);
    localStorage.setItem("country", country);
  }
}
