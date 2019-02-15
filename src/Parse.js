const $ = require('cheerio');

const getAllH1 = html => $('h1', html).map(function() {
  return $(this).text().trim();
}).get();

const getAllH2 = html => $('h2', html).map(function() {
  return $(this).text().trim();
}).get();

const getAllH3 = html => $('h3', html).map(function() {
  return $(this).text().trim();
}).get();

const getDivsWithClass = (html, classes) => $(`div ${classes}`, html).map(function() {
  return $(this).text().trim();
}).get();

const getAWithClass = (html, classes) => $(`a ${classes}`, html).map(function() {
  return $(this).text().trim();
}).get();

const getElement = (html, tag) => $(tag, html).map(function() {
  return $(this).text().trim();
}).get();

module.exports = {
  getAllH1,
  getAllH2,
  getAllH3,
  getElement,
  getDivsWithClass,
  getAWithClass
};
