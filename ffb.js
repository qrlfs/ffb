// (document).ready() runs when the page has loaded
$(document).ready(function() {
  // configure login
  $("#login_box form input").attr("onfocus", "activate_login();")
  $("#login_box button[type='submit']").after("<a href='ForgotPassword' class='pw_help glyphicon glyphicon-question-sign'></a>");
  $("#login_box button[type='submit']").html("<i class='fa fa-lock' aria-hidden='true'></i>Login");
  if ($(".hide-login").length) {
    $("#login_box").addClass("invis");
  };
  // fix small viewport menus
  if ($(".hide-menu").length) {
    $("ul#mynav").addClass("invis");
    $("nav.navbar>.container>.navbar-header").addClass("invis");
  };
  // configure contact form
  if ($(".contact-form").length) {
    $(".panel>.panel-body>form").attr("id", "qrl-contact-form");
    $(".panel>.primary_color_bk").css("display", "none");
    $("#bodypanel .col-md-12 .panel.panel-default").addClass("body-wrap-fix");
  };
  // configure footer
  $("span.gray_text:contains('© Copyright')").html("&copy; " + (new Date).getFullYear() + " First Federal Bank");
  $("body>div.container-full").last().attr("id", "qrl-footer"); 
  $("body").children().wrapAll("<div id='qrl-wrapper'></div>"); 
  $("#qrl-footer *:contains('|')").each(function() {    
    $(this).html($(this).html().replace(/\|/g, ""));
  });
  $("a[href*='.ffbf.com']").addClass("bypass-bump");
  $("a[href$='security-privacy']").attr("href", "https://www.ffbf.com/security-privacy");
  // redirects privacy_statement to https://www.ffbf.com/security-privacy
  if ($(".privacy_statement_redirect").length) {
    window.location = "https://www.ffbf.com/security-privacy"; 
  }
  $("a[href$='accessibility-statement']").attr("href", "https://www.ffbf.com/accessibility-statement");  
  // redirects accessibility to https://www.ffbf.com/accessibility-statement
  if ($(".accessibility_redirect").length) {
    window.location = "https://www.ffbf.com/accessibility-statement"; 
  }
  $("#qrl-footer a").each(function() {
    $(this).text($(this).text().trim());
  });  
  // add favicon
  var fav = "data:image/x-icon;base64,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";
  $("head").prepend("<link rel='shortcut icon' href='" + fav + "' />");
  // redirects contact_us to contact
  if ($(".contact-redirect").length) {
    window.location = "/contact"; 
  }
  // wraps the resource page for css helpers
  if ($(".resources_wrap").length) {
    var r = window.location.hash.replace("#", "");
    $("#resource" + r).collapse("show");
  }
  // fix the speed bump modal arrangement
  if ($("#modal_leavingPage").length) {
    var t = $("#modal_leavingPage .modal-title");
    var h = $("#modal_leavingPage .modal-header");
    h.after("<div class='modal-body'><p>" + t.text() + "</p><p>Would you like to continue?</p></div>");
    t.text("You're about to leave the First Federal Bank website.");
  }
  // fixes to upload_file page
  if ($('upload-loan').length) {
    // remove MISMO option
    $('#file_type option[value="ftMismoAUS"]').remove();
    // fix css
    $(".question_label").removeClass("question_label").css("font-weight","normal");
    $("h3.caption.ng-scope").replaceWith('<h1>' + $("h3.caption.ng-scope").html() + '</h1>');
    $(".nav-upload").addClass("active");
  }
  // allows manual bypass of speedbump for approvedfast or ffbf-hosted content
  $(".bypass-bump").each(function() {
    var anchor = $(this);
    anchor.unbind("click");
  });
});
// end (document).ready()
// activate_login() highlights the login area
function activate_login() {
  if ($("#login_box.login_active").length) {
  //login is already active; do nothing
  } else {
    //configure the login animation
    //dim background
    $("body").prepend("<div id='login_active_bg' class='login_active' onclick='deactivate_login();'></div>")
    //move login
    $("#login_box").addClass("login_active"); 
  }   
}
// deactivate_login() un-highlights the login area
function deactivate_login() {
  //remove animated login elements
  $("#login_active_bg").remove();
  $("#login_box").removeClass("login_active"); 
}
// determines if the login form is available
function login_available() {
  var login = $("#login_box");  
  if (login.find('button[type="submit"]').length) {
    return true;
  } else {
    return false;
  }
}
// utility to get query string parameter by name
function getParameterByName(name) {
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
// loan search fixes
if ($("#loanQuery").length) {
  $("#loanQuery input[name='columns']").val("Loan Number,Borrower Name,Loan Amount,Rate,Channel,Status,Lock Expires");
  $("#ihm_query_loan_number").attr("type", "number");
  $("#ihm_query_loan_number").keypress(function(e) {
    if (e.which == 13) {
      window.location = "summary?query_id=11076646&searchCall=leftmenu&columns=Loan+Number%2CBorrower+Name%2CLoan+Amount%2C%2CRate%2CChannel%2CStatus%2CLock+Expires&ihm_query_loan_number=" + encodeURIComponent(this.value);
    }
  });
  $("#ihm_query_last_name").keypress(function(e) {
    if (e.which == 13) {
      window.location = "summary?query_id=11074519&searchCall=leftmenu&columns=Loan+Number%2CBorrower+Name%2CLoan+Amount%2C%2CRate%2CChannel%2CStatus%2CLock+Expires&ihm_query_last_name=" + encodeURIComponent(this.value);
    }
  });
}
