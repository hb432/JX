module.exports = {
   /**
    * return a random integer between 0 and "limit"
    * @param {number} limit the maximum value of the random number
    * @returns {number}
    * @example
    * // random number between 0 and 20
    * var RNG = jx.rand.integer(20);
    */
   integer: function (limit) {
      return Math.floor(Math.random() * Math.abs(limit + 1));
   },
   /**
    * return a random integer between min and max
    * @param {number} min the minumum number, can be negative
    * @param {number} max the maximum number, can be negative
    * @returns {number}
    * @example
    * // random integer between -10 and 10
    * var integer = jx.rand.minmax(-10, 10);
    */
   minmax: function (min, max) {
      return jx.rand.integer(max - min) + min;
   },
   /**
    * return a random boolean
    * @param {number} chance the chance value (0-1)
    * @returns {boolean}
    * @example
    * // return "true" value 1 out of 7 times
    * jx.rand.chance(1 / 7);
    * 
    * // return "true" value 50% of the time
    * jx.rand.chance(0.5);
    */
   chance: function (chance) {
      return Math.random() < chance;
   }
};
