//these methods get set in window object of browser tab
function onload() { //get called after page load

    var src = [
        "https://unpkg.com/react@16/umd/react.production.min.js",
        "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"
    ];

    src.forEach(function (src) {
        var script = document.createElement('script');
        script.src = src;
        document.getElementsByTagName('head')[0].appendChild(script);
    });

    //Give some time to react to get stable. Then use it
    setTimeout(execReat, 1000);
}

function Welcome(props) {
    return React.createElement('div', null, `Hello ${props.name}`);
}

function execReat() {
    ReactDOM.render(React.createElement(Welcome, { name: 'Dimuthu' }, null), document.getElementById('app'));
}
