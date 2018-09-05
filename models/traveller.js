



const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(journeys) {
return this.journeys.map((journeys) => {
  return journeys.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function (jouneys) {
  return this.journeys.map((journeys) =>{
    return journeys.endLocation;
  });
};

Traveller.prototype.getModesOfTransport = function () {

};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
