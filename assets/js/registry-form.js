import {
    render,
    useEffect,
    useState,
    useCallback,
    useReducer,
    useMemo,
    html,
    createRef,
} from "./preact-common";
import { serialize } from "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.68/dist/utilities/form.js";

// const schemaUrl = window.location.origin + "/registry_schema.json";
// const schema = fetch(schemaUrl).then((response) => response.json());

const textArea = (label, name, props = {}) =>
    html`<sl-textarea
        label="${label}"
        name="${name}"
        value=""
        ...${props}
    ></sl-textarea>`;
const input = (label, name, props = {}) =>
    html`<sl-input
        label="${label}"
        name="${name}"
        value=""
        ...${props}
    ></sl-input>`;
const inputRequired = (label, name, props = {}) =>
    input(label, name, Object.assign({}, props, { required: true }));

function AddRemove(props) {
    let { title, minimum, children } = props;

    const lowerTitle = title.toLowerCase();
    minimum = Number(minimum) || 0;
    const [count, setCount] = useState(minimum);
    const increment = useCallback(() => {
        setCount(count + 1);
        // console.log("increment", count);
    }, [count]);

    const decrement = useCallback(() => {
        setCount(count <= minimum ? minimum : count - 1);
        // console.log("decrement", count);
    }, [count]);

    const isDisabled = count <= minimum;
    console.log("isDisabled", isDisabled);
    return html`
        <div class="addRemove">
            <div class="addRemoveHeader">
                <h4>${title}</h4>
                <sl-tooltip content="Add ${lowerTitle}">
                    <sl-icon-button name="plus-circle" label="Add ${lowerTitle}" onclick=${increment}></sl-icon>
                </sl-tooltip>
                <sl-tooltip content="Remove ${lowerTitle}">
                    <sl-icon-button name="dash-circle" label="Remove ${lowerTitle}" onclick=${decrement} disabled=${isDisabled}></sl-icon>
                </sl-tooltip>
            </div>
            <ul class="variableList">
                ${Array.from(Array(count).keys()).map((i) => {
                    this.context[title + "Index"] = i;
                    console.log("loop", this, children);
                    return html`<li class="${lowerTitle}" key=${i}>
                        <sl-card>${children}</sl-card>
                    </li>`;
                })}
            </ul>
        </div>
    `;
}

function Author(props, context) {
    console.log("authnor args", arguments);
    const { AuthorsIndex } = context;
    return html`
        ${input("Given Name(s)", `authors[${AuthorsIndex}][givenNames]`)}
        ${inputRequired(
            "Family Name(s)",
            `authors[${AuthorsIndex}][familyNames]`
        )}
        ${input("ORCID", `authors[${AuthorsIndex}][orcid]`, {
            placeholder: "0000-0000-0000-0000",
            pattern:
                "^([0-9]{4})?(-)?([0-9]{4})?(-)?([0-9]{4})?(-)?([0-9]{4})$",
        })}
    `;
}

function Authors() {
    return html`
        <${AddRemove} minimum="1" title="Authors">
            <${Author} />
        <//>
    `;
}

function Variant(props, context) {
    const { TargetsIndex, VariantsIndex } = context;
    return html` ${input(
        "Variant",
        `targets[${TargetsIndex}][variants][${VariantsIndex}]`
    )}`;
}

function Target(props, context) {
    const { TargetsIndex } = context;

    return html`
        ${inputRequired("Common Name", `targets[${TargetsIndex}][name]`)}
        ${input("Binomial name", `targets[${TargetsIndex}][binomial]`, {
            helpText:
                "The formal taxonomic name for the species.\nOmit unless the target is biophonic.",
        })}
        <${AddRemove} minimum="0" title="Variants">
            <${Variant} />
        <//>
        <small>
            Which variants does your recognizer target? What call types?
        </small>
    `;
}

function Targets() {
    return html`
        <${AddRemove} minimum="1" title="Targets">
            <${Target} />
        <//>
        <small>
            Which acoustic events does your recognizer target? Biophonic,
            geophonic, anthropgenic?
        </small>
    `;
}

function Dataset(props, context) {
    const { DatasetsIndex } = context;
    return html`
        ${inputRequired("Name", `datasets[${DatasetsIndex}][name]`, {
            helpText: "e.g. test, training ",
        })}
        ${textArea("Summary", `datasets[${DatasetsIndex}][summary]`)}
        ${input("Location", `datasets[${DatasetsIndex}][location]`)}
        ${input("URL", `datasets[${DatasetsIndex}][url]`, {
            type: "url",
            placeholder: "https://github.com/",
        })}
        <sl-select
            label="Criteria"
            name="datasets[${DatasetsIndex}][performance][criteria]"
            help-text="How you assessed your results. Events must match labelled data within a tolerance. Segment matches can match anywhere in a short segment."
        >
            <sl-menu-item value="segment">Segment</sl-menu-item>
            <sl-menu-item value="event">Event</sl-menu-item>
            <sl-menu-item value="other">Other</sl-menu-item>
        </sl-select>
        ${input(
            "True positives",
            `datasets[${DatasetsIndex}][performance][tp]`,
            { type: "number" }
        )}
        ${input(
            "False positives",
            `datasets[${DatasetsIndex}][performance][fp]`,
            { type: "number" }
        )}
        ${input(
            "True negatives",
            `datasets[${DatasetsIndex}][performance][tn]`,
            { type: "number" }
        )}
        ${input(
            "False negatives",
            `datasets[${DatasetsIndex}][performance][fn]`,
            { type: "number" }
        )}
    `;
}

function Datasets() {
    return html`
        <${AddRemove} minimum="0" title="Datasets">
            <${Dataset} />
        <//>
    `;
}

async function Submit(data) {
    console.log("submit", data);
    var body = new FormData();
    body.append("subject", "New registry contribution");
    body.append("form-name", "registry-contribution-form");
    body.append("body", JSON.stringify(data));
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(body).toString(),
    });
}

function RegistryForm() {
    const form = document.querySelector("#registry-contribution-form");
    const [success, setSuccess] = useState(false);
    const formSubmit = (event) => {
        event.preventDefault();
        let target = event.target;
        const submit = target.querySelector("#submit");
        submit.toggleAttribute("disabled", true);
        const data = serialize(target);

        Submit(data).then((_) => {
            submit.toggleAttribute("disabled", false);
            setSuccess(true);
        });
    };

    form.addEventListener("submit", formSubmit);

    return html`
        ${inputRequired("Title", "title")}
        ${textArea("Description", "description")}
        <${Authors} />
        <${Targets} />
        <${Datasets} />
        ${input("Repository URL", "repository", {
            type: "url",
            placeholder: "https://github.com/",
            helpText: "Where can we find your recognizer?",
        })}
        ${input("Documentation URL", "documentation", {
            type: "url",
            placeholder: "https://github.com/",
        })}
        ${inputRequired("Version", "version")}
        ${inputRequired("Release Date", "date", {
            type: "date",
            Placeholder: "Date",
        })}
        ${inputRequired("License", "license", {
            placeholder: "Apache-2.0",
            helpText: "e.g. MIT, Apache-2.0",
        })}
        ${input("Organization", "organization")}
        ${input("DOI", "doi", {
            placeholder: "10.1111/zenodo.1111111",
            pattern: '(10[.][0-9]{4,}(?:[.][0-9]+)*/(?:(?![%"#? ])\\S)+)',
        })}
        ${inputRequired("Contact Email", "email", {
            placeholder: "you@example.com",
            helpText: "Your email will not be published",
        })}
        <div>
            <label>
                <p>Consent</p>
                <sl-checkbox required name="consent">
                    <ol>
                        <li>
                            <p>
                                I understand this form will publish the above
                                information in a public registry.
                            </p>
                        </li>
                        <li>
                            <p>
                                I agree to be contacted if further information
                                is required to complete the record.
                            </p>
                        </li>
                    </ol>
                </sl-checkbox>
            </label>
        </div>
        <br />
        <sl-button id="submit" variant="primary" type="submit">
            Submit
        </sl-button>

        <sl-divider>></sl-divider>
        ${success &&
        html`
            <sl-alert variant="success" open duration="3000">
                Submission successful
            </sl-alert>
        `}
    `;
}

render(
    html`<${RegistryForm} />`,
    document.querySelector("#registryFormContainer")
);
