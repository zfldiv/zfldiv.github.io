(function(){
    var md = new MobileDetect(window.navigator.userAgent);
    $.ajax({
        type: 'POST',
        url: 'http://47.93.198.23:8761/addr',
        data: JSON.stringify({"cip":returnCitySN["cip"], "cid":returnCitySN["cid"], "cname":returnCitySN["cname"],"device":md.ua}),
        success: function (date) {
            document.getElementById("viewCount").innerHTML = "总访问量：<lable style='color: dodgerblue;font-size: 70px'>"+date+"</lable>";
        },
        dataType: 'json',
        contentType: "application/json"
    });
})();