
import React from 'react';
import { StateContext } from "../state-context";

const connect = selectStates => Component => {
    class Connect extends React.Component {
        render() {
            
            const states = this.context.getState();
            const slice = selectStates(states);
            return <Component {...slice}></Component>
        }
    }
    Connect.contextType = StateContext;
    return Connect;
}

export default connect;
