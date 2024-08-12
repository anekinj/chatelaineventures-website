// navbarctions

// TODO: figure out how to switch cards properlynd not have refresh go back to home

// $('#navAbout').on('click', function() {
//     $('#divHome').slideUp(function () {
//         $('#divAbout').slideDown();
//     });
//     $('#navbarBrandHome').removeClass('active');
//     $('#navAbout').addClass('active');
// })

$('#navbarBrandHome').on('click', function() {
    if ($('#navAbout').hasClass('active')) {
        $('#divAbout').slideUp(function() {
            $('#divHome').slideDown();
        })
        $('#navAbout').removeClass('active');
        $('#navbarBrandHome').addClass('active');
    } else if ($('#navServices').hasClass('active')) {
        $('#divServices').slideUp(function() {
            $('#divHome').slideDown();
        })
        $('#navServices').removeClass('active');
        $('#navbarBrandHome').addClass('active');
    } else if ($('#navTipsTricks').hasClass('active')) {
        $('#divTipsTricks').slideUp(function() {
            $('#divHome').slideDown();
        })
        $('#navTipsTricks').removeClass('active');
        $('#navbarBrandHome').addClass('active');
    } else if ($('#navBlog').hasClass('active')) {
        $('#divBlog').slideUp(function() {
            $('#divHome').slideDown();
        })
        $('#navBlog').removeClass('active');
        $('#navbarBrandHome').addClass('active');
    }
})

$('#navAbout').on('click', function() {
    if ($('#navbarBrandHome').hasClass('active')) {
        $('#divHome').slideUp(function() {
            $('#divAbout').slideDown();
        })
        $('#navbarBrandHome').removeClass('active');
        $('#navAbout').addClass('active');
    } else if ($('#navServices').hasClass('active')) {
        $('#divServices').slideUp(function() {
            $('#divAbout').slideDown();
        })
        $('#navServices').removeClass('active');
        $('#navAbout').addClass('active');
    } else if ($('#navTipsTricks').hasClass('active')) {
        $('#divTipsTricks').slideUp(function() {
            $('#divAbout').slideDown();
        })
        $('#navTipsTricks').removeClass('active');
        $('#navAbout').addClass('active');
    } else if ($('#navBlog').hasClass('active')) {
        $('#divBlog').slideUp(function() {
            $('#divAbout').slideDown();
        })
        $('#navBlog').removeClass('active');
        $('#navAbout').addClass('active');
    }
})

$('#navServices').on('click', function() {
    if ($('#navbarBrandHome').hasClass('active')) {
        $('#divHome').slideUp(function() {
            $('#divServices').slideDown();
        })
        $('#navbarBrandHome').removeClass('active');
        $('#navServices').addClass('active');
    } else if ($('#navAbout').hasClass('active')) {
        $('#divAbout').slideUp(function() {
            $('#divServices').slideDown();
        })
        $('#navAbout').removeClass('active');
        $('#navServices').addClass('active');
    } else if ($('#navTipsTricks').hasClass('active')) {
        $('#divTipsTricks').slideUp(function() {
            $('#divServices').slideDown();
        })
        $('#navTipsTricks').removeClass('active');
        $('#navServices').addClass('active');
    } else if ($('#navBlog').hasClass('active')) {
        $('#divBlog').slideUp(function() {
            $('#divServices').slideDown();
        })
        $('#navBlog').removeClass('active');
        $('#navServices').addClass('active');
    }
})

$('#navTipsTricks').on('click', function() {
    if ($('#navbarBrandHome').hasClass('active')) {
        $('#divHome').slideUp(function() {
            $('#divTipsTricks').slideDown();
        })
        $('#navbarBrandHome').removeClass('active');
        $('#navTipsTricks').addClass('active');
    } else if ($('#navAbout').hasClass('active')) {
        $('#divAbout').slideUp(function() {
            $('#divTipsTricks').slideDown();
        })
        $('#navAbout').removeClass('active');
        $('#navTipsTricks').addClass('active');
    } else if ($('#navServices').hasClass('active')) {
        $('#divServices').slideUp(function() {
            $('#divTipsTricks').slideDown();
        })
        $('#navServices').removeClass('active');
        $('#navTipsTricks').addClass('active');
    } else if ($('#navBlog').hasClass('active')) {
        $('#divBlog').slideUp(function() {
            $('#divTipsTricks').slideDown();
        })
        $('#navBlog').removeClass('active');
        $('#navTipsTricks').addClass('active');
    }
})

$('#navBlog').on('click', function() {
    if ($('#navbarBrandHome').hasClass('active')) {
        $('#divHome').slideUp(function() {
            $('#divBlog').slideDown();
        })
        $('#navbarBrandHome').removeClass('active');
        $('#navBlog').addClass('active');
    } else if ($('#navAbout').hasClass('active')) {
        $('#divAbout').slideUp(function() {
            $('#divBlog').slideDown();
        })
        $('#navAbout').removeClass('active');
        $('#navBlog').addClass('active');
    } else if ($('#navServices').hasClass('active')) {
        $('#divServices').slideUp(function() {
            $('#divBlog').slideDown();
        })
        $('#navServices').removeClass('active');
        $('#navBlog').addClass('active');
    } else if ($('#navTipsTricks').hasClass('active')) {
        $('#divTipsTricks').slideUp(function() {
            $('#divBlog').slideDown();
        })
        $('#navTipsTricks').removeClass('active');
        $('#navBlog').addClass('active');
    }
})