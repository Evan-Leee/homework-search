function timeFormat(time) {
  var milliSeconds = parseInt(time);
  var date = new Date(milliSeconds);

  var year = date.getFullYear().toString();
  var month = date.getMonth() + 1 > 10 ?
    (date.getMonth() + 1).toString() :
  '0' + (date.getMonth() + 1);
  var day = date.getDate() > 10 ?
    date.getDate().toString() :
  '0' + date.getDate();

  return year + '-' + month + '-' + day;
}


function listBookmarks(index, key, bookmarks) {
  $("div.result").remove();
  var reg = new RegExp(key, "gim");

  for (var i = index; i < index + 10 && i < bookmarks.length; i++) {

    var div, divStart, divMiddle, divEnd, bookmark;
    bookmark = bookmarks[i];
    divStart = "<div class='result'><div class='result-content'><span class='title' title=\"" + bookmark.title + "\">";
    divEnd = "</span><span class='created'>Created @ " +
      timeFormat(bookmark.created) +
      "</span></div>" +
      "<button class='delete'>删除</button>" +
      "</div>";

    if (key !== '') {
      divMiddle = bookmark.title.replace(reg, "<em class='high-light'>$&</em>");
    } else {
      divMiddle = bookmark.title;
    }

    if(bookmark.address){
      divMiddle = "<a href=\""+ bookmark.address +"\">"+
                  divMiddle+ "</a>"
    }

    div = divStart + divMiddle + divEnd;
    $(".content-middle").append(div);
  }

}

function render(data){
  var key = $("#search").val();
  var reg = new RegExp(key, "gim");
  var result = data.filter(function (elem) {
    return elem.title.search(reg) >= 0;
  });

  if (!result.length)result = data;

  listBookmarks(0,key,result);

  var total = result.length ? result.length : data.length;

  $(".content-head em").html(total);
  $("#page").pagination('setPageIndex', 0);
  $("#page").pagination('render', [total]);
}


$(document).ready(function () {
  $.getJSON("bookmarks", function (temp) {

    listBookmarks(0, '', temp);

    $("#page").pagination({
      pageSize: 10,
      pageBtnCount: 8,
      showFirstLastBtn: true,
      firstBtnText: '首页',
      lastBtnText: '尾页',
      total: temp.length
    });

    $(".content-head em").html(temp.length);
  });


  $("#search").bind("input", function () {

    $.getJSON("bookmarks", function (data) {
      render(data);
    });

  });

  $("#page").on("pageClicked", function (event, data) {
    var index = data.pageIndex * 10;
    var key = $("#search").val();
    var reg = new RegExp(key, "gim");
    $.getJSON("bookmarks", function(data){
      var result = data.filter(function (elem) {
        return elem.title.search(reg) >= 0;
      });

      if (!result.length)result = data;
      listBookmarks(index, key, result);
    });

  });

  $("#add").on('click',function(){
    if($("#bookmark").val() === '' || $("#address").val() === ''){
      $(".error").css("display","block");
    }else {
      $.post("/bookmarks/add",
        {
          bookmark: $("#bookmark").val(),
          address: $("#address").val()
        },function(data){
          render(data);
        });
      $("#addbookmarks").modal('hide');
    }
  });


  $("div.content-middle").delegate('button.delete','click', function(){

    if(confirm("确定要删除吗？")){
      $.post("/bookmarks/delete",
        {
          title: $(this).prev().children(0)[0].innerHTML
        },
        function(data){
          render(data);
        }
      );
    }

  });

});


