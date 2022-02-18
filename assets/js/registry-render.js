import * as params from "@params";
// https://github.com/preactjs/preact/issues/1961
//import "https://cdn.skypack.dev/preact/debug";
import { h, Component, render } from "https://cdn.skypack.dev/preact";
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

// ---

Array.prototype.insertBetween = function (insert) {
    return this.flatMap((item) => [item, insert]).slice(0, -1);
};

let externalLink = (href, text) =>
    html`<a href="${href}" target="_blank">${text || href}</a>`;

function makeAuthor(author) {
    const name = html`
        <span>${author["givenNames"]} ${author["familyNames"]}</span>
    `;

    if (!author.orcid) {
        return name;
    }

    return externalLink(
        `https://orcid.org/${author.orcid}`,
        html` ${name}
            <sl-icon library="oe" name="orcid"></sl-icon>`
    );
}

function makeSpecies(target) {
    var taxonomic = target.taxonomic
        ? html` (<em>${target.taxonomic}</em>)`
        : "";
    var variants = "";
    if (target.variants) {
        variants = target.variants
            .map((variant) => html`<span>${variant}</span>`)
            .insertBetween(", ");
        variants.unshift(": ");
    }
    return html` <span>${target.name}${taxonomic}</span>${variants}`;
}

let Title = (entry) => entry.title;
let Authors = (entry) =>
    (entry.authors || []).map(makeAuthor).insertBetween(", ");
let Description = (entry) => entry.description;
let TargetSpecies = (entry) =>
    (entry.targets || [])
        .map(makeSpecies)
        .map((item) => html`<li>${item}</li>`);

const defaultPerformance = {
    criteria: null,
    tp: null,
    fp: null,
    tn: null,
    fn: null,
};

function Dataset(props) {
    const { name, dataset } = props;
    const { summary, location, url } = dataset;

    const { criteria, tp, fp, tn, fn } = Object.assign(
        {},
        defaultPerformance,
        dataset.performance
    );

    return html`
        <div>
            <p>${summary}</p>
            <dl>
                <dt>Location:</dt>
                <dd>${location}</dd>
                <dt>
                    Criteria:
                </dt>
                <dd>
                    <sl-tooltip content="How was a result matched? Typically 'segment' means that any hit in any block of audio counts as a true positive. 'event' means an event has to occur in the same location to count as a true positive.">
                        <sl-tag variant="neutral">${criteria}
                    </sl-tooltip>
                </sl-tag>
                </dd>
                <dt>Source:</dt>
                <dd>${externalLink(url)}</dd>
            </dl>
        </div>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th colspan="2">Predicted</th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Positives</th>
                    <th>Negatives</th>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
                <tr>
                    <th rowspan="2">Actual</th>
                    <th>Positives</th>
                    <td>${tp}</td>
                    <td>${fn}</td>
                </tr>
                <tr>
                    <th>Negatives</th>
                    <td>${fp}</td>
                    <td>${tn}</td>
                </tr>
            </tbody>
        </table>
    `;
}

function Datasets(props) {
    const datasets = props.datasets || {};
    return html`
        <sl-tab-group>
            ${Object.entries(datasets).map(
                ([name, dataset]) =>
                    html`<sl-tab slot="nav" panel="${name}">${name}</sl-tab>
                        <sl-tab-panel name="${name}">
                            <${Dataset} name=${name} dataset=${dataset} />
                        </sl-tab-panel>`
            )}
        </sl-tab-group>
    `;
}

const formatDoi = (doi) =>
    doi ? html`${externalLink("https://doi.org/" + doi, doi)}` : "";

function Card(props) {
    const entry = props.entry;
    const { repository, documentation, organization, version, doi, license } =
        entry;
    const date = entry.dateReleased
        ? new Date(entry.dateReleased).toISOString().replace(/T.*/, "")
        : "";
    return html`
        <sl-card>
            <div slot="header">
                <h2>${Title(entry)}</h2>
                <span>${Authors(entry)}</span>
            </div>
            <p>${Description(entry)}</p>
            <div>
                <dl>
                    <dt>Target species:</dt>
                    <dd>${TargetSpecies(entry)}</dd>
                    <dt>Datasets</dt>
                    <dd><${Datasets} datasets=${entry.datasets} /></dd>
                    <dt>Repository</dt>
                    <dd>${externalLink(repository)}</dd>
                    <dt>Documentation</dt>
                    <dd>${externalLink(documentation)}</dd>
                    <dt>Organization</dt>
                    <dd>${organization}</dd>
                    <dt>Version</dt>
                    <dd>${version}</dd>
                    <dt>DOI</dt>
                    <dd>${formatDoi(doi)}</dd>
                    <dt>Released</dt>
                    <dd>${date}</dd>
                    <dt>License</dt>
                    <dd>${license}</dd>
                </dl>
            </div>
        </sl-card>
    `;
}

function List(props) {
    const entries = props.entries || [];
    return html` <div class="registryCardList">
        ${entries.map(
            (entry) => html`<${Card} key=${entry.objectID} entry=${entry} />`
        )}
    </div>`;
}

function Search(props) {
    const { term, setTerm } = props;
    const handleInput = (event) => {
        console.log(event);
        setTerm(event.target.value);
    };

    return html`
        <sl-input
            clearable
            placeholder="Search..."
            onsl-input=${handleInput}
            value=${term}
        >
            <sl-icon name="search" slot="prefix"></sl-icon>
        </sl-input>
    `;
}

function searchFilter(term, entries) {
    if (!term || term.length == 0) {
        return entries;
    }

    let lowerTerm = term.toLowerCase();
    const contains = (field) =>
        field && field.toLowerCase().includes(lowerTerm) ? 1 : 0;
    const countHits = (entry) => {
        let hits = [
            contains(entry.title),
            contains(entry.description),
            contains(entry.organization),
            contains(entry.message),
            ...(entry.authors || []).flatMap((a) => [
                contains(a.familyNames),
                contains(a.givenNames),
            ]),
            ...(entry.targets || []).flatMap((t) => [
                contains(t.name),
                contains(t.taxonomic),
            ]),
            ...Object.entries(entry.datasets || {}).flatMap(([_, d]) => [
                contains(d.summary),
                contains(d.location),
            ]),
        ];
        let sum = hits.reduce((total, x) => total + x, 0);
        //console.log("score for entry was ", sum, entry, hits);
        return { entry, score: sum };
    };

    return entries
        .map(countHits)
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((pair) => pair.entry);
}

// Create your app
function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState(null);

    useEffect(async () => {
        try {
            setIsLoading(true);
            const response = await fetch(params.dataUrl);
            const result = await response.json();
            console.log("data received", result.data);
            setData(result.data);
        } catch (error) {
            console.error(
                "There was a problem loading the registry data",
                error
            );
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const filteredData = useMemo(
        () => searchFilter(search, data),
        [search, data]
    );

    return html`<${Search} term=${search} setTerm=${setSearch} />
        Search term: ${search}
        <sl-divider></sl-divider>
        ${isLoading && html`<sl-progress-bar indeterminate></sl-progress-bar>`}
        ${error &&
        html`<div>There was a problem loading the registry data.</div>`}
        ${!error && html` <${List} entries=${filteredData} /> `} `;
}

render(html`<${App} />`, document.querySelector("#registryContainer"));
