var app = {
  whichEdge: {
    LEFT: 0,
    RIGHT: 1
  },
  chatHeadPosition: null
}

$(document).ready(function() {
  app.chatHeadPosition = app.whichEdge.RIGHT;
  $(".chatHead")
    .draggable({
      containment: "document",
      scroll: "false"
    })
    .on("dragstop", function(event) {
      var widthOfBody = $(document.body).width();
      if (event.clientX < (widthOfBody / 2)) {
        app.chatHeadPosition = app.whichEdge.LEFT;
        $(this).animate({
          left: 0
        });
      } else {
        app.chatHeadPosition = app.whichEdge.RIGHT;
        $(this).animate({
          left: widthOfBody - $(this).width()
        })
      }
    });

  $(window).resize(function() {
    switch (app.chatHeadPosition) {
      case app.whichEdge.LEFT:
        $(".chatHead").css({
          top: 0,
          left: 0
        });
        break;
      case app.whichEdge.RIGHT:
        var widthOfBody = $(document.body).width();
        $(".chatHead").css({
          top: 0,
          left: widthOfBody - $(".chatHead").width()
        });
        break;
    }
  });
});
