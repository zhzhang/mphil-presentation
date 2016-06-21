var presentation = new Debut($('.presentation')[0], { clickToProceed: false });
presentation.step(".disappear", "fade", {reverse: true}).then(".entailment-title", "animatecss", {props: {position: "absolute",
  left: 0,
  right: 0,
  top: "30px",
  margin: 0,
  "text-align": "center"}
}).then(".entailment", "appear");
presentation.step(".disappear2", "fade", {reverse: true}).and(".entailment", "animatecss", {props: {left: "50%", top: "35%", "font-weight": 300}}).then(".entail-example", "fade");
presentation.step(".fruits", "fade").step(".apple", "animatecss", {props: {display: "none"}}).and(".fruit", "animatecss", {props: {display: "inline"}}).step(".dih", "fade").and(".title-slide .footnote", "fade");

presentation.step(".title-slide", "fade", { reverse: true }).and(".vsms", "fade").and(".goldfish-ex", "appear");
presentation.step(".goldfish", "toggleclass", {class: "hint--always"});
presentation.step(".goldfish", "toggleclass", {class: "hint--always"});

presentation.step(".goldfish-ex", "appear", {reverse: true}).and(".cat-ex", "appear").step(".goldfish-vec", "appear");

//presentation.milestone("current");
//presentation.goTo("current");
presentation.step(".vsms", "fade", { reverse: true }).and(".balkir", "fade");
presentation.step(".outer-prod", "fade", { reverse: true }).and(".balkir-matrices", "fade");
presentation.step(".subspace-img-container", "fade").and(".balkir-matrices", "animatecss", { props: {left: "30%"} }).and(".balkir .footnote", "fade");
presentation.step(".distinguishing", "toggleclass", {class: "hint--always"});
presentation.step(".distinguishing", "toggleclass", {class: "hint--always"});
presentation.step(".balkir-matrices", "appear", { reverse: true }).and(".subspace-img-container", "appear", { reverse: true }).and(".balkir .footnote", "appear", {reverse: true}).and(".eigendecomp", "fade");
presentation.step(".eigendecomp", "fade", { reverse: true }).and(".subspace-img-container", "fade").and(".repres", "fade").and(".balkir .footnote", "fade");
presentation.step(".entropy", "toggleclass", {class: "hint--always"});

presentation.step(".balkir", "fade", { reverse: true }).and(".generation", "fade");
presentation.step(".datacell", "toggleclass", {class: "hint--always"});
presentation.step(".pgfs", "fade");

presentation.step(".generation", "fade", { reverse: true }).and(".main-results", "fade");

presentation.step(".main-results", "fade", { reverse: true }).and(".weeds", "fade");
presentation.step(".weeds", "fade", { reverse: true }).and(".other-results", "fade");

presentation.step(".other-results", "fade", { reverse: true }).and(".concl", "fade");
presentation.step(".concl", "fade", { reverse: true }).and(".final", "fade");
