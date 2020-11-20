// Modules -- allow us to share code between files

class App {
	constructor() {
		this.render();
	}

	render() {
		document.getElementById('root').innerHTML = `
      <h1> Date: <3 </h1>
    `;
	}
}

app = new App();
