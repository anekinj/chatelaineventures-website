// Navigation Bar actions

//collapsible navbar for smaller screens
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

$('#navbarBrandHome').on('click', function() {
    if ($('#navAbout').hasClass('active')) {
        $('#divAbout').slideToggle(function() {
            $('#divHome').fadeToggle();
        })
        $('#navAbout').removeClass('active');
        $('#navbarBrandHome').addClass('active');
    } else if ($('#navServices').hasClass('active')) {
        $('#divServices').slideToggle(function() {
            $('#divHome').fadeToggle();
        })
        $('#navServices').removeClass('active');
        $('#navbarBrandHome').addClass('active');
    } else if ($('#navTipsTricks').hasClass('active')) {
        $('#divTipsTricks').slideToggle(function() {
            $('#divHome').fadeToggle();
        })
        $('#navTipsTricks').removeClass('active');
        $('#navbarBrandHome').addClass('active');
    } else if ($('#navBlog').hasClass('active')) {
        $('#divBlog').slideToggle(function() {
            $('#divHome').fadeToggle();
        })
        $('#navBlog').removeClass('active');
        $('#navbarBrandHome').addClass('active');
    }
})

$('#navAbout').on('click', function() {
    if ($('#navbarBrandHome').hasClass('active')) {
        $('#divHome').fadeToggle(function() {
            $('#divAbout').slideToggle();
        })
        $('#navbarBrandHome').removeClass('active');
        $('#navAbout').addClass('active');
    } else if ($('#navServices').hasClass('active')) {
        $('#divServices').slideToggle(function() {
            $('#divAbout').slideToggle();
        })
        $('#navServices').removeClass('active');
        $('#navAbout').addClass('active');
    } else if ($('#navTipsTricks').hasClass('active')) {
        $('#divTipsTricks').slideToggle(function() {
            $('#divAbout').slideToggle();
        })
        $('#navTipsTricks').removeClass('active');
        $('#navAbout').addClass('active');
    } else if ($('#navBlog').hasClass('active')) {
        $('#divBlog').slideToggle(function() {
            $('#divAbout').slideToggle();
        })
        $('#navBlog').removeClass('active');
        $('#navAbout').addClass('active');
    }
})

$('#navServices').on('click', function() {
    if ($('#navbarBrandHome').hasClass('active')) {
        $('#divHome').fadeToggle(function() {
            $('#divServices').slideToggle();
        })
        $('#navbarBrandHome').removeClass('active');
        $('#navServices').addClass('active');
    } else if ($('#navAbout').hasClass('active')) {
        $('#divAbout').slideToggle(function() {
            $('#divServices').slideToggle();
        })
        $('#navAbout').removeClass('active');
        $('#navServices').addClass('active');
    } else if ($('#navTipsTricks').hasClass('active')) {
        $('#divTipsTricks').slideToggle(function() {
            $('#divServices').slideToggle();
        })
        $('#navTipsTricks').removeClass('active');
        $('#navServices').addClass('active');
    } else if ($('#navBlog').hasClass('active')) {
        $('#divBlog').slideToggle(function() {
            $('#divServices').slideToggle();
        })
        $('#navBlog').removeClass('active');
        $('#navServices').addClass('active');
    }
})

$('#navTipsTricks').on('click', function() {
    if ($('#navbarBrandHome').hasClass('active')) {
        $('#divHome').fadeToggle(function() {
            $('#divTipsTricks').slideToggle();
        })
        $('#navbarBrandHome').removeClass('active');
        $('#navTipsTricks').addClass('active');
    } else if ($('#navAbout').hasClass('active')) {
        $('#divAbout').slideToggle(function() {
            $('#divTipsTricks').slideToggle();
        })
        $('#navAbout').removeClass('active');
        $('#navTipsTricks').addClass('active');
    } else if ($('#navServices').hasClass('active')) {
        $('#divServices').slideToggle(function() {
            $('#divTipsTricks').slideToggle();
        })
        $('#navServices').removeClass('active');
        $('#navTipsTricks').addClass('active');
    } else if ($('#navBlog').hasClass('active')) {
        $('#divBlog').slideToggle(function() {
            $('#divTipsTricks').slideToggle();
        })
        $('#navBlog').removeClass('active');
        $('#navTipsTricks').addClass('active');
    }
})

$('#navBlog').on('click', function() {
    if ($('#navbarBrandHome').hasClass('active')) {
        $('#divHome').fadeToggle(function() {
            $('#divBlog').slideToggle();
        })
        $('#navbarBrandHome').removeClass('active');
        $('#navBlog').addClass('active');
    } else if ($('#navAbout').hasClass('active')) {
        $('#divAbout').slideToggle(function() {
            $('#divBlog').slideToggle();
        })
        $('#navAbout').removeClass('active');
        $('#navBlog').addClass('active');
    } else if ($('#navServices').hasClass('active')) {
        $('#divServices').slideToggle(function() {
            $('#divBlog').slideToggle();
        })
        $('#navServices').removeClass('active');
        $('#navBlog').addClass('active');
    } else if ($('#navTipsTricks').hasClass('active')) {
        $('#divTipsTricks').slideToggle(function() {
            $('#divBlog').slideToggle();
        })
        $('#navTipsTricks').removeClass('active');
        $('#navBlog').addClass('active');
    }
})
