function curriedAdd(total) {
  if (total === undefined) return 0;
  return function addNext(num) {
    if (num === undefined) return total;
    total += num;
    return console.log(addNext);
  };
}
let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();

firstAdder(); // 0
secondAdder(1)(2)(); // 3
thirdAdder(2)(8)(5)(1)(); // 16onsole.log(thirdAdder(2)(8)(5)(1));

module.exports = { curriedAdd };
