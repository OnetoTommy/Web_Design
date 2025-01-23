jQuery(window).on('load', function () {
    let textarea = document.getElementById("g-recaptcha-response-100000");
    textarea.setAttribute("aria-hidden", "true");
    textarea.setAttribute("aria-label", "do not use");
    textarea.setAttribute("aria-readonly", "true");
});