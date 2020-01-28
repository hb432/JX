module.exports = function (subject) {
   var block = subject;
   var that = {
      get block () {
         return block;
      }
   };
   that.type = _(block);
   return that;
};
