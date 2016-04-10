$(function() {
  var cal = function(n, c) {
    return 1 - Math.pow(1 - n, c);
  };

  $("#calc").on("click", function() {
    $("#ret1").html("");
    $("#ret2").html("");
    $("#ret5").html("");

    var k = $("#k").val();
    var p = $("#p").val();

    if (k == "" || p == "") {
      $("#error").html("入力欄が空です");
      return;
    } else {
      $("#error").html("");
    }

    var n = 1;
    var ret;
    var ret1 = 0;
    var ret2 = 0;
    var ret5 = 0;
    k = parseInt(k);
    p = parseFloat(p) / 100;

    while(1) {
      ret = cal(p, n);
      // console.log(":" + ret);
      if (ret5 === 0 && ret > 0.50) {
        ret5 = n;
      }
      if (ret1 === 0 && ret > 0.90) {
        ret1 = n;
      }
      if (ret > 0.98) {
        ret2 = n;
        break;
      }

      n = n + 1;
      if (n > 30000) {
        $("#error").html("ガチャ回数が3万回を超えたため中断します");
        break;
      }
    }

    if (ret1 !== 0) {
      $("#ret1").html(ret1 * k + "円 (" + ret1 + "回)");
    }
    if (ret2 !== 0) {
      $("#ret2").html(ret2 * k + "円 (" + ret2 + "回)");
    }
    if (ret5 !== 0) {
      $("#ret5").html(ret5 * k + "円 (" + ret5 + "回)");
    }
  });
});
