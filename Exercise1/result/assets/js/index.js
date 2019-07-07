(function() {
  $("#address-for-cash").hide();
  $("#card-validation").hide();
  $("#Visa").hide();
  $("#Mastercard").hide();
  $("#American-Express").hide();
  $("#question-mark").hide();
  $('#payment-method').on('change', function() {
    if (this.value === "Cash") {
      $("#address-for-cash").show();
      $("#card-validation").hide();
    } else if (this.value === "Credit Card") {
      $("#card-validation").show();
      $("#address-for-cash").hide();
    }
  });
  $('#credit-card-number').on('input', function() {
    $("#Visa").hide();
    $("#Mastercard").hide();
    $("#American-Express").hide();
    $("#question-mark").hide();
    if (this.value.slice(0,1) === "4") {
      $("#Visa").show();
      $("#credit-card-number").attr("minlength", "13");
      $("#credit-card-number").attr("maxlength", "16");
    } else if (this.value.slice(0.1) === "5") {
      $("#Mastercard").show();
      $("#credit-card-number").attr("minlength", "16");
      $("#credit-card-number").attr("maxlength", "16");
    } else if ( (this.value.slice(0.2) === "34" || this.value.slice(0.2) === "37")  ) {
      $("#American-Express").show();
      $("#credit-card-number").attr("minlength", "15");
      $("#credit-card-number").attr("maxlength", "15");
    } else {
      $("#question-mark").show();
      $("#credit-card-number").attr("minlength", "");
      $("#credit-card-number").attr("maxlength", "");
    }
  });
})();
