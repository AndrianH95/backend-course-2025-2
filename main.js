const { URL, URLSearchParams } = require('url');

// Константи
const currency = "JPY";
const exact_date = "20240127";

// Базовий URL
const base = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange";

// Створюємо об’єкт URL
const url = new URL(base);

// Додаємо параметри
url.search = new URLSearchParams({
    valcode: currency,
    date: exact_date,
    json: ""
});

console.log(url.toString());
