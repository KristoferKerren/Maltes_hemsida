window.onload = (event) => {
  const färgLista = [
    "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgb(85, 155, 235) 60%, rgb(147, 102, 235) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)",
    "rgba(253, 253, 30, 0.93)",
    "rgb(27, 235, 27)",
    "rgb(15, 195, 254)",
    "rgb(2, 2, 255)",
    "rgb(249, 121, 142)",
    "rgb(255, 99, 71)",
    "rgb(240, 108, 245)",
  ];

  let färgSiffra = 0;
  document.body.style.background = färgLista[0];

  const rubrikfärgLista = [
    "rgb(231, 62, 231)",
    "rgb(133, 30, 133)",
    "rgb(50, 82, 4)",
    "rgb(22, 22, 134)",
  ];
  let rubrikFärgSiffra = 0;
  const h2Elements = document.querySelectorAll("h2");

  h2Elements.forEach((h2) => {
    h2.style.color = rubrikfärgLista[rubrikFärgSiffra];
  });

  const bytFärgKnapp = document.getElementById("byt-bakgrundsfärg-knapp");
  bytFärgKnapp.addEventListener("click", () => {
    färgSiffra = färgSiffra + 1;
    if (färgSiffra > färgLista.length - 1) {
      färgSiffra = 0;
    }
    document.body.style.background = färgLista[färgSiffra];
  });

  const bytRubrikFärgKnapp = document.getElementById("byt-rubriksfärg-knapp");
  bytRubrikFärgKnapp.addEventListener("click", () => {
    rubrikFärgSiffra = rubrikFärgSiffra + 1;
    if (rubrikFärgSiffra > rubrikfärgLista.length - 1) {
      rubrikFärgSiffra = 0;
    }
    h2Elements.forEach((h2) => {
      h2.style.color = rubrikfärgLista[rubrikFärgSiffra];
    });
  });
};
