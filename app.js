const title = React.createElement('h1',{},
    'hello all ','Jean ',
    React.createElement('span',{},10))
console.log(title)

ReactDOM.render(title,document.querySelector('#app'))

// document.querySelector('#app').innerHTML = '<h1>Bonjour tout le monde</h1>'