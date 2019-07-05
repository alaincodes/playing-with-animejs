anime({
  targets: [".arr1", ".arr2", ".arr3"],
  translateY: -200,
  translateX: -100,
  easing: "easeInOutQuad",
  direction: "alternate", // smooth back and forth
  loop: 0,
  rotate: anime.stagger([-360, 360]),
  delay: anime.stagger(500) // increase delay by 200ms for each elements.
});

anime({
  targets: [".arr4", ".arr5", ".arr6"],
  translateY: 200,
  translateX: 100,
  easing: "easeInOutQuad",
  direction: "alternate", // smooth back and forth
  loop: 0,
  rotate: anime.stagger([-360, 360]),
  delay: anime.stagger(500) // increase delay by 200ms for each elements.
});
