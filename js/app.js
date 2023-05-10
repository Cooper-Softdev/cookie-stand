
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm', '8pm'];

let storeSection = document.getElementById('stores');


let seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  customersPerHourArr: [],
  cookiesPerHourArr: [],
  totalCookies: 0,
  totalCustomers: 0,

  randomCustomersPerHour: function () {
    return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < hours.length; i++) {
      this.customersPerHourArr[i] = this.randomCustomersPerHour();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < hours.length; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  },

  render: function() {
    this.calculateCookiesPerHourArr();

    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeSection.appendChild(storeList);

    for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHourArr[i]} cookies`;
      storeList.appendChild(liElement);
    }
  },
};


seattle.calculateCookiesPerHourArr();


let tokyo = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerSale: 1.2,
  customersPerHourArr: [],
  cookiesPerHourArr: [],
  totalCookies: 0,
  totalCustomers: 0,

  randomCustomersPerHour: function () {
    return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < hours.length; i++) {
      this.customersPerHourArr[i] = this.randomCustomersPerHour();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < hours.length; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  },
  render: function() {
    this.calculateCookiesPerHourArr();

    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeSection.appendChild(storeList);

    for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHourArr[i]} cookies`;
      storeList.appendChild(liElement);
    }
  },
};


tokyo.calculateCookiesPerHourArr();


let dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerSale: 3.7,
  customersPerHourArr: [],
  cookiesPerHourArr: [],
  totalCookies: 0,
  totalCustomers: 0,

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < hours.length; i++) {
      this.customersPerHourArr[i] = this.randomCustomersPerHour();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < hours.length; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  },
  render: function() {
    this.calculateCookiesPerHourArr();

    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeSection.appendChild(storeList);

    for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHourArr[i]} cookies`;
      storeList.appendChild(liElement);
    }
  },
};


dubai.calculateCookiesPerHourArr();


let paris = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerSale: 2.3,
  customersPerHourArr: [],
  cookiesPerHourArr: [],
  totalCookies: 0,
  totalCustomers: 0,

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < hours.length; i++) {
      this.customersPerHourArr[i] = this.randomCustomersPerHour();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < hours.length; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  },
  render: function() {
    this.calculateCookiesPerHourArr();

    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeSection.appendChild(storeList);

    for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHourArr[i]} cookies`;
      storeList.appendChild(liElement);
    }
  },
};

paris.calculateCookiesPerHourArr();

let lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerSale: 2.3,
  customersPerHourArr: [],
  cookiesPerHourArr: [],
  totalCookies: 0,
  totalCustomers: 0,
  
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < hours.length; i++) {
      this.customersPerHourArr[i] = this.randomCustomersPerHour();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < hours.length; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  },
  render: function() {
    this.calculateCookiesPerHourArr();

    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeSection.appendChild(storeList);

    for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHourArr[i]} cookies`;
      storeList.appendChild(liElement);
    }
  },
};

lima.calculateCookiesPerHourArr();

let stores = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < stores.length; i++) {
  stores[i].render();
}
