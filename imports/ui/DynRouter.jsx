import React, {Component} from "react";


class DynRouter extends Component {

    loader = () => <div key='kkli'
        style={{
            position: 'fixed',
            left: '0',
            top: '0',
            height: '100%',
            width: '100%',
            backgroundColor: '#e9edee',
            zIndex: 1200,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        {/*<img src='https://static.collectui.com/shots/3678774/dash-loader-large' alt='loader' />*/}
        <img src='https://cdn.dribbble.com/users/356383/screenshots/1821741/spinner.gif' alt='loader'/>
    </div>;

    dynComp = this.loader;

    state = {ready: false};

    showReady = ({default: dc}) => {
        this.dynComp = dc;
        this.setState({ready: true});
    };

    componentDidMount() {
        const {pageName} = this.props;

        switch (pageName) {
            case 'Hello':
                import('./Hello').then(this.showReady);
                break;
            case 'Info':
                import('./Info').then(this.showReady);
                break;
        }
    }

    render() {
        const {ready} = this.state;

        const DynComp = this.dynComp;
        const Loader = this.loader;

        return <React.Fragment>
            {
                (ready)
                    ? <DynComp {...this.props} />
                    : <Loader/>
            }
        </React.Fragment>;
    }
}

export default DynRouter;
