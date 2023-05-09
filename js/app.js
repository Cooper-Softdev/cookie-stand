let seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  customersPerHourArr: [],
  cookiesPerHourArr: [],
  totalCookies: 0,
  randomcustomersPerHourArr: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < 14; i++) {
      this.customersPerHourArr[i] = this.randomcustomersPerHourArr();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < 14; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  }
};

seattle.generateCustomersPerHourArr();
seattle.calculateCookiesPerHourArr();
console.log(seattle.customersPerHourArr);
console.log(seattle.calculateCookiesPerHourArr);

let tokyo = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerSale: 1.2,
  customersPerHourArr: [],
  cookiesPerHourArr: [],
  totalCookies: 0,
  randomcustomersPerHourArr: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < 14; i++) {
      this.customersPerHourArr[i] = this.randomcustomersPerHourArr();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < 14; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  }
};

tokyo.generateCustomersPerHourArr();
tokyo.calculateCookiesPerHourArr();
console.log(tokyo.customersPerHourArr);
console.log(tokyo.calculateCookiesPerHourArr);

let dubai = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerSale: 3.7,
  customersPerHourArr: [],
  cookiesPerHourArr: [],
  totalCookies: 0,
  randomcustomersPerHourArr: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < 14; i++) {
      this.customersPerHourArr[i] = this.randomcustomersPerHourArr();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < 14; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  }
};

dubai.generateCustomersPerHourArr();
dubai.calculateCookiesPerHourArr();
console.log(dubai.customersPerHourArr);
console.log(dubai.calculateCookiesPerHourArr);

let paris = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerSale: 2.3,
  customersPerHourArr: [],
  cookiesPerHourArr: [],
  totalCookies: 0,
  randomcustomersPerHourArr: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < 14; i++) {
      this.customersPerHourArr[i] = this.randomcustomersPerHourArr();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < 14; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  }
};

paris.generateCustomersPerHourArr();
paris.calculateCookiesPerHourArr();
console.log(paris.customersPerHourArr);
console.log(paris.calculateCookiesPerHourArr);

let lima = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerSale: 2.3,
  customersPerHourArr: [],
  cookiesPerHourArr: [],
  totalCookies: 0,
  randomcustomersPerHourArr: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < 14; i++) {
      this.customersPerHourArr[i] = this.randomcustomersPerHourArr();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < 14; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  }
};

lima.generateCustomersPerHourArr();
lima.calculateCookiesPerHourArr();
console.log(lima.customersPerHourArr);
console.log(lima.calculateCookiesPerHourArr);

