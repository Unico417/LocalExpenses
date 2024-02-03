import React from 'react';
import Style from './sample.scss';
import classnames from 'classnames';

type Props = {};
type State = {};

class Sample extends React.Component<Props, State> {
    render() {
        const isDark = true;
        return (
            <div className={classnames(Style.sample, {
                [Style.dark]: isDark,
            })}>
                Hello World!
            </div>
        );
    }
}

export default Sample;
