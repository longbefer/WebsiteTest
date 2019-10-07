// window.onload = function(){
//     var cx=document.body.clientWidth, 
//         cy=document.body.clientHeight;
//     // document.ge
// }
var picDescription=new Array();
picDescription[0]="金刚石图案的变换";
picDescription[1]="茶壶环境映射";
picDescription[2]="Beizer曲面绘制过程";
picDescription[3]="双缓冲实例";
picDescription[4]="两个消隐圆环";
picDescription[5]="金刚石旋转图案";
picDescription[6]="圆柱的线框消隐模型";

//设置文字的背景颜色和字体颜色

window.onload=function(){
    var curIndex=0;//不要修改这个
    var timeInterval=5500;//这是图片切换时间，ms
    var picNum = 7;//图片张数
    var pic=new this.Array();
    var picDesc=new this.Array();
    var turn_red=document.getElementById("indicator").getElementsByTagName("ul")[0].getElementsByTagName("li");//获取指示器
    for(var i=1;i<=picNum;i++){
        pic[i-1]="images/index/"+i+".gif";//图片位置
        picDesc[i-1]="picDesc"+i;
    }
    setInterval(changeImg,timeInterval);
    function changeImg(){
        var pic_obj=document.getElementById("currentPicture");
        // var picDes_obj=document.getElementById(picDesc[curIndex]);
        if(curIndex==picNum-1) curIndex=0;
        else curIndex++;
        pic_obj.src=pic[curIndex];
        pic_obj.title=picDescription[curIndex];
        for(var i=0;i<picNum;i++){
            var pic_obj_style=document.getElementById(picDesc[i]).style;
            pic_obj_style.display=(i==curIndex?"block":"none");
            //pic_obj_style.title=(i==curIndex?" ":" ");
            turn_red[i].style.color=(i==curIndex?"red":"gray");
        }
        // var txts = picDescription[curIndex];
        // txts=txts.replace(/[\n\r]/g,'<br>')
        // $('.wra').html(txts);
        
            // turn_red[i].style.display=(i==curIndex?"block":"none");
        // picDes_obj.textContent=txts;
        // picDes_obj.content=picDescription[curIndex];
    }
}

// var curIndex=0;
// //时间间隔 单位毫秒
// var timeInterval=1000;
// var arr=new Array();
// arr[0]="img1.jpg";
// arr[1]="2.jpg";
// arr[2]="3.jpg";
// arr[3]="4.jpg";
// arr[4]="5.jpg";
// arr[5]="6.jpg";
// arr[6]="7.jpg";
// setInterval(changeImg,timeInterval);
// function changeImg()
// {
//     var obj=document.getElementById("obj");
//     if (curIndex==arr.length-1) 
//     {
//         curIndex=0;
//     }
//     else
//     {
//         curIndex+=1;
//     }
//     obj.src=arr[curIndex];
// }


// function checkVideo()
// {
// if(!!document.createElement('video').canPlayType)
//   {
//   var vidTest=document.createElement("video");
//   oggTest=vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');
//   if (!oggTest)
//     {
//     h264Test=vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
//     if (!h264Test)
//       {
//       document.getElementById("checkVideoResult").innerHTML="Sorry. No video support."
//       }
//     else
//       {
//       if (h264Test=="probably")
//         {
//         document.getElementById("checkVideoResult").innerHTML="Yes! Full support!";
//         }
//       else
//         {
//         document.getElementById("checkVideoResult").innerHTML="Well. Some support.";
//         }
//       }
//     }
//   else
//     {
//     if (oggTest=="probably")
//       {
//       document.getElementById("checkVideoResult").innerHTML="Yes! Full support!";
//       }
//     else
//       {
//       document.getElementById("checkVideoResult").innerHTML="Well. Some support.";
//       }
//     }
//   }
// else
//   {
//   document.getElementById("checkVideoResult").innerHTML="Sorry. No video support."
//   }
// }