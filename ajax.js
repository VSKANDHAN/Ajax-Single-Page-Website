// $('ul a').on('click',function(e){
//     e.preventDefault();
//     let $url=this.href;
//     let $xhr=new XMLHttpRequest();
//     $xhr.onload=function(){
      
//         console.log($url)
//         $('#contentp').html=" "
    
//       $('#contentp').html($xhr.responseText);
       
//     }
//     $xhr.open('GET',$url,true);
//     $xhr.send();
// })
$('ul a').on('click',function(e){
    e.preventDefault()
    let $url=this.href+' #content';
    $('#container').load($url).hide().fadeIn(600);
    // history.pushState('','',$url);

})