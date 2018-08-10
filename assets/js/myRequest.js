var clipboard = new Clipboard('.btn');
clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.clearSelection();
    //alert('复制成功 !');
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
    //alert('复制失败,请手动复制');
});

(function(){
    var md = new MobileDetect(window.navigator.userAgent);
    $.ajax({
        type: 'POST',
        url: 'http://47.93.198.23:8761/addr',
        data: JSON.stringify({"cip":returnCitySN["cip"], "cid":returnCitySN["cid"], "cname":returnCitySN["cname"],"device":md.ua,"memo":"吱口令"}),
        success: function (date) {
            document.getElementById("viewCount").innerHTML = "总访问量：<lable style='color: dodgerblue;font-size: 70px'>"+date+"</lable>";
        },
        dataType: 'json',
        contentType: "application/json"
    });
})();