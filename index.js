import { style } from "./style.js";

const optionTranslations = {
  "bottom-right": "left-handle",
  "top-right": "left-handle",
  "bottom-left": "right-handle",
  "top-left": "right-handle",
};

const defaultOptions = {
  position: "bottom-right",
  delay: 5000,
};

export class APNotification {
  defaultErrorHandler = (data) => {
    this.appendToContainer(
      this.generateNotification(
        data,
        optionTranslations[this._options.position],
        "ap-error"
      )
    );
  };

  defaultWarningHandler = (data) => {
    this.appendToContainer(
      this.generateNotification(
        data,
        optionTranslations[this._options.position],
        "ap-warning"
      )
    );
  };

  defaultNotificationHandler = (data) => {
    this.appendToContainer(
      this.generateNotification(
        data,
        optionTranslations[this._options.position]
      )
    );
  };

  constructor(options = defaultOptions, _container = null) {
    this._options = { ...defaultOptions, ...options };
    this.style = style;
    this._doYouWantToAppendTheContainerSomewhereElse = _container;

    this.appendStyleToHead();
    this.generateContainer();
    this._events = {};
    this.on("error", this.defaultErrorHandler);
    this.on("warning", this.defaultWarningHandler);
    this.on("notification", this.defaultNotificationHandler);
  }

  appendToContainer(_notification, _delay = this._options.delay) {
    this._container.appendChild(_notification);
    setTimeout(() => {
      _notification.classList.add("active");
    }, 300);

    const rmvNot = setTimeout(() => {
      _notification.classList.remove("active");
      setTimeout(() => {
        _notification.remove();
      }, 500);
    }, _delay);

    _notification.onclick = () => {
      _notification.classList.remove("active");
      setTimeout(() => {
        _notification.remove();
      }, 500);
      clearTimeout(rmvNot);
    };
  }

  generateNotification(_message, _class, _preset = "ap-notification") {
    const _notification = document.createElement("div");
    _notification.classList.add(_preset);
    _notification.classList.add(_class);
    _notification.innerHTML = _message;
    return _notification;
  }

  generateContainer() {
    const existingContainer = document.querySelector(
      ".ap-notification-container"
    );
    if (!existingContainer) {
      const container = document.createElement("div");
      container.classList.add("ap-notification-container");
      container.classList.add(this._options.position);
      if (!this._doYouWantToAppendTheContainerSomewhereElse) {
        document.body.appendChild(container);
      } else {
        this._doYouWantToAppendTheContainerSomewhereElse.appendChild(container);
      }
      this._container = container;
    } else {
      // Prevent double initialisation
      this._container = existingContainer;
    }
  }

  appendStyleToHead() {
    const style = document.createElement("style");
    style.innerHTML = this.style;
    document.body.appendChild(style);
  }

  on(name, listener) {
    if (!typeof name === "string")
      throw new TypeError("First parameter must be a string");

    if (!this._events[name]) this._events[name] = [];

    this._events[name].push(listener);
  }

  removeListener(name, listener) {
    if (!this._events[name]) throw new Error("This event name doesn't exist");

    this._events[name].filter((lst) => lst !== listener);
  }

  emit(name, data) {
    if (!this._events[name]) throw new Error("This event name doesn't exist");

    this._events[name].forEach((callback) => {
      callback(data);
    });
  }
}
