var RetiredForager = function() {
  ForagerBee.call(this);

  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';

};

RetiredForager.prototype = Object.create(ForagerBee.prototype);
RetiredForager.prototype.constructor = RetiredForager;

RetiredForager.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}

RetiredForager.prototype.gamble = function(treasure) {
  this.forage(treasure);
}



