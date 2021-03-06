"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CountdownTimer =
  /*#__PURE__*/
  function (_Component) {
    _inherits(CountdownTimer, _Component);

    function CountdownTimer(props) {
      var _this;

      _classCallCheck(this, CountdownTimer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CountdownTimer).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "handleCountdown", function (seconds) {
        _this.setState({
          count: seconds
        });
      });

      _defineProperty(_assertThisInitialized(_this), "format", function (time) {
        var _this$props = _this.props,
          border = _this$props.border,
          showTitle = _this$props.showTitle,
          direction = _this$props.direction,
          noPoints = _this$props.noPoints,
          color = _this$props.color,
          backgroundColor = _this$props.backgroundColor,
          responsive = _this$props.responsive,
          size = _this$props.size,
          hideDay = _this$props.hideDay,
          hideHours = _this$props.hideHours,
          dayTitle = _this$props.dayTitle,
          hourTitle = _this$props.hourTitle,
          minuteTitle = _this$props.minuteTitle,
          secondTitle = _this$props.secondTitle,
          labelSize = _this$props.labelSize;
        var seconds = time % 60;
        var minutes = Math.floor(time / 60) % 60;
        var hours = Math.floor(time / 3600) % 24;
        var day = Math.floor(time / 86400);
        day = day.toString().length === 1 ? "0".concat(day) : day;
        minutes = Number.parseInt(minutes.toString().length === 1 ? "0".concat(minutes) : minutes);
        seconds = Number.parseInt(seconds.toString().length === 1 ? "0".concat(seconds) : seconds);
        hours = hours.toString().length === 1 ? "0".concat(hours) : hours;

        if (showTitle) {
          var _borderClass = border ? 'border' : '';

          var _responsiveClass = responsive ? 'responsive' : '';

          var _classBox = "countBox ".concat(direction);

          return _react["default"].createElement("div", {
            style: {
              fontSize: "".concat(size, "px")
            },
            className: "".concat(_classBox, " ").concat(_borderClass, " ").concat(_responsiveClass)
          }, _react["default"].createElement("div", {
            className: "countBoxItem"
          }, _react["default"].createElement("div", {
            style: {
              fontSize: "".concat(labelSize, "px")
            },
            className: "label"
          }, secondTitle), _react["default"].createElement("div", {
            className: "count",
            style: {
              color: color,
              backgroundColor: backgroundColor
            }
          }, seconds)), !noPoints && _react["default"].createElement("span", {
            className: "split"
          }, ":"), _react["default"].createElement("div", {
            className: "countBoxItem"
          }, _react["default"].createElement("div", {
            style: {
              fontSize: "".concat(labelSize, "px")
            },
            className: "label"
          }, minuteTitle), _react["default"].createElement("div", {
            className: "count",
            style: {
              color: color,
              backgroundColor: backgroundColor
            }
          }, minutes)), !hideHours && !noPoints && _react["default"].createElement("span", {
            className: "split"
          }, ":"), !hideHours && _react["default"].createElement("div", {
            className: "countBoxItem"
          }, _react["default"].createElement("div", {
            style: {
              fontSize: "".concat(labelSize, "px")
            },
            className: "label"
          }, hourTitle), _react["default"].createElement("div", {
            className: "count",
            style: {
              color: color,
              backgroundColor: backgroundColor
            }
          }, hours)), !hideDay && !noPoints && _react["default"].createElement("span", {
            className: "split"
          }, ":"), !hideDay && _react["default"].createElement("div", {
            className: "countBoxItem"
          }, _react["default"].createElement("div", {
            style: {
              fontSize: "".concat(labelSize, "px")
            },
            className: "label"
          }, dayTitle), _react["default"].createElement("div", {
            className: "count",
            style: {
              color: color,
              backgroundColor: backgroundColor
            }
          }, day)));
        }

        var borderClass = border ? 'border' : '';
        var responsiveClass = responsive ? 'responsive' : '';
        var classBox = "inline ".concat(direction);
        return _react["default"].createElement("div", {
          style: {
            fontSize: "".concat(size, "px")
          },
          className: "".concat(classBox, " ").concat(borderClass, " ").concat(responsiveClass)
        }, !hideDay && _react["default"].createElement("span", {
          className: "count",
          style: {
            color: color,
            backgroundColor: backgroundColor
          }
        }, day), !hideDay && !noPoints && _react["default"].createElement("span", {
          className: "split"
        }, ":"), !hideHours && _react["default"].createElement("span", {
          className: "count",
          style: {
            color: color,
            backgroundColor: backgroundColor
          }
        }, hours), !hideHours && !noPoints && _react["default"].createElement("span", {
          className: "split"
        }, ":"), _react["default"].createElement("span", {
          className: "count",
          style: {
            color: color,
            backgroundColor: backgroundColor
          }
        }, minutes), !noPoints && _react["default"].createElement("span", {
          className: "split"
        }, ":"), _react["default"].createElement("span", {
          className: "count",
          style: {
            color: color,
            backgroundColor: backgroundColor
          }
        }, seconds));
      });

      _this.state = {
        count: props.count
      };
      return _this;
    }

    _createClass(CountdownTimer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.handleStart();
      }
    }, {
      key: "handleStart",
      value: function handleStart() {
        var _this2 = this;

        let timer = setInterval(function () {
          var newCount = _this2.state.count - 1;

          if (newCount <= 0) {
            _this2.props.onEnd();
            clearInterval(timer);
          }

          _this2.setState({
            count: newCount >= 0 ? newCount : 0
          });
        }, 1000);
      }
    }, {
      key: "render",
      value: function render() {
        var count = this.state.count;
        var className = this.props.className;
        return _react["default"].createElement("div", {
          className: "root-react-component-countdown-timer ".concat(className)
        }, _react["default"].createElement("div", {
          className: "displayedTime"
        }, this.format(count)));
      }
    }]);

    return CountdownTimer;
  }(_react.Component);

exports["default"] = CountdownTimer;

_defineProperty(CountdownTimer, "propTypes", {
  className: _propTypes["default"].string,
  count: _propTypes["default"].number,
  border: _propTypes["default"].bool,
  showTitle: _propTypes["default"].bool,
  direction: _propTypes["default"].oneOf(['right', 'left']),
  noPoints: _propTypes["default"].bool,
  responsive: _propTypes["default"].bool,
  color: _propTypes["default"].string,
  backgroundColor: _propTypes["default"].string,
  size: _propTypes["default"].number,
  labelSize: _propTypes["default"].number,
  hideDay: _propTypes["default"].bool,
  hideHours: _propTypes["default"].bool,
  dayTitle: _propTypes["default"].string,
  hourTitle: _propTypes["default"].string,
  minuteTitle: _propTypes["default"].string,
  secondTitle: _propTypes["default"].string,
  onEnd: _propTypes["default"].func
});

_defineProperty(CountdownTimer, "defaultProps", {
  count: 0,
  border: false,
  showTitle: false,
  direction: 'left',
  noPoints: false,
  color: '#000',
  backgroundColor: '#fff',
  responsive: false,
  size: 18,
  labelSize: 12,
  hideDay: false,
  hideHours: false,
  dayTitle: 'Day',
  hourTitle: 'Hour',
  minuteTitle: 'Min',
  secondTitle: 'Sec',
  className: '',
  onEnd: function onEnd() { }
});