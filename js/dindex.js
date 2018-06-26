/*window.onload=function(){
	var oUl= document.getElementById("Ul_1");
	var oLi = oUl.getElementsByTagName("li")[0];
	var oUl2 =document.getElementById("Ul_2");
	var oAD = document.getElementById("ad_")
	oLi.onmouseover=function(){
		
		oUl2.style.display="block";
		}
     oAD.onmouseout=function(){
		
		oUl2.style.display="none";
		}}
*/
    $(function () {  
        //获取小按钮  
        var $oLi = $("ol>li");  
        //获取图片的宽度  
        var imgW = $("#imgs > li").width();  
  
        //鼠标移入盒子显示左右按钮  
        $("#box").on("mouseenter", function () {  
            $("#arr").css("display", "block");  
        });  
        //鼠标移出盒子隐藏左右按钮  
        $("#box").on("mouseleave", function () {  
            $("#arr").css("display", "none");  
        });  
   


        })
        //默认第一个小按钮是活动  
        $($oLi[0]).addClass("current");  
  
        //给左按钮注册点击事件  
        $("#left").click(function () {  
            //判断小按钮中哪个按钮是活动的  
            var num;  
            $oLi.each(function () {  
                //将ul向右移动  
                if($(this).hasClass("current")) {  
                    num = $(this).index() - 1;  
                    //当达到最左边时，移动到最右边  
                    if(num < 0) {  
                        num = 4;  
                    }  
                    $("#imgs").animate({  
                        left: -num * imgW + "px"  
                    }, 300);  
                }  
            });  
            //小按钮的背景色相应的改变  
            $($oLi[num]).addClass("current").siblings().removeClass("current");  
        });  
        //给右按钮注册点击事件  
        $("#right").click(function () {  
            //判断小按钮中哪个按钮是活动的  
            var num;  
            $oLi.each(function () {  
                //将ul向右移动  
                if($(this).hasClass("current")) {  
                    num = $(this).index() + 1;  
                    //当达到最左边时，移动到最右边  
                    if(num > 5) {  
                        num = 1;  
                    }  
                    $("#imgs").animate({  
                        left: -num * imgW + "px"  
                    }, 300);  
                }  
            });  
            //小按钮的背景色相应的改变  
            $($oLi[num]).addClass("current").siblings().removeClass("current");  
        });  
  
        //点击小按钮，图片移动，并给小按钮设置背景颜色  
        $oLi.on("click", function () {  
            //将活动的小按钮添加一个类  
            $(this).addClass("current").siblings().removeClass("current");  
            //获取索引  
            var num = $(this).index();  
            $("#imgs").animate({  
                left: -num * imgW + "px"  
            }, 300);  
        });  
  
        //循环播放  
        var timeId = setInterval(function () {  
            //判断小按钮中哪个按钮是活动的  
            var num;  
            $oLi.each(function () {  
                //将ul向右移动  
                if($(this).hasClass("current")) {  
                    //得到活动的索引,然后加1  
                    num = $(this).index() + 1;  
                    //让图片移动  
                    $("#imgs").animate({  
                        left: -num * imgW + "px"  
                    }, 300);  
                    //到达最后一张，让ul从头开始  
                    if(num== $oLi.length) {  
                        $("#imgs").animate({  
                            left: "0px"  
                        }, 0);  
                        num = 0;  
                    }  
                }  
            });  
            //小按钮的背景色相应的改变  
            $($oLi[num]).addClass("current").siblings().removeClass("current");  
        }, 2000);  
    }) 
		
		