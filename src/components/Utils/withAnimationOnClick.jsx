import React from 'React'
import ReactDOM from 'react-dom';

export default function withAnimationOnClick(WrappedComponent, config) {
  
    class WithAnimationOnClick extends React.Component {
        constructor(props) {
            super(props);
            this.state = { isAnimated: false};
            console.log('animation '+ config.animation);
            this.animation = config.animation + ' jello animated ';
        }

        componentDidMount() {
            ReactDOM.findDOMNode(this).addEventListener('animationend', this.onAnimationEnd.bind(this), false);
        }

        componentWillUnmount() {
            ReactDOM.findDOMNode(this).removeEventListener('animationend', this.onAnimationEnd.bind(this), false);
        }

        onAnimationEnd(){
            this.setState({
                isAnimated: false
            })
        }

        onClick() {
            console.log('click')
            this.setState({
                isAnimated : true
            });
        }

        render() {
        return (
            <WrappedComponent className={this.state.isAnimated ? this.animation : ''} onClick={this.onClick.bind(this)} {...this.props}>
            {this.props.children}
            </WrappedComponent>
        );
    }
};

    WithAnimationOnClick.displayName = `withAnimationOnClick(${WrappedComponent.displayName || WrappedComponent.name})`;
    return WithAnimationOnClick;
}