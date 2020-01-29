var val = require('../library/util').val;

var item = {
    itemMeta: {
       blockState: {
          color: 'green'
       }
    }
 };
 
 var itemMeta = {
    blockState: {
       color: 'green'
    }
 };
 
 var blockState = {
    color: 'green'
 };

var testData = {};
Object.defineProperty(testData, 'itemMeta', {
   get () {
      return item.itemMeta;
   },
   set (a) {
      item.itemMeta = a;
   }
});
Object.defineProperty(testData.itemMeta, 'blockState', {
   get () {
      return itemMeta.blockState;
   },
   set (a) {
      itemMeta.blockState = a;
   }
});
Object.defineProperty(testData.itemMeta.blockState, 'color', {
   get () {
      return blockState.color;
   },
   set (a) {
      blockState.color = a;
   }
});

// var color = 'green';

// var data = testData;
// var meta = data.itemMeta;
// var state = itemMeta.blockState;
// state.setColor('red');
// meta.setBlockState(state);
// data.setItemMeta(meta);
console.log(testData)
val(testData, 'itemMeta.blockState', 'color', 'red');
console.log({ color: blockState.color }, blockState.color === 'red');
