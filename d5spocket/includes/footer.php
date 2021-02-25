<section class="elementor-section elementor-top-section elementor-element elementor-element-1fc4b888 elementor-section-boxed elementor-section-height-default elementor-section-height-default paddingg" data-id="1fc4b888" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div class="elementor-container elementor-column-gap-default">
            <div class="elementor-row">
            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3932ec66" data-id="3932ec66" data-element_type="column">
            <div class="elementor-column-wrap elementor-element-populated">
            <div class="elementor-widget-wrap">
            <div class="elementor-element elementor-element-75e4ab33 elementor-widget elementor-widget-heading" data-id="75e4ab33" data-element_type="widget" data-widget_type="heading.default">
            <div class="elementor-widget-container">
              <div class="centered">
                <div class="social">
                  <a href="https://instagram.com/rafael.nascimentoo_">
                    <img src="<?php echo PATH; ?>/public/img/instagram.png" class="img-res">
                  </a>
                  <a href="https://www.youtube.com/channel/UCRlnxbjDUNS0-0Ar5uc7E5Q">
                    <img src="<?php echo PATH; ?>/public/img/youtube.png" class="img-res">
                  </a>
                </div>
              </div>
            <p class="elementor-heading-title elementor-size-default">Copyright © 2021 – D5S pocket | Todos os direitos reservados</p>      </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
            </div>
         </div>
      </div>
      <div id="barra-fixa" class="barra-fixa modify-popup-botom">
        <div class="container ">
          <div class="box-esquerda-barra">
          </div>
          <div class="box-direita-barra">
            <div class="box-preco-barra desktop">	
              <a href="#btn-app" class="btn-comprar-barra-site-antigo btn-preco btn-app" target="_blank">
                <i class="fa fa-whatsapp" aria-hidden="true"></i> Suporte Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript"></script>
      <script type="text/javascript" src="<?php echo PATH; ?>/public/slick/slick.min.js"></script>
      <script src="<?php echo PATH; ?>/api/maxi.js?cache=40"></script>
      <script src="<?php echo PATH; ?>/public/js/block.js"></script>
      <script type="text/javascript">
         $('.nav a[href^="#"]').on('click', function(e) {
           e.preventDefault();
           var id = $(this).attr('href'),
           targetOffset = $(id).offset().top;
           $('html, body').animate({ 
             scrollTop: targetOffset - 100
           }, 1000);
           this.scrollIntoView({ behavior: "smooth" });
         });
        $('.single-item').slick({
          arrows: true
        });
        $('.slidee').slick({
          dots: true,
          infinite: true,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });
      </script>
   </body>
</html>