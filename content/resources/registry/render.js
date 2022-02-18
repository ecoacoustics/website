import * as params from '@params';
import { html, render, Component } from 'https://unpkg.com/htm/preact/index.mjs?module';

console.log(params.dataUrl);


// Create your app
class App extends Component {

    render(props) {
        return html`<h1>why are you doing thifsfsss to module ${props.name}!</h1>`;
    }
}

render(html`<${App}/>`, document.querySelector("#registryContainer"));
console.log(params.dataUrl, "hello again");
