
document.addEventListener('dblclick', function (event) {
    if (event.target.tagName === 'INPUT' && event.target.placeholder) {
        setReactInputValue(event.target, event.target.placeholder);
    }
});

function setReactInputValue(el, value) {
    // Store the last value to update React's internal tracker
    const last = el.value;
    // Use the native value setter to change the input's value
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
    ).set;
    nativeInputValueSetter.call(el, value);
    // Update React's internal value tracker
    const event = new Event('input', { bubbles: true });
    const tracker = el._valueTracker;
    if (tracker) {
        tracker.setValue(last);
    }
    // Dispatch the input event to notify React of the change
    el.dispatchEvent(event);
}