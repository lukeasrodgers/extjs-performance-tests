extjs-performance-tests
=======================

Some tests comparing for comparing performance between extjs 3 and 4

For the profiler, I began recording, typed "enter some text" in the
textarea, then stopped.

Time for program is the duration of the recording.

## Basic Updater

In this scenario, create a textarea, listen for keyup, and update a
shallowly-nested component with the length of the message in the
textarea.

ExtJs4 spends about 6 times as much time executing javascript.

### Comparison

ExtJs3 
- dom elements: 17
- chrome DOM node count: 35
- chrome event listener count: 9
- chrome profile (total s)
  - 4.06 s in program
  - 16 ms in h.handle.i


ExtJs4
- dom elements: 24
- chrome DOM node count: 45
- chrome event listener count: 26
- chrome profile (total s)
  - 3.66s in program
  - 104 ms in g

## Nested Updater

Same as basic updater, but nest the component to be updated in a few
other components.

ExtJs4 spends about 12 times as much time executing javascript.

### Comparison

ExtJs3 
- dom elements: 39
- chrome DOM node count: 60
- chrome event listener count: 15
- chrome profile (total s)
  - 3.89 s in program
  - 24 ms in h.handle.i


ExtJs4
- dom elements: 51
- chrome DOM node count: 80
- chrome event listener count: 52
- chrome profile (total s)
  - 3.32s in program
  - 302 ms in g
