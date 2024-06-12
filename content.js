// content.js

// Function to dispatch a TOUCHEND event when a TOUCHCANCEL event is fired
function handleTouchCancel(event) {
    const touchEndEvent = new TouchEvent('touchend', {
        bubbles: true,
        cancelable: true,
        touches: event.touches,
        targetTouches: event.targetTouches,
        changedTouches: event.changedTouches,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey
    });

    event.target.dispatchEvent(touchEndEvent);
}

// Add event listener for TOUCHCANCEL event
document.addEventListener('touchcancel', handleTouchCancel, { passive: true });
