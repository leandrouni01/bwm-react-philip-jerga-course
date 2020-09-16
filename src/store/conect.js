
import React from 'react';
import { StateContext } from "../state-context";

const connect = (Component,selectStates) => {


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
