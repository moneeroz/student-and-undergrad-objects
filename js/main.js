"use strict";

const __extends =
  (this && this.__extends) ||
  (function () {
    let extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (const p in b) {
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          }
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null) {
        throw new TypeError(
          `Class extends value ${String(b)} is not a constructor or null`,
        );
      }
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
// creating a class called students
const Students = /** @class */ (function () {
  function Students(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = "Female";
    this.nationality = nationality;
  }
  Students.prototype.getNationality = function () {
    console.log(
      "".concat(this.name, "'s nationality is ").concat(this.nationality),
    );
  };
  return Students;
})();
const UnderGrad = /** @class */ (function (_super) {
  __extends(UnderGrad, _super);
  function UnderGrad(name, age, gender, nationality, batch, gpa) {
    const _this = _super.call(this, name, age, gender, nationality) || this;
    _this.batch = batch;
    _this.gpa = gpa;
    return _this;
  }
  return UnderGrad;
})(Students);
const students = [
  new UnderGrad("Moneer", 28, "Male", "Yemeni", 7, 2.3),
  new UnderGrad("Carlos", 49, "Male", "Canadian", 3, 3.5),
  new UnderGrad("Moose", 69, "Male", "Alian", 1, 3.8),
  new UnderGrad("Pete", 33, "Male", "Petenia", 5, 2.9),
];
students.forEach((student) => {
  console.log(student.getNationality());
  console.log(student.gender);
});
