document.addEventListener('DOMContentLoaded', () => {
    const visualizer = document.getElementById('visualizer');
    const logContainer = document.getElementById('log-container');

    const createCircle = (x, y, type) => {
        const circle = document.createElement('div');
        circle.className = `circle ${type}`;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        visualizer.appendChild(circle);

        setTimeout(() => {
            visualizer.removeChild(circle);
        }, 1000);
    };

    const logEvent = (event, type) => {
        const logEntry = document.createElement('div');
        logEntry.textContent = `${type.toUpperCase()} at (${event.clientX}, ${event.clientY})`;
        logContainer.appendChild(logEntry);
        logContainer.scrollTop = logContainer.scrollHeight;
    };

    const addEventListeners = () => {
        const events = [
            'click',
            'dblclick',
            'mousedown',
            'mouseup',
            'mousemove',
            'touchstart',
            'touchmove',
            'touchend',
            'touchcancel'
        ];

        events.forEach(eventType => {
            visualizer.addEventListener(eventType, (event) => {
                if (eventType.startsWith('touch')) {
                    for (let i = 0; i < event.touches.length; i++) {
                        createCircle(event.touches[i].clientX, event.touches[i].clientY, eventType);
                        logEvent(event.touches[i], eventType);
                    }
                } else {
                    createCircle(event.clientX, event.clientY, eventType);
                    logEvent(event, eventType);
                }
            });
        });
    };

    addEventListeners();
});
