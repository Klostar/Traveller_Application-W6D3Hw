



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

Traveller.prototype.getModesOfTransport = function (transport) {
  return this.journeys.map((journeys) => {
    return journeys.transport;
  });
};



Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journeys) =>{
    return journeys.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total,journey) => {
   return total += journey.distance;
 },0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transports = this.getModesOfTransport()
   return transports.filter((transport,index) => {
    return transports.indexOf(transport) === index;
  });

};



module.exports = Traveller;
