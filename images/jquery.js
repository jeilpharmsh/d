eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1(\'.l\').5(0(){7($(".2").3("4")=="8"){1(\'.2\').3("4","g")}k{1(\'.2\').3("4","8")}});$(".j-i").5(0(){$(".6,.e,f").h("d");c.b.a="#9"});c.m=0(){7(b.a!="#9"){$(".6,.e,f").n("d")}};0 o(){p.q()}',27,27,'function|jQuery|search|css|display|click|sidebar_in|if|none|cover|hash|location|window|open|categories_cover|html|block|addClass|trigger|menu|else|search_button|onhashchange|removeClass|open_close|history|back'.split('|'),0,{}))


$(document).ready(function () {
  $('.category_list').find('.link_item, .link_sub_item').filter('[href="' + location.pathname +'"]').parents('.sub_category_list').prevAll('input').prop('checked', false);
  $('.category_list').find('.link_item, .link_sub_item').filter('[href="' + location.pathname +'"]').css('font-weight','bold');
        
  var jb = $( '.Cate' ).text();
  $('.category_list').find('.link_item, .link_sub_item').filter('[href="' + jb +'"]').parents('.sub_category_list').prevAll('input').prop('checked', false);
  $('.category_list').find('.link_item, .link_sub_item').filter('[href="' + jb +'"]').css('font-weight','bold');
});

//텍스트 로그인 로그아웃 
function login() {};              
  $(function() {
    if(window.T.config.USER.name) {
    	$('#login').text('LOGOUT');
    	$('#login2').text('LOGOUT');
        login = function() { 
        	document.location.href = "https://www.tistory.com/auth/logout?redirectUrl=" +  encodeURIComponent(window.location.href); 
        };
    }
    else {
    	$('#login').text('LOGIN');
    	$('#login2').text('LOGIN');
    	login = function() { 
    		document.location.href = "https://www.tistory.com/auth/login?redirectUrl=" +  encodeURIComponent(window.location.href);
    	};
      }
   });

