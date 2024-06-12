# Plasma-touchscreen-gesture-fix

Using KDE Plasmas three finger touchscreen gestures on sites like YouTube will cause YouTube to not recognize that the two finger touch event is cancelled as soon as the gesture starts.
This causes YouTube UI to be permanently active/highlighted.

This extension dispatches a TOUCHEND event when a TOUCHCANCEL event is fired therefore ending the two finger touch and fixing the problem.
