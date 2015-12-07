$(document).ready(function(){

  $("#page").pagination({
    pageSize: 10,
    remote: {
      url: 'data.json',
      success: function (data) {
        // data为ajax返回数据
      },
      totalName:'total'
    }
  });

});
