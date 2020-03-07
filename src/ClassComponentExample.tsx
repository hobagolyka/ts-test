import React from 'react';

type Props = {
    // using `interface` is also ok
    message: string;
};

type State = {
    count: number;
};

export class ClassComponentExample extends React.Component<Props, State> {
    state: State = {
        // optional second annotation for better type inference
        count: 0
    };

    componentDidMount(): void { /* ... */ }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void { /* ... */ }

    componentWillUnmount(): void { /* ... */ }

    onClick = (e: React.FormEvent<HTMLButtonElement>): void => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (
            <div>
                <h5>Class Component Example</h5>
                {this.props.message} and {this.state.count}
                <button onClick={this.onClick}>Increment</button>
            </div>
        );
    }
}