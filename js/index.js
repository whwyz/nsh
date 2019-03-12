// 头部导航栏向上运动
(function(){
    var moveA = document.getElementsByClassName('moveA')[0];
    var mA = moveA.getElementsByTagName('a')[0];
    var data = [{
            value :'领取网易严选宝箱',
        },{
             value :'游戏充值9.8折',
    }]
    var i = 0;   
    mA.innerHTML = data[i].value;
    setInterval(function(){
        mA.className='warp1';
        i =(i+1)  % 2;
        setTimeout(function(){
            mA.className='warp3';
            mA.innerHTML = data[i].value;
            setTimeout(function(){
               mA.className='warp2';
            },50)
        },200)
    },3000)
})();


// 人物轮播
(function(){
    var nev_li = document.querySelectorAll('.sec-role .role-nev li');
    var person_li = document.querySelectorAll('.sec-role .role-person li');
    len = nev_li.length;
    var index=0;

    for(var i=0;i<len;i++){
        nev_li[i].index = i;
        nev_li[i].onclick = function(){
            nev_li[index].className = '';
            person_li[index].className = '';
            index = this.index;
            nev_li[index].className = 'on';
            person_li[index].className = 'on';
        }
        nev_li[i].onmouseenter = function(){
            clearInterval(timeRun);
        }
        person_li[i].onmouseenter = function(){
            clearInterval(timeRun);
        }
        person_li[i].onmouseleave = function(){
            timeRun = setInterval(time,2000);
        }
    }
    var time = function(){
            nev_li[index].className = '';
            person_li[index].className = '';
            index ++;
            if(index >= len){
                index = 0;
            }
            nev_li[index].className = 'on';
            person_li[index].className = 'on';
        }
    var timeRun = setInterval(time,2000);
})();



// banner 轮播图
(function(){
    var ban_pic = document.querySelectorAll('#top .banner .ban-pic li');
    var ban_dot = document.querySelectorAll('#top .banner .ban-dot li');
    var len = ban_pic.length;
    var index = 0;
    
    for(var i=0;i<len;i++){
        ban_dot[i].index = i;

        ban_dot[i].onmouseenter= function(){
            ban_dot[index].classList.remove('on');
            ban_pic[index].classList.remove('on');
            index = this.index;
            ban_dot[index].classList.add('on');
            ban_pic[index].classList.add('on');
            clearInterval(timeRun);
        }
        // nev_li[i].onmouseenter = function(){
        //     clearInterval(timeRun);
        // }
        ban_pic[i].onmouseenter = function(){
            clearInterval(timeRun);
        }
        ban_pic[i].onmouseleave = function(){
            timeRun = setInterval(time,2000);
        }
    }
    var time = function(){
            ban_dot[index].classList.remove('on');
            ban_pic[index].classList.remove('on');
            index ++;
            if(index >= len){
                index = 0;
            }
            ban_dot[index].classList.add('on');
            ban_pic[index].classList.add('on');
        }
    var timeRun = setInterval(time,2000);
})();



//news-box
(function(){
    var newsLi = document.querySelectorAll('#top .news-box ul li');
    var newsOl = document.querySelectorAll('#top .news-box ol');
    var len = newsLi.length;
    var index = 0;
    
    for(var i=0;i<len;i++){
        newsLi[i].index = i;

        newsLi[i].onmouseenter= function(){
            newsLi[index].classList.remove('on');
            newsOl[index].classList.remove('on');
            index = this.index;
            newsLi[index].classList.add('on');
            newsOl[index].classList.add('on');
        }
    }
})();



//大师
(function(){
    var ds_title = document.querySelectorAll('#dashi ul li');
    var ds_dot = document.querySelectorAll('#dashi ol li');
    len = ds_dot.length;
    var index=0;

    for(var i=0;i<len;i++){
        ds_dot[i].index = i;
        ds_dot[i].onmouseenter = function(){
            ds_dot[index].classList.remove('on');
            ds_title[index].classList.remove('on');

            ds_title[index].classList.remove('open');

            index = this.index;
            ds_dot[index].classList.add('on');

            if(index===1 || index===2){
                ds_title[index].classList.add('on');
                ds_title[index].classList.add('open');
            }else{
                ds_title[index].classList.add('on');
            }
            clearInterval(timeRun);
        }
       
        ds_title[i].onmouseenter = function(){
            clearInterval(timeRun);
        }
        ds_title[i].onmouseleave = function(){
            timeRun = setInterval(time,2000);
        }
    }
    var time = function(){
            ds_dot[index].classList.remove('on');
            ds_title[index].classList.remove('on');
            
            ds_title[index].classList.remove('open');
            index ++;
            if(index >= len){
                index = 0;
            }
            ds_dot[index].classList.add('on');
            
            if(index===1 || index===2){
                ds_title[index].classList.add('on');
                ds_title[index].classList.add('open');
            }else{
                ds_title[index].classList.add('on');
            }
            
        }
    var timeRun = setInterval(time,2000);
})();



//论坛
(function(){
    var gon_a = document.querySelectorAll('#gonglue .con-left .luntan-tab a');
    var gon_li = document.querySelectorAll('#gonglue .con-left .luntan-news li');
    var len =gon_a.length;
    var index = 0;
    
    for(var i=0;i<len;i++){
        gon_a[i].index = i;

        gon_a[i].onmouseenter= function(){
            gon_a[index].classList.remove('on');
            gon_li[index].classList.remove('on');
            index = this.index;
            gon_a[index].classList.add('on');
            gon_li[index].classList.add('on');
        }
    }
})();