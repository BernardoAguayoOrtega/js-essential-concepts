// Modules -- allow us to share code between files
import { getDate, year } from '../utils/date.js';

class App {
	constructor() {
		this.render();
		this.render2();
	}

	render() {
		document.getElementById('root').innerHTML = `
      <h1> Date: ${year}<3 </h1>
		`;
	}
}

app = new App();
