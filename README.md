Paper Docs/Presentation with dropbox.design color scheme bookmarklet

[Bookmarklet](javascript:(function(){
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

    /* Main colors in editor */
    $(".ace-editor, body").css("color", fg).css("background-color", bg);
    /* Invert colors for header */
    $(".hp-p8n-controls").css("background-color", fg);
    $(".hp-p8n-controls .dmc-button, .hp-p8n-controls .dmc-button .svg-icon").css("color", bg).css("fill", bg);
})();)
