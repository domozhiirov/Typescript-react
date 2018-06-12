import * as React from 'react';
import './App.css';

import logo from './logo.svg';

interface IProps {
    name?: string;
}

class App extends React.Component<IProps, any> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            name: 'initial value'
        };

        this.onClick = this.onClick.bind(this);
    }

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" onClick={this.onClick}/>
                    <h1 className="App-title">{this.state.name}</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
        );
    }

    private onClick() {
        this.setState({
            name: 'John'
        });
    }
}

export default App;
