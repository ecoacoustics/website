import * as params from "@params";
import {
    render,
    useEffect,
    useState,
    useCallback,
    useReducer,
    useMemo,
    html,
} from "./preact-common";
// ---

Array.prototype.insertBetween = function (insert) {
    return this.flatMap((item) => [item, insert]).slice(0, -1);
};
Array.prototype.compact = function () {
    return this.filter(
        (item) => item !== null && item !== undefined && item !== ""
    );
};

const formatGitHubLink = (url) => {
    let content = url.replace(/https?:\/\//, "");
    if (!content.startsWith("github.com/")) {
        return url;
    }
    let trimmed = content.replace("github.com/", "");
    let parts = trimmed.split("/").compact();
    // keep the org & repo or the file name
    let short = [parts[0], "/", parts[1]];

    if (parts.length > 2) {
        let last = parts.slice(-1)[0];
        //console.log(last, last.includes("."));
        if (last.includes(".")) {
            short = last;
        }
    }
    content = html`<sl-icon class="textColor" name="github"></sl-icon>
        ${short}`;

    return content;
};

const externalLink = (href, text) => {
    let content = text;
    if (!content) {
        content = href || "";
        content = content.replace(/https?:\/\//, "");
        content = formatGitHubLink(content);
    }
    return html`<a href="${href}" target="_blank">${content}</a>`;
};

const definition = (key, value) =>
    html`<div>
        <dt>${key}</dt>
        <dd>${value}</dd>
    </div>`;

const quiet = (text) => html`<small class="quiet">${text}</small>`;
const notProvidedOr = (text, or) => (text ? or(text) : quiet("not provided"));
const notProvided = (text) => notProvidedOr(text, (x) => x);

const formatPercent = (number) => (number * 100).toFixed(2) + "%";

function makeAuthor(author) {
    const name = [author.givenNames, author.familyNames]
        .compact()
        .insertBetween(" ");
    const span = html` <span>${name}</span> `;

    if (!author.orcid) {
        return span;
    }

    return externalLink(
        `https://orcid.org/${author.orcid}`,
        html` ${span}
            <sl-icon library="oe" name="orcid"></sl-icon>`
    );
}

function makeSpecies(target) {
    var binomial = target.binomial ? html` (<em>${target.binomial}</em>)` : "";
    var variants = "";
    if (target.variants) {
        variants = target.variants
            .map((variant) => html`<span>${variant}</span>`)
            .insertBetween(", ");
        variants.unshift(": ");
    }
    return html` <span>${target.name}${binomial}</span>${variants}`;
}

let Title = (entry) => entry.title;
let Authors = (entry) =>
    (entry.authors || []).map(makeAuthor).insertBetween(", ");
let Description = (entry) =>
    entry.description || quiet("no description provided");
let TargetSpecies = (entry) => {
    let items = (entry.targets || [])
        .map(makeSpecies)
        .map((item) => html`<li>${item}</li>`);
    return html`<ul>
        ${items}
    </ul>`;
};

const defaultPerformance = {
    criteria: null,
    tp: null,
    fp: null,
    tn: null,
    fn: null,
};

function Dataset(props) {
    const { dataset } = props;
    const { summary, location, url } = dataset;

    const { criteria, tp, fp, tn, fn } = Object.assign(
        {},
        defaultPerformance,
        dataset.performance
    );

    const [tpr, fnr, fpr, tnr] = [
        tp / (tp + fn),
        fn / (tp + fn),
        fp / (fp + tn),
        tn / (fp + tn),
    ];

    return html`
        <div>
            <p>${summary}</p>
            <dl>
                ${definition("Location", notProvided(location))}
                ${definition(
                    "Criteria",
                    html`
                <sl-tooltip content="How was a result matched? Typically 'segment' means that any hit in any block of audio counts as a true positive. 'event' means an event has to occur in the same location to count as a true positive.">
                        <sl-tag variant="neutral">${criteria}
                    </sl-tooltip>
                </sl-tag>
                `
                )}
                ${definition("Source", notProvidedOr(url, externalLink))}
            </dl>
        </div>
        <table class="performanceTable">
            <caption>
                Performance
            </caption>
            <thead>
                <tr>
                    <th colspan="2" rowspan="2"></th>
                    <th colspan="2">Predicted</th>
                </tr>
                <tr>
                    <th>Positives</th>
                    <th>Negatives</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th rowspan="2" class="actual">Actual</th>
                    <th>Positives</th>
                    <td>${tp} (${formatPercent(tpr)})</td>
                    <td>${fn} (${formatPercent(fnr)})</td>
                </tr>
                <tr>
                    <th>Negatives</th>
                    <td>${fp} (${formatPercent(fpr)})</td>
                    <td>${tn} (${formatPercent(tnr)})</td>
                </tr>
            </tbody>
        </table>
    `;
}

function Datasets(props) {
    const datasets = props.datasets || {};
    if (Object.keys(datasets).length == 0) {
        return html`<p>${quiet("no datasets provided")}</p>`;
    }
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

const formatDoi = (doi) => html`${externalLink("https://doi.org/" + doi, doi)}`;

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
                <h3>${Title(entry)}</h3>
                <span class="authors">${Authors(entry)}</span>
            </div>
            <div class="descriptionAndDatasets">
                <div>
                    <p>${Description(entry)}</p>
                    <dl>
                        ${definition("Target species", TargetSpecies(entry))}
                        ${definition("Organization", notProvided(organization))}
                        ${definition("Version", notProvided(version))}
                        ${definition("DOI", notProvidedOr(doi, formatDoi))}
                        ${definition("Released", notProvided(date))}
                        ${definition("License", notProvided(license))}
                        ${definition("Repository", externalLink(repository))}
                        ${definition(
                            "Documentation",
                            notProvidedOr(documentation, externalLink)
                        )}
                    </dl>
                </div>
                <sl-card>
                    <strong slot="header">Datasets</strong>
                    <${Datasets} datasets=${entry.datasets} />
                </sl-card>
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

function lexiographicalSort(a, b) {
    var titleA = a.title.toLowerCase(); // ignore upper and lowercase
    var titleB = b.title.toLowerCase(); // ignore upper and lowercase
    if (titleA < titleB) {
        return -1; //titleA comes first
    }
    if (titleA > titleB) {
        return 1; // titleB comes first
    }
    return 0; // titles must be equal
}

function searchFilter(term, entries) {
    if (!term || term.length == 0) {
        return entries.sort(lexiographicalSort);
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
                contains(t.binomial),
                ...(t.variants || []).flatMap((v) => contains(v)),
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
            console.log("data received", result);
            setData(result);
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

    return html`
        <div class="registrySearch">
            <${Search} term=${search} setTerm=${setSearch} />
            <sl-badge variant="primary" pill
                >${filteredData.length} results</sl-badge
            >
        </div>
        <sl-divider></sl-divider>
        ${isLoading && html`<sl-progress-bar indeterminate></sl-progress-bar>`}
        ${error &&
        html`<div>There was a problem loading the registry data.</div>`}
        ${!error && !isLoading && html` <${List} entries=${filteredData} /> `}
    `;
}

render(html`<${App} />`, document.querySelector("#registryContainer"));
