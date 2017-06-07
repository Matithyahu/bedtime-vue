var nightList = [
  "Dinner",
  "Wash face or Bath",
  "Brush Teeth",
  "Put on Pajamas",
  "Put away toys",
  "Storytime or read on your own",
  "Bedtime"
];

var myNumber = 0;

window.addEventListener('load', function () { // needs this to wait until DOM
  var app1 = new Vue({
    el: '#app-1',
    data: {
      message: nightList[myNumber]
    },
    methods: {
      next: function () {
        myNumber = myNumber + 1
        this.message = nightList[myNumber]
        if (myNumber > nightList.length - 1) {
          this.message = "The End (really, go to bed!)"
        }
      },
      reset: function () {
        myNumber = 0
        this.message = nightList[myNumber]
      }
    }
  });
})
