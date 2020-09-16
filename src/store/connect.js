
import React from 'react';
import { StateContext } from "./Provider";

const connect = selectStates => Component => {
    class Connect extends React.Component {
        render() {
            const { getState, dispatch } = this.context;
            const states = getState();
            const slice = selectStates(states);
            return <Component {...slice} dispatch={dispatch}></Component>
        }
    }
    Connect.contextType = StateContext;
    return Connect;
}

export default connect;
