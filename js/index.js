//楼层
$(function(){
		$(window).scroll(function(){
			var s_t=$(window).scrollTop()
			if(s_t>$('.floor').eq(0).offset().top){
				$('.floorList').show()
				$('.floorList li').eq(0).addClass('ac')
			}
			$('.floor').each(function(i){
				if(s_t>=$(this).offset().top){
					$('.floorList li').eq(i).addClass("ac").siblings().removeClass("ac")
				}
			})
			
		})
		$('.floorList li').each(function(i,elm){
			$(this).click(function(){
			
				$('html,body').stop().animate({"scrollTop":$('.floor').eq(i).offset().top+"px"},1000)

			})
		})
		
	})



//菜单
$(".wrap .nav-list li").each(function(i,elm){
		$this=$(this)
		//进入时
		$(this).mouseenter(function(){

			$(this).addClass('nav-list_color').siblings().removeClass()
			_this=$(this)
			//进入弹出层
			$(".popup").show().css("border-color","red").mouseenter(function(){

				_this.addClass('nav-list_color').siblings().removeClass()
				

			})
			$(".popup .section").eq(i).show().siblings().hide()
			
		})
		//离开时
		$(".wrap").mouseleave(function(){
			$(".wrap .nav-list li").removeClass()
			$(".popup").hide()
		})
		
	})



//12格	
var timer;
$('.iconLi').hover(function(){
	var _this=$(this)
	timer=setTimeout(function(){
		
		$('.iconLi').animate({top:-37},500)
		$('.icon_move').animate({top:-174},500)
		$('.icon_move_text').text(_this.text())
		
	},1000)
	
},function(){
	clearTimeout(timer)
})

$('.delete').click(function(){
	$('.iconLi').animate({top:0},500)
	$('.icon_move').animate({top:0},500)
})


//floor1
$('.five .title .nav li a').click(function(ev){
	ev.preventDefault()
})
$('.five .title .nav li').on('click',function(){
	var n=$(this).index()
	$('.five .con').eq(n).show().siblings('.con').hide()
	
})


//floor2
$('.six .title .nav li a').click(function(ev){
	ev.preventDefault()
})
$('.six .title .nav li').on('click',function(){
	var n=$(this).index()
	$('.six .con').eq(n).show().siblings('.con').hide()
	
})





//图片切换
//构造函数
	function ChangeImg(imgBox){
	    this.box=imgBox; //容器
	    
		this.ul=imgBox.getElementsByTagName('ul')[0];
		this.img_li=this.ul.getElementsByTagName('li');//图片
		
		this.ol=imgBox.getElementsByTagName('ol')[0];
		this.aLi=this.ol.getElementsByTagName('li');//按钮
		
		this.timer=null;
		
		this.n=0;
		
		//调用原型上的方法
		this.change();
	};
	
	//切换图片的公用方法  定义在prototype
	ChangeImg.prototype.change=function(){
		
		var _this=this;  //构造函数中的this，指向实例化的对象
		
		for(var i=0; i<this.aLi.length; i++){
			
			this.aLi[i].index=i; //发编号
			
			this.aLi[i].onclick=function(){
				
				//其他变灰色   所有图片都隐藏
				for( var j=0; j<_this.aLi.length; j++){
					_this.aLi[j].className="";
					_this.img_li[j].className="banner_pic_hide";
				};
				
				
				//对应的图片显示？？？！！！！！！！！！
				_this.img_li[this.index].className="";
				//自己变红色
				this.className="ol_color";
				
				_this.n=this.index;
				
			};
		};
		
		return this; //返回实例对象
	};
	
	//原型上定义一个  自动切换图片   的方法
	ChangeImg.prototype.autoplay=function(){
		
		var _this=this;
	
		this.timer=setInterval(function(){
		   	_this.n++;
            
            if(_this.n==_this.aLi.length){
                _this.n=0;
            };
		   	
		    for( var j=0; j<_this.aLi.length; j++){
                _this.aLi[j].className="";
                _this.img_li[j].className="banner_pic_hide";
            };
            //对应的图片显示？？？！！！！！！！！！
            _this.img_li[_this.n].className="";
            //自己变红色
            _this.aLi[_this.n].className="ol_color";
            
		},2000);
		
		//鼠标进入box  停止切换
		this.box.onmouseenter=function(){
		    clearInterval(_this.timer);
		};
		
		//鼠标离开box  重启
		this.box.onmouseleave=function(){
            _this.autoplay();
        };
        return this; //返回实例对象
	};
	
	//---------------------------------------------------------------
	
		
	var aBox=document.getElementsByClassName('banner');	
	
	
	var chg_img1=new ChangeImg(aBox[0]);
	
	chg_img1.change().autoplay();//链式操作
	


//新闻滚动

function run(){
		$('.banner_text').animate({
			'top':"-23px"
		},1000,function(){
			$(this).css({"top":0}).children('li').first().appendTo($(this));
			
		})
	}
	setInterval(run,2000);
	



