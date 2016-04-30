(function($){
  $(document).ready(function(){
    /**
     *
     **/
    function calc(max_percent, actual_amount, actual_percent, percent){
      limit = (actual_amount * (actual_percent - max_percent) ) / (max_percent - percent);
    return limit;
    }
    window.milk_culc = calc;
    $("body").on("click", "#calc_button", function(){
      var actual_amount = $("#actual_amount").val();
      var actual_percent = $("#actual_percent").val();
      var max_percent = $("#max_percent").val();
      var percent = $("#percent").val();
      var amount = calc(max_percent, actual_amount, actual_percent, percent);
      $("#amount").text(amount);
    });
  });
})(jQuery);
