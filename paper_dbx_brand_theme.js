function(){
    var bg_fg = [
        ["#0d2481", "#ffafa2"],  /* Pink on Blue */
        ["#ffafa2", "#0d2481"],  /* Blue on Pink */
        ["#610a2d", "#ffffff"],  /* White on Dark Purple */
        ["#cab7fe", "#ffffff"],  /* White on Light Purple */
        ["#b40018", "#ffffff"],  /* White on Red */
        ["#fa5624", "#ffffff"],  /* White on Orange */
        ["#af761f", "#cab7fe"],  /* Tan on Light Purple */
        ["#cab7fe", "#fa5624"],  /* Orange on Light Purple */
    ];

    if (window.paper_color_idx === undefined || window.paper_color_idx >= bg_fg.length - 1) {
        window.paper_color_idx = 0;
    } else {
        window.paper_color_idx++;
    }

    var bg = bg_fg[window.paper_color_idx][0];
    var fg = bg_fg[window.paper_color_idx][1];

    /* Buttons */
    $(".svg-icon").css("fill", bg);
    $(".dmc-button").css("color", bg);
    $(".dmc-button-primary").css({
        "background-color": bg,
        "color": fg,
    });

    /* edit mode */
    $(".main-header-divider").css("border-right-color", bg);
    $("#main-header, .main-header-right, .hp-header-title, .hp-header-privacy-avatar-doc-type").css({
        "color": bg,
        "background-color": fg,
    });
    $(".hp-header-subtitle-dot-separator").css("background-color", bg);

    /* presentation mode */
    $(".hp-p8n-controls").css("background-color", fg);
    $(".ace-editor, body").css({
        "color": fg,
        "background-color": bg,
    });

    $('table').css('background-color', bg);
}
