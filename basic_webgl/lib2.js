const lib2 = (() => {
  function sum(a, b) {
    console.log("file lib2.js");
    return a + b;
  }

  function f() {
    sum(1, 2);
  }

  return { f: f };
})();
