
let storeTable = document.getElementById('storeDailyTable');

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm', '8pm'];

function Store(name, minCustomers, maxCustomers, avgCookiesPerSale) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersPerHourArr = [],
  this.cookiesPerHourArr = [],
  this.totalCookies = 0;
}

Store.prototype.randomCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);

};

Store.prototype.generateCustomersPerHourArr = function() {
  for (let i = 0; i < hours.length; i++) {
    this.customersPerHourArr[i] = this.randomCustomersPerHour();
  }
};

Store.prototype.calculateCookiesPerHourArr = function() {
  this.generateCustomersPerHourArr();
  for(let i = 0; i < hours.length; i++) {
    this.cookiesPerHourArr[i] = Math.floor(this.customersPerHourArr[i] * this.avgCookiesPerSale);
    this.totalCookies += this.cookiesPerHourArr[i];
  }
};

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 2.3);
let miami = new Store('Miami', 54, 85, 9.2);


Store.prototype.render = function () {
  this.calculateCookiesPerHourArr();

  let trElement = document.createElement('tr');
  let thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);

  for(let i = 0; i < this.cookiesPerHourArr.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = this.cookiesPerHourArr[i];
    trElement.appendChild(tdElement);
  }

  let totalElement = document.createElement('td');
  totalElement.textContent = this.totalCookies;
  trElement.appendChild(totalElement);

  storeTable.appendChild(trElement);
};

function renderHeader() {
  let trElement = document.createElement('tr');
  let thElement = document.createElement('th');
  thElement.textContent = '';
  trElement.appendChild(thElement);

  for(let i = 0; i < hours.length; i++) {
    let thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }

  let totalElement = document.createElement('th');
  totalElement.textContent = 'Daily Location Total';
  trElement.appendChild(totalElement);

  storeTable.appendChild(trElement);
}

function renderFooter() {
  let trElement = document.createElement('tr');
  let thElement = document.createElement('th');
  thElement.textContent = 'Totals';
  trElement.appendChild(thElement);

  let grandTotal = 0;
  for(let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for(let j = 0; j < stores.length; j++) {
      hourlyTotal += stores[j].cookiesPerHourArr[i];
    }
    grandTotal += hourlyTotal;

    let tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    trElement.appendChild(tdElement);
  }

  let totalElement = document.createElement('td');
  totalElement.textContent = grandTotal;
  trElement.appendChild(totalElement);

  storeTable.appendChild(trElement);
  return[grandTotal];
}

renderHeader();

let stores = [seattle, tokyo, dubai, paris, lima, miami];
for (let i = 0; i < stores.length; i++) {
  stores[i].render();
}

renderFooter();
