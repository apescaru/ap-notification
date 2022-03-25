export const style = `
.ap-notification-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    padding: 10px;
    gap: 10px;
}

.bottom-right {
    bottom: 0;
    right: 0;
    align-items: flex-end;
}

.bottom-left {
    bottom: 0;
    left: 0;
    align-items: flex-start;
}

.top-right {
    top: 0;
    right: 0;
    align-items: flex-end;
}

.top-left {
    top: 0;
    left: 0;
    align-items: flex-start;
}

.ap-notification,
.ap-error,
.ap-warning {
    display: flex;
    align-items: center;
    max-width: 200px;
    padding: 10px;
    box-shadow: 3px 3px 3px lightgrey;
    border: .1px solid rgba(0,0,0,.15);
    border-radius: 10%;
    cursor: pointer;
    position: relative;
    transition: 1s;
}

.ap-notification.left-handle,
.ap-error.left-handle,
.ap-warning.left-handle {
    right: calc(-100% - 15px);
}

.ap-notification.right-handle,
.ap-error.right-handle,
.ap-warning.right-handle {
    left: calc(-100% - 35px);
}

.left-handle.active,
.left-handle.active,
.left-handle.active {
    right: 0;
}

.right-handle.active,
.right-handle.active,
.right-handle.active {
    transition: .5s ease;
    left: 0;
}

.left-handle {
    padding-left: 25px;
}

.ap-notification.left-handle:after,
.ap-error.left-handle:after,
.ap-warning.left-handle:after
 {
    content: "";
    display: block;
    position: absolute;
    height: 75%;
    width: 5px;
    left: 10px;
    border-radius: 15px;
}

.right-handle {
    padding-right: 25px;
}

.ap-notification.right-handle:after,
.ap-error.right-handle:after,
.ap-warning.right-handle:after
 {
    content: "";
    display: block;
    position: absolute;
    height: 75%;
    width: 5px;
    right: 10px;
    
    border-radius: 15px;
}

.ap-notification.right-handle:after,
.ap-notification.left-handle:after {
    background: #0c0;
}

.ap-error.right-handle:after,
.ap-error.left-handle:after {
    background: #c00;
}

.ap-warning.right-handle:after,
.ap-warning.left-handle:after {
    background: #ffa64d;
}
`