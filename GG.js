function bindhtmltoimage() {
    myimg = $('body').find('.imgclass');
    divSlot.each(function (index) {
        $(this).bind('mouseover', function () {
            try {
                //position the hover box on image. you can customize the y and x axis to place it left or right.
                var x = $(this).offset().left;
                var y = $(this).offset().top;
                var position = $(window).height() - ($("#divHover").height() + y);
                var widthposition = $(window).width() - ($("#divHover").width() + x);
                if (position < 0 || widthposition < 0) {
                    if (position < 0) {
                        $("#divHover").css({
                            position: 'absolute',
                            left: x + 20,
                            top: y - $("#divHover").height() - 20
                        });
                    }
                    if (widthposition < 0) {
                        $("#divHover").css({
                            position: 'absolute',
                            left: x - $("#divHover").width(),
                            top: y + 20
                        });
                    }
                }
