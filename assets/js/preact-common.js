// https://github.com/preactjs/preact/issues/1961
//import "https://cdn.skypack.dev/preact/debug";
import {
    h,
    Component,
    render,
    createRef,
} from "https://cdn.skypack.dev/preact";
import {
    useState,
    useEffect,
    useCallback,
    useReducer,
    useMemo,
} from "https://cdn.skypack.dev/preact/hooks";

import htm from "https://cdn.skypack.dev/htm";

// Initialize htm with Preact
const html = htm.bind(h);

export {
    Component,
    render,
    useEffect,
    useState,
    useCallback,
    useReducer,
    useMemo,
    html,
    createRef,
};
