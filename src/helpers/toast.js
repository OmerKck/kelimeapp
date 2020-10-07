import toast from "izitoast";

export const showQuestionToast = (
  title,
  message,
  position = "center",
  cb = null,
  cb2 = null
) => {
  toast.question({
    timeout: 10000,
    close: false,
    overlay: true,
    displayMode: "once",
    id: "question",
    zindex: 999,
    title,
    message,
    position,
    buttons: [
      [
        "<button><b>Evet</b></button>",
        function (instance, toast) {
          instance.hide({ transitionOut: "fadeOut" }, toast, "button");
          cb();
        },
        true,
      ],
      [
        "<button>Hayır</button>",
        function (instance, toast) {
          instance.hide({ transitionOut: "fadeOut" }, toast, "button");
          //TODO:loading ekranı

          cb2();
        },
      ],
    ],
    onClosing: function (instance, toast, closedBy) {
      console.info("Closing | closedBy: " + closedBy);
    },
    onClosed: function (instance, toast, closedBy) {
      console.info("Closed | closedBy: " + closedBy);
      console.log(instance);
    },
  });
};
