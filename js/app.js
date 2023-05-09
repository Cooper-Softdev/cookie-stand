

let seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  customersPerHourArr: [],
  cookiesPerHourArr: [],
  totalCookies: 0,
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < 14; i++) {
      this.customersPerHourArr[i] = this.randomCustomersPerHour();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < 14; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  },
  render: function() {
    let div = document.querySelector('.' + this.name);
    let ulElement = document.createElement('ul');
    for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${i+1}pm: ${this.cookiesPerHourArr[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    div.appendChild(ulElement);
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
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < 14; i++) {
      this.customersPerHourArr[i] = this.randomCustomersPerHour();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < 14; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  },
  render: function() {
    let div = document.querySelector('.' + this.name);
    let ulElement = document.createElement('ul');
    for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${i+1}pm: ${this.cookiesPerHourArr[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    div.appendChild(ulElement);
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
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < 14; i++) {
      this.customersPerHourArr[i] = this.randomCustomersPerHour();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < 14; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  },
  render: function() {
    let div = document.querySelector('.' + this.name);
    let ulElement = document.createElement('ul');
    for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${i+1}pm: ${this.cookiesPerHourArr[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    div.appendChild(ulElement);
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
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < 14; i++) {
      this.customersPerHourArr[i] = this.randomCustomersPerHour();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < 14; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  },
  render: function() {
    let div = document.querySelector('.' + this.name);
    let ulElement = document.createElement('ul');
    for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${i+1}pm: ${this.cookiesPerHourArr[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    div.appendChild(ulElement);
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
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCustomersPerHourArr: function () {
    for(let i = 0; i < 14; i++) {
      this.customersPerHourArr[i] = this.randomCustomersPerHour();
    }
  },
  calculateCookiesPerHourArr: function () {
    this.generateCustomersPerHourArr();
    for(let i = 0; i < 14; i++) {
      this.cookiesPerHourArr[i] = Math.floor(Math.random() * (this.customersPerHourArr[i] * this.avgCookiesPerSale));
      this.totalCookies += this.cookiesPerHourArr[i];
    }
  },
  render: function() {
    let div = document.querySelector('.' + this.name);
    let ulElement = document.createElement('ul');
    for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${i+1}pm: ${this.cookiesPerHourArr[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    div.appendChild(ulElement);
  },
};

lima.calculateCookiesPerHourArr();

let stores = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < stores.length; i++) {
  stores[i].render();
}

