
$(document).ready(function() {
    $('.preloader').fadeOut(200)
    if(localStorage.getItem('lstvideo-intro')!=='true'){
      $('html,body').addClass('no-overflow')
      $('.backdrop').fadeIn()
    } 
    $('.botao-video').click(function(){
      $('.backdrop').fadeIn()
      $('html,body').addClass('no-overflow')
      document.body.scrollTop = 0
    })
    $('#fechar-video').click(function(){
      $('.backdrop').hide()
      $('html,body').removeClass('no-overflow')
      localStorage.setItem('lstvideo-intro', 'true')
      $(".menumob, .main-menu, .botao-video").removeClass('d-none')
    })

    $('#btn-1').hover(function(){
      $('.menu').css('background-image', "url('assets/capa/assets/tela_inicial_bt_1.png')")
    }, function(){
      $('.menu').css('background-image', "url('assets/capa/assets/tela_inicial_bt_inativo.png')")
    })
    $('#btn-2').hover(function(){
      $('.menu').css('background-image', "url('assets/capa/assets/tela_inicial_bt_2.png')")
    }, function(){
      $('.menu').css('background-image', "url('assets/capa/assets/tela_inicial_bt_inativo.png')")
    })
    $('#btn-3').hover(function(){
      $('.menu').css('background-image', "url('assets/capa/assets/tela_inicial_bt_3.png')")
    }, function(){
      $('.menu').css('background-image', "url('assets/capa/assets/tela_inicial_bt_inativo.png')")
    })
    $('#btn-4').hover(function(){
      $('.menu').css('background-image', "url('assets/capa/assets/tela_inicial_bt_4.png')")
    }, function(){
      $('.menu').css('background-image', "url('assets/capa/assets/tela_inicial_bt_inativo.png')")
    })
    $('#btn-5').hover(function(){
      $('.menu').css('background-image', "url('assets/capa/assets/tela_inicial_bt_5.png')")
    }, function(){
      $('.menu').css('background-image', "url('assets/capa/assets/tela_inicial_bt_inativo.png')")
    })
 

    // window.setTimeout(function(){
    //   $('#bt1').removeClass('hidden')
    //   $('#bt1').addClass('animate__animated animate__backInRight animate__delay-5')
    // }, 100)
    // window.setTimeout(function(){      
    //   $('#bt2').removeClass('hidden')      
    //   $('#bt2').addClass('animate__animated animate__backInRight animate__delay-3')
    // }, 600)
    // window.setTimeout(function(){      
    //   $('#bt3').removeClass('hidden')      
    //   $('#bt3').addClass('animate__animated animate__backInRight animate__delay-3')
    // }, 1100)
    // window.setTimeout(function(){      
    //   $('#bt4').removeClass('hidden')      
    //   $('#bt4').addClass('animate__animated animate__backInRight animate__delay-3')
    // }, 1600)
    // window.setTimeout(function(){      
    //   $('#bt5').removeClass('hidden')      
    //   $('#bt5').addClass('animate__animated animate__backInRight animate__delay-3')
    // }, 2000)
    // window.setTimeout(function(){      
    //   $('#background4').addClass('pulse')      
    // }, 2500)
    // window.setTimeout(function(){      
    //   $('#background4').removeClass('pulse')     
    // }, 6000)


    

});
  