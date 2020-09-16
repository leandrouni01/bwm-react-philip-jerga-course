
import React from 'react';
import { StateContext } from "../state-context";

const connect = selectStates => Component => {
    class Connect extends React.Component {
        render() {
            const states = selectStates(this.context);
            return <Component {...states}></Component>
        }
    }
    Connect.contextType = StateContext;
    return Connect;
}

export default connect;
