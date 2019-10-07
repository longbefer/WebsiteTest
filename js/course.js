
//设置微课的链接
var micro_class_number=24;
var url_class=new Array();
for(var i=0;i<micro_class_number;i++)
    url_class[i]="video/micro_class"+i+".mp4";//请将微课重命名未micro_class[数字].mp4，从0开始

//选择微课
function Select(id){
    id--;
    var video_show=document.getElementById("micro_class_video");
    video_show.title="第"+(id+1)+"章";
    video_show.src=url_class[id];
    var obj=document.getElementById("scrool-style");
    for(var i=0;i<micro_class_number;i++){
        obj.style.color=(i==id?"#fc6b00":"gray");
        var obj_li=obj.getElementsByTagName("li")[i];
        obj_li.className=(i==id?"Class_Select":"Class_Org");
        var obj_dl=obj_li.getElementsByTagName("dl")[0];
        obj_dl.style.color=(i==id?"#fc6b00":"gray");
        obj_dl.getElementsByTagName("p")[0].style.color=(i==id?"#fc6b00":"");//注意更改

    }
}

