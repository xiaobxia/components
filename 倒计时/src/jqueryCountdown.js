(function ($) {

  function Countdown(config) {
    this.seconds = config.seconds || 60;
    this.onStart = config.onStart || function () {};
    this.onChange = config.onChange || function () {};
    this.onEnd = config.onEnd || function () {};
    this.timer = null;
    this.nowSecond = this.seconds;
  }

  Countdown.prototype = {
    start: function () {
      var self = this;
      this.onStart(this.nowSecond);
      this.timer = setInterval(function () {
        if (self.nowSecond > 0) {
          //计时中
          self.nowSecond --;
          self.onChange(self.nowSecond);
        } else {
          //计时结束
          self.end();
        }
      }, 1000)
    },
    end: function() {
      this.nowSecond = this.seconds;
      this.onEnd(this.nowSecond);
      clearInterval(this.timer);
      this.timer = null;
    }
  };
  window.Countdown = Countdown;
})(jQuery);
