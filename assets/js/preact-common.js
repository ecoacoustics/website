// https://github.com/preactjs/preact/issues/1961
//import "https://cdn.skypack.dev/preact/debug";
//
// we hard lock preact versions and do not allow minor version bumps because
// the preact skypack deployment has broken between minor versions before
// see: https://github.com/ecoacoustics/website/issues/114
import {
    h,
    Component,
    render,
    createRef,
} from "https://cdn.skypack.dev/preact@10.26.4";
import {
    useState,
    useEffect,
    useCallback,
    useReducer,
    useMemo,
} from "https://cdn.skypack.dev/preact@10.26.4/hooks";

import htm from "https://cdn.skypack.dev/htm@3.1.1";

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
