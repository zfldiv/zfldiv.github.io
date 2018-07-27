(function(){
    $.ajax({
        type: 'POST',
        url: 'http://192.168.10.232:8761/addr',
        data: JSON.stringify({"cip":"000000000", "cid":"1000000", "cname":"cname北京"}),
        success: function (date) {
            document.getElementById("viewCount").innerHTML = "总访问量：<lable style='color: dodgerblue;font-size: 70px'>"+date+"</lable>";
        },
        dataType: 'json',
        contentType: "application/json"
    });
})();