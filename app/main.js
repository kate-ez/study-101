import Woowahan from "woowahan";

let mainView = Woowahan.View.create('Main', {
	template: '<h1>Woowahan</h1>'
})

let app = new Woowahan();

app.start({
	url: '/', view: mainView, container: 'body'
});
