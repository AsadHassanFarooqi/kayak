let flights = require('../pages/flights');

describe('Kayak Flights Page - 2-way Trip', function() {
  
  it('Disable angular', function() {
    browser.waitForAngularEnabled(false);
  });

  it('Visit Site', function () {
    flights.getURL('https://www.kayak.com/');
  });

  it('Click Flights link', function () {
    flights.getElement('[aria-label="Search for flights"]').click();
  });

  it('Origin Field existence', function () {
    let originField = flights.getElement('[aria-label="Flight origin input"]');
    flights.conditionalStatement(originField, true);
  });

  it('Trip field existence', function () {
    let tripType = flights.getElement('[role="listbox"]');
    flights.conditionalStatement(tripType, true);
  });

  it('Destination field existence', function () {
    let destinationField = flights.getElement('[aria-label="Flight destination input"]');
    flights.conditionalStatement(destinationField, true);
  });

  it('Dates field existence', function () {
    let dates = flights.getElement('[aria-label="Departure and return dates input"]');
    // expect(dates.count()).toBe(3);
    flights.conditionalStatement(dates, true);
  });

  it('Switch trip field', function () {
    let twoWayTrip = flights.getContainingText('[role="listbox"]', 'Round-trip');
    flights.equalStatment(twoWayTrip, 'Round-trip');
    twoWayTrip.click();
    flights.getElement('[aria-label="One-way"]').click();
    let oneWayTrip = flights.getContainingText('[role="listbox"]', 'One-way');
    flights.equalStatment(oneWayTrip, 'One-way');
  });
  
});

describe('Kayak Flights Page - 1-way Trip', function () {
  it('Origin Field existence', function () {
    let originField = flights.getElement('[aria-label="Flight origin input"]');
    flights.conditionalStatement(originField, true);
  });

  it('Trip field existence', function () {
    let tripType = flights.getElement('[role="listbox"]');
    flights.conditionalStatement(tripType, true);
  });

  it('Destination field existence', function () {
    let destinationField = flights.getElement('[aria-label="Flight destination input"]');
    flights.conditionalStatement(destinationField, true);
  });

  it('Dates field existence', function () {
    let dates = flights.getElement('[aria-label="Departure and return dates input"]');
    // expect(dates.count()).toBe(3);
    flights.conditionalStatement(dates, true);
  });
});

describe('Kayak flights - Enter values', function () {
  it('Paris', function() {
    let originFieldCheck = flights.getElement('[aria-label="Flight origin input"]');
    expect(originFieldCheck.getText()).toBe('Lahore (LHE)');
  });
  it('NewYork', function() {
    let destinationFieldCheck = flights.getElement('div[aria-label="Flight destination input"]');
    destinationFieldCheck.sendKeys('NYC');    
  });
})