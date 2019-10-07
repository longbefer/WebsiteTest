//选择章节
var ware_num=6;//六章
//章节路径
var prepage="https://view.officeapps.live.com/op/view.aspx?src=";
var ip_addr = document.location.hostname;
var ip_addr_backup= document.domain;
var source_path="source/chapter";
var chapter_path=new Array();
var source_num=[2,14,8,6,15,3];//资源个数
for(var i=0;i<ware_num;i++){
    chapter_path[i]=source_path+(i+1);
}
//章节资源名
var chapter_source=new Array();
for(var i=0;i<ware_num;i++)
    chapter_source[i]=new Array();
//以上声明一个二维数组，以下为写入二维数组路径和名称
chapter_source[0][0]="第一章.pptx";
chapter_source[0][1]="例1-1计算曲面方程系数.zip";

chapter_source[1][0]="第二章.pptx";
chapter_source[1][1]="例2-1.zip";
chapter_source[1][2]="例2-2.zip";
chapter_source[1][3]="例2-3.zip";
chapter_source[1][4]="例2-4.zip";
chapter_source[1][5]="例2-5.zip";
chapter_source[1][6]="例2-6-设备坐标系，居中显示.zip";
chapter_source[1][7]="例2-6-设备坐标系显示位图.zip";
chapter_source[1][8]="例2-6-自定义坐标系显示位图.zip";
chapter_source[1][9]="例2-7-设备坐标系绘制旋转直线.zip";
chapter_source[1][10]="例2-7-自定义坐标系绘制旋转直线.zip";
chapter_source[1][11]="例2-8.zip";
chapter_source[1][12]="例2-9.zip";
chapter_source[1][13]="例2-10.zip";

chapter_source[2][0]="第三章.pptx";
chapter_source[2][1]="例3-1-三次样条曲线.zip";
chapter_source[2][2]="例3-2-三次参数样条曲线.zip";
chapter_source[2][3]="例3-2-三次参数样条曲线自由端.zip";
chapter_source[2][4]="例3-3-Cardinal曲线.zip";
chapter_source[2][5]="Cardinal曲线 u的分析.zip";
chapter_source[2][6]="Heimite基函数.zip";
chapter_source[2][7]="鼠标绘制三次样条曲线.zip";

chapter_source[3][0]="第四章.pptx";
chapter_source[3][1]="二次Bezier曲线算法.zip";
chapter_source[3][2]="二次Bezier曲线拼接圆算法.zip";
chapter_source[3][3]="三次Bezier曲线算法.zip";
chapter_source[3][4]="三次Bezier基函数算法.zip";
chapter_source[3][5]="三次Bezier曲线拼接圆算法.zip";

chapter_source[4][0]="第五章.pptx";
chapter_source[4][1]="二次均匀B样条曲线-基函数实现.zip";
chapter_source[4][2]="三次均匀B样条曲线-基函数实现.zip";
chapter_source[4][3]="例5-2-二次均匀B样条曲线.zip";
chapter_source[4][4]="例5-3-三次均匀B样条曲线.zip";
chapter_source[4][5]="例5-4-二次准均匀B样条曲线.zip";
chapter_source[4][6]="例5-5-三次准均匀B样条曲线.zip";
chapter_source[4][7]="例5-6-分段Bezier曲线.zip";
chapter_source[4][8]="例5-7-里森费尔德算法（偶次-2次）.zip";
chapter_source[4][9]="例5-8-里森费尔德算法（奇次-5次）.zip";
chapter_source[4][10]="例5-9-哈德利-贾德算法.zip";
chapter_source[4][11]="例5-12-节点插入算法.zip";
chapter_source[4][12]="例5-14-双三次均匀B样条曲面片.zip";
chapter_source[4][13]="例5-14-双三次非均匀B样条曲面算法.zip";
chapter_source[4][14]="例5-15-非均匀B样条曲面.zip";

chapter_source[5][0]="第六章.pptx.zip";
chapter_source[5][1]="NURBS高脚杯.zip";
chapter_source[5][2]="立方体双线性曲面-石昌盛.zip";

var willOpen=new Array();
for(var i=0;i<ware_num;i++)
    willOpen[i]=false;
var createDT_finish=new Array();
for(var i=0;i<ware_num;i++)
    createDT_finish[i]=false;

//函数实现
function Select(id,event){
    var tag=event.target.tagName;
    if(tag!="DL")
        return;
    // fileImport();
    willOpen[id]=!willOpen[id];
    // var dt=document.createElement('dt');
    var str="chapter_name"+(id+1);
    var chapter_obj=document.getElementById(str);
    // var obj=document.getElementById("scrool-style");
    // chapter_obj.appendChild(dt);
    if(!createDT_finish[id])
    {
        var a_source=new Array();
        var video_cover=document.getElementById("course_ware_video");
        for(var i=0;i<source_num[id];i++){
            a_source[i]=document.createElement('a');
            a_source[i].textContent=/*"▷ "+*/chapter_source[id][i];
            a_source[i].id="chapter"+(id+1)+"_source_"+(i+1);//chapter1_source1之类的id(备用)
            if(couldPreview(chapter_source[id][i])){
                a_source[i].href=prepage+"http://"+ip_addr+"/"+chapter_path[id]+"/"+chapter_source[id][i];
                a_source[i].title="预览";
            }else{ 
                a_source[i].href=chapter_path[id]+"/"+chapter_source[id][i];//+".zip";
                // video_cover.src=chapter_path[id]+"/"+chapter_source[id][i]+".png";
                a_source[i].title="下载";
            }
            a_source[i].download="filename";
            a_source[i].target="_blank";
            // dt_source[i].onclick=download2(chapter_path[id]+"/"+chapter_source[id][i],dt_source[i].tagName);
            // dt_source[i].addEventListener('click',function(){
            //     var $form =$('<form method="GET"></form>');
            //     $form.attr('action',chapter_path[id])
            // },false);
            chapter_obj.appendChild(a_source[i]);//添加子节点
            createDT_finish[id]=true;
            // chapter_obj.
            // dt_source[i].addEventListener('click',download1(chapter_path[id]+"/"+chapter_source[id][i],
            //     dt_source[i]),false);
            // a_source[i].onclick="download1(chapter_path[id]+'/'+chapter_source[id][i],this);";
        }
        event.stopPropagation();//暂停父事件的点击事件
    }
    
    //显示子节点
    for(var i=0;i<source_num[id];i++){
        var source_obj=chapter_obj.getElementsByTagName('a')[i];
        source_obj.style.display=(willOpen[id]?"block":"none");//显示或不显示，This is a question!
        // source_obj.addEventListener('click',
        //         download1(chapter_path[id]+"/"+chapter_source[id][i],source_obj),true);
    }

}


function couldPreview(str){
    if(str.indexOf("pptx")!=-1)
        return true;
    else return false;
}


// window.onload=function(){
//     for(var i=0;i<this.ware_num;i++){
//         var str="chapter_name"+(i+1);
//         var chapter_obj=document.getElementById(str);
//         chapter_obj.textContent="▶"+chapter_obj.textContent;
//     }
// }
// function fileImport(){
//     var selectedFile=
// }

 // 会打开一个空白页下载，然后空白页消失，用户体验不好
//  function download1(link,obj) {
//      obj.click();
//     // window.open(link);
// }

// 直接下载，用户体验好
// function download2(link,obj) {
//     var tag=obj.tagName;
//     if(tag!="DT")
//         return;
//     var $form = $('<form method="GET"></form>');
//     $form.attr('action', link);
//     $form.appendTo($('body'));
//     $form.submit();
// }