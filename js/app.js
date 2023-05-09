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
console.log(seattle.generateCustomersPerHourArr);
console.log(seattle.calculateCookiesPerHourArr);
console.log(seattle.totalCookies);

let Tokyo = {
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

Tokyo.generateCustomersPerHourArr();
Tokyo.calculateCookiesPerHourArr();
console.log(Tokyo.generateCustomersPerHourArr);
console.log(Tokyo.calculateCookiesPerHourArr);
console.log(Yokyo.totalCookies);

let Dubai = {
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

Dubai.generateCustomersPerHourArr();
Dubai.calculateCookiesPerHourArr();
console.log(Dubai.generateCustomersPerHourArr);
console.log(Dubai.calculateCookiesPerHourArr);
console.log(Dubai.totalCookies);

let Paris = {
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

Paris.generateCustomersPerHourArr();
Paris.calculateCookiesPerHourArr();
console.log(Paris.generateCustomersPerHourArr);
console.log(Paris.calculateCookiesPerHourArr);
console.log(Paris.totalCookies);

let Lima = {
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

Lima.generateCustomersPerHourArr();
Lima.calculateCookiesPerHourArr();
console.log(Lima.generateCustomersPerHourArr);
console.log(Lima.calculateCookiesPerHourArr);
console.log(Lima.totalCookies);

