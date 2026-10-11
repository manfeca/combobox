# Accessible Combobox Exercise

A work-in-progress combobox built with HTML, CSS, and vanilla JavaScript to reinforce concepts from the Udemy course **Master ARIA components patterns**.

The goal is to understand how ARIA semantics, focus management, and keyboard interactions work together in an editable combobox with a listbox popup.

## Implemented so far

- Combobox, listbox, and option roles.
- Input-to-popup relationship through `aria-controls`.
- Expanded state synchronized with popup visibility.
- Active-option tracking through `aria-activedescendant`.
- Button to open and close the popup.
- Arrow-key navigation.
- Enter to accept an active suggestion.
- Escape to dismiss the popup.
- Click to select an option.
- Active-state cleanup when the popup closes.

Keyboard focus stays in the input while users navigate suggestions.

## Run locally

Clone or download this repository and open `index.html` in a browser. No dependencies or build step are required.

## Keyboard behavior

| Key | Current behavior |
| --- | --- |
| Arrow Down | Opens the popup and moves to the next option |
| Arrow Up | Moves to the previous option while the popup is open |
| Enter | Accepts the active option and closes the popup |
| Escape | Closes the popup without changing the input’s value |

Arrow navigation stops at the first and last options.

## Still to do

- Filter suggestions as the user types.
- Navigate only matching options.
- Handle empty results.
- Complete focus and dismissal behavior.
- Review selection semantics and visible focus indicators.
- Test with keyboard navigation and screen readers.

The input declares `aria-autocomplete="list"`; the corresponding filtering behavior is still to be implemented.

## Project files

- `index.html` — widget structure and testing prompts.
- `style.css` — layout and visual states.
- `script.js` — interaction and state management.

## Learning notes

ARIA describes a widget’s roles, relationships, and states; JavaScript implements its behavior. Visual appearance and accessibility information must stay synchronized.

This is a learning exercise, not a finished or accessibility-validated component.

## Reference

[W3C ARIA Authoring Practices: Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
