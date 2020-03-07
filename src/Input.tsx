import { withFormsy } from 'formsy-react';
import React from 'react';

class MyInput extends React.Component<any> {
    constructor(props: any) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.setValue(event.currentTarget.value);
    }

    render() {
        const errorMessage = this.props.errorMessage;

        return (
            <div>
                <input onChange={this.changeValue} type="text" value={this.props.value || ''} name={this.props.name} />
                <span>{errorMessage}</span>
            </div>
        );
    }
}

export default withFormsy(MyInput);