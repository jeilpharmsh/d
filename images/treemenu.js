$(document).ready(function () {
  $('.c_cnt').each(function (index){
      $(this).remove('.c_cnt');
  })
});

var label = '<label class="label_e" for="root">ROOT</label>';
$(".category_list > li").prepend(label);

var input = '<input type="checkbox" id="root" checked="checked">';
$(".category_list > li").prepend(input);

var label = '<label class="label_b" for="root">ROOT</label>';
$(".menu_list > li").prepend(label);

var input = '<input type="checkbox" id="root" checked="checked">';
$(".menu_list > li").prepend(input); 


$(document).ready(function () {
      
  $('.c_cnt').each(function (index){
      $(this).remove('.c_cnt');
  })
 
  $('.tt_category input').each(function (index){
      $( this).attr('id','input'+index);
  })

  $('.tt_menu input').each(function (index){
      $( this).attr('id','input_b'+index);
  })

  $('.tt_category label').each(function (index){
      $(this).attr('for','input'+index);
  })

  $('.tt_menu label').each(function (index){
      $(this).attr('for','input_b'+index);
  })

  $('.category_list li .link_item').each(function (index){
        $(this).addClass('Cate'+index);
  })
 
  $('.category_list').each(function (index){
        $(this).children('li').addClass('Cate_in');
  })

  $('.menu_list li .link_item').each(function (index){
        $(this).addClass('Cate_b'+index);
  })
 
 $('.label_e').each(function (index){
      var Catename = $(".Cate"+index).text();
      $(this).addClass('Label_E'+index);
      $('.Label_E'+index).text(Catename);
  })

 $('.label_b').each(function (index){
      var Catename = $(".Cate_b"+index).text();
      $(this).addClass('Label_B'+index);
      $('.Label_B'+index).text(Catename);
  })

  $('.Cate_in').each(function (index){
      if($(this).children('.sub_category_list').length > 0){
         
      }else{
         $(this).children('.label_e').remove();               
         $(this).children('.link_item').css('display','block');
      }
  })
});









