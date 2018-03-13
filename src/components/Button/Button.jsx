import React from 'React'
import withAnimationOnClick from 'cutils/withAnimationOnClick'

class Button extends React.Component {
  
    constructor(props) {
        super(props);
    }

    onClick(){

    }

    render() {
        return (
            <React.Fragment>
                <button type="button" {...this.props}>
                {this.props.children}
                </button>
            </React.Fragment>
        );
    }
}

export default withAnimationOnClick(Button, { animation: "jello"})