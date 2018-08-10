var clipboard = new Clipboard('.kouliungbtn');
clipboard.on('success', function(e) {
    e.clearSelection();
    //alert('复制成功 !');
});

clipboard.on('error', function(e) {
    //alert('复制失败,请手动复制');
});

(function(){
    var md = new MobileDetect(window.navigator.userAgent);
    $.ajax({
        type: 'POST',
        url: 'http://47.93.198.23:8761/addr',
        data: JSON.stringify({"cip":returnCitySN["cip"], "cid":returnCitySN["cid"], "cname":returnCitySN["cname"],"device":md.ua,"memo":"吱口令"}),
        success: function (date) {

        },
        dataType: 'json',
        contentType: "application/json"
    });
})();