/**
 * Gets the value after the input event.
 * @param evt the beforeinput event
 */
const getNextVal = (evt: InputEvent) => {
  if ((evt.target as HTMLInputElement).value) {
    const target = evt.target as HTMLInputElement;
    return (
      target.value.substring(0, target.selectionStart!) +
      (evt.data ?? '') +
      target.value.substring(target.selectionEnd!)
    );
  } else {
    const target = evt.target as HTMLElement;
    const selection = document.getSelection();
    const start = Math.min(selection!.anchorOffset, selection!.focusOffset);
    const end = Math.max(selection!.anchorOffset, selection!.focusOffset);
    return target.innerText.substring(0, start) + (evt.data ?? '') + target.innerText.substring(end);
  }
};

/**
 * Checks if the value after input is a whole positive number, canceling the input if it is not.
 * @param evt the beforeinput event
 */
export const isWholePositiveNumber = (evt: InputEvent) => {
  const value = getNextVal(evt);
  if (!/^\d*$/.test(value)) {
    evt.preventDefault();
  }
};

/**
 * Checks if the value after input is a whole number, canceling the input if it is not.
 * @param evt the beforeinput event
 */
export const isWholeNumber = (evt: InputEvent) => {
  const value = getNextVal(evt);
  if (!/^-?\d*$/.test(value)) {
    evt.preventDefault();
  }
};

/**
 * Checks if the value after input is a number, canceling the input if it is not.
 * @param evt the beforeinput event
 */
export const isNumber = (evt: InputEvent) => {
  const value = getNextVal(evt);
  if (!/^-?\d*\.?\d*$/.test(value)) {
    evt.preventDefault();
  }
};
