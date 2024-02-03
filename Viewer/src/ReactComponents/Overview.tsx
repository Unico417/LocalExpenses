import React from "react";
import Expenses from "../Models/Expenses";

type Props = { app: Expenses; };
type State = {};

export default class Overview extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>overview</div>
        );
    }
}
