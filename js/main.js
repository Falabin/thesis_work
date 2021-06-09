$(document).ready(() => {
    $('#teachers-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplaySpeed: 2000,
                    autoplay: true,
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplaySpeed: 2000,
                    autoplay: true,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplaySpeed: 2000,
                    autoplay: true,
                }
            },
        ]
    });

    $(function () {
        $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
        $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
    });

    $('.open-modal').click(() => {
        $('#reservation-container').css('display', 'flex');
    });

    $('.open-order').click(() => {
        $('#order-call-container').css('display', 'flex');
    });

    $('#reservation-cancel-close, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide();
        }
    });

    $('#reservation-cancel-close-order, #order-call-container').click((e) => {
        if (e.target.id === 'order-call-container' || e.target.id === 'reservation-cancel-close-order') {
            $('#order-call-container').hide();
        }
    });

    $('#reserve-button > button').click(() => {
        let name = $('#name');
        let phone = $('#phone');

        if (name.val() && phone.val()) {
            $('#reservation-sent').show();
            $('#reservation-content').hide();
            // $.ajax({
            //     type: 'post',
            //     url: 'mail.php',
            //     data: 'name=' + name.val() + '&phone=' + phone.val(),
            //     success: () => {
            //         $('#reservation-sent').show();
            //         $('#reservation-content').hide();
            //     },
            //     error: () => {
            //         $('#reservation-container').hide();
            //         alert('Ошибка бронирования.Свяжитесь пожалуйста по номеру телефона')
            //     }
            // });
        } else {
            name.css('border-color', 'red');
            phone.css('border-color', 'red');
            $('.error-input').show();
        }
    });

    $('#submit').click(() => {
        let name = $('#name-1');
        let phone = $('#phone-1');
        if (name.val() && phone.val()) {
            $('#address-reserve').show();
            $('#address-button').hide();
            // $.ajax({
            //     type: 'post',
            //     url: 'mail.php',
            //     data: 'name=' + name.val() + '&phone=' + phone.val(),
            //     success: () => {
            //         $('#address-reserve').show();
            //         $('#address-button').hide();
            //     },
            //     error: () => {
            //         $('#address-button').hide();
            //         alert('Ошибка бронирования.Свяжитесь пожалуйста по номеру телефона')
            //     }
            // });
        } else {
            name.css('border-color', 'red');
            phone.css('border-color', 'red');
            $('.error-input-address').show();
        }
    });


    $('#order-button').click(() => {
        let phone = $('#phone-2');
        if (phone.val()) {
            $('#order-sent').show();
            $('#order-content').hide();
            // $.ajax({
            //     type: 'post',
            //     url: 'mail.php',
            //     data: 'phone=' + phone.val(),
            //     success: () => {
            //         $('#order-sent').show();
            //         $('#order-content').hide();
            //     },
            //     error: () => {
            //         $('#order-content').hide();
            //         alert('Ошибка бронирования.Свяжитесь пожалуйста по номеру телефона')
            //     }
            // });
        } else {
            phone.css('border-color', 'red');
            $('.error-input-order').show();
        }
    });


    $('.tabs-block').click((event) => {
        let currentElement = $(event.target);
        $('.tabs-block').removeClass('active');
        currentElement.addClass('active');
    });


    $('#menu a').click((event) => {
        let currentElement = $(event.target);
        $('#menu a').removeClass('active');
        currentElement.addClass('active');
    });

    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    });

    $('#header #menu').click(() => {
        $('#header').removeClass('menu-open');
    });

    new WOW({
        animateClass: 'animate__animated',
    }).init();

})

