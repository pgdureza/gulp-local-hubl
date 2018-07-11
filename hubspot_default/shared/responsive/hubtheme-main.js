$(function() {



    /**
     * Mobile Nav
     *
     * Hubspot Standard Toggle Menu
     */

    $('.custom-menu-primary').addClass('js-enabled');
    $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger cta_border_button">MENU</div>');
    $('.custom-menu-primary .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i></i></div>');
    $('.mobile-trigger').click(function() {
        $(this).next('.custom-menu-primary .hs-menu-wrapper').slideToggle(250);
        $('body').toggleClass('mobile-open');
        $('.child-trigger').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(250);
        return false;
     });

    $('.child-trigger').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });



    /**
     * Accordion
     */

    var $accordion = $('.accordion');

    // Initially hide all accordion content
    $accordion.find('.accordion_content').hide();
    // Initially display the accordion content with .expanded class
    $accordion.find('.accordion_group.expanded .accordion_content').show();

    $accordion.find('.accordion_header').click(function(){

        // Hide the displayed sibling accordion content so only one appears at a time
       $accordion.find(".accordion_header").not(this).parent(".accordion_group.expanded").removeClass('expanded').children('.accordion_content').stop(true,true).slideUp();

        if(!$(this).parent('.accordion_group').hasClass('expanded')){
            // Display the accordion content if it is not displayed
            $(this).parent(".accordion_group").addClass('expanded').children('.accordion_content').stop(true,true).slideDown();
        }
        else{
            // Hide the accordion content if it is displayed
            $(this).parent(".accordion_group").removeClass('expanded').children('.accordion_content').stop(true,true).slideUp();
        }
    });



    /**
     * Well Module Close Button
     */

    $("#well .close").click(function(){
        $(this).parent("#well").fadeOut();
    });



    /**
     * Set Banner Image on Homepage
     */

    // Grab the SRC of the Background Image module uploaded image
    var bannerSRC = $(".background-image").find("img").attr("src");

    // Apply the src as the background image for the banner area
    $("#banner-background-image").css('background-image', 'url(' + bannerSRC + ')');



    /**
     * Set Offer Image on Homepage
     */

    // Grab the SRC of the Background Image module uploaded image
    var offerBannerSRC = $(".offer-image").find("img").attr("src");

    // Apply the src as the background image for the banner area
    $("#offer-background-image").css('background-image', 'url(' + offerBannerSRC + ')');



    /**
     * Back to Top
     */

    var $backToTop = $(".back-to-top");
    $backToTop.hide();

    $(window).scroll(function() {
        if ($(this).scrollTop()>50) {
            $backToTop.fadeIn();
        } else {
            $backToTop.fadeOut();
        }
    });

    $backToTop.find("a").click(function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 500);
    });



    /**
     * Small Header on Page Scroll
     */

    $(window).scroll(function(){

        // Variables
        var $body = $("body");
        var windowScrollTop = $(window).scrollTop();
        var secondRowOffset = $(".body-container .row-fluid-wrapper:nth-child(2)").offset();

        if(windowScrollTop > secondRowOffset.top){
            $body.addClass("small-header");
        }
        else {
            $body.removeClass("small-header");
        }
    });



    /**
     * Tabber
     */

    // Hide all panes initially except for the first 'active' one
    $(".tab-pane").not(".active").hide();

    // Loop through all the tabber panes
    $('.tabber-content .tab-pane').each(function(i, el){

       // Set the ID
       $(el).attr("id", "tab-" + i);

    });

    // Loop through all the tabber anchors
    $(".tabber-tabs a").each(function(i, el){

        // Set HREF Using the Index
        $(el).attr("href", "#tab-" + i);

        // Variable for the Pane ID based on the HREF
        var ID = $(el).attr("href");

        // Click Function
        $(this).click(function(e){

            // Prevent default functionality of the anchor
            e.preventDefault();

            // If the parent LI does not have the active class
            if(!$(this).parent().hasClass("active")){

                // Give the parent LI the active state styles and hide all other panes
                $(this).parent().addClass("active").siblings().removeClass("active");

                // Fade in the corresponding pane and hide all other panes
                $(ID).fadeIn().siblings().hide();
            }
        });

    });

    /**
    * Blog subscribe
    */

    // Set placeholder text for email input
    window.onload = function () {
        $('.widget-type-blog_subscribe .input :input').attr("placeholder", "Email").attr('style', 'text-align:center;');};

});  /* End of Document Ready */