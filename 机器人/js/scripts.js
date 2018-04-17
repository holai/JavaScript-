function kz(){                        //加载完成运行
	var a=document.getElementById("lu");     // 获取主div
	a.style.height=screen.availHeight*0.8;   //设置高度为屏幕高度
	a.style.width=screen.availWidth*0.8;     //设置宽度为屏幕宽度
}

function abc(bda){               
	  var xhr=new XMLHttpRequest();      //原生XHR 对象
	xhr.onreadystatechange=function(){    //用onreadystatechange事件检测
	if(xhr.readyState==4){       // 如果readystate==4就表示 成功
	if((xhr.status >= 200 && xhr.status<300) || xhr.status==304){    //如果status==200 或者304 就成功
	var fh=JSON.parse(xhr.responseText);
	sx(fh);
	}else{
	alert("出错误了  错误代码:"+xhr.status);
	}
	}		
	};    
	
 var data={"showapi_appid":"59421","showapi_sign":"8a3932801c224cbfb200802e3ab529e0","info":bda};
 var arr=[];
for(var key in data)
{
arr.push(key+'='+data[key]);   
}
data=arr.join('&');
xhr.open("post","http://route.showapi.com/60-27",true);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhr.send(data);
};

function sx(fh){ 
	var qwe=document.getElementById("zjm");
	var a=document.createElement("div");
    var b=document.createElement("img");
	var c=document.createElement("div");
    c.innerHTML=fh.showapi_res_body.text;
	b.src="http://holai.top/img/tx.png";
	c.className="b_c";
	b.className="b_b";
	qwe.appendChild(a);
   a.appendChild(b);
   a.appendChild(c);
a.className="ba";
}
function zj(){               //  点击运行
	var bdb=document.getElementById("nr");    //获取消息列表div
	var bda=bdb.value;                        
	if(bda!=""){
	bdb.value="";
	var qwe=document.getElementById("zjm");
	var a=document.createElement("div");
    var b=document.createElement("img");
	var c=document.createElement("div");
    c.innerHTML=bda;
	b.src="http://holai.top/img/hs.png";
	c.className="b_f";
	b.className="b_e";
	qwe.appendChild(a);
   a.appendChild(b);
   a.appendChild(c);
a.className="bd";
abc(bda);
}
}
