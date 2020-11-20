// Modules -- allow us to share code between files
import date from '../utils/date.js';

class App {
	constructor() {
		this.render();
	}

	render() {
		document.getElementById('root').innerHTML = `
      <h1> Date: ${date()}<3 </h1>
    `;
	}
}

app = new App();
