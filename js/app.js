$(".chatHead")
  .draggable({
    containment: "document",
    scroll: "false"
  }).on("dragstop", function(event) {
    var widthOfDocument = $(document).width();
    if (event.clientX < (widthOfDocument / 2)) {
      $(this).animate({
        left: 0
      });
    } else {
      $(this).animate({
        left: widthOfDocument - $(this).width()
      })
    }
  });
