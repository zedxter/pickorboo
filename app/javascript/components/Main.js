import React from 'react';

import PollItem from './PollItem';

export default class Main extends React.Component {
    render() {
        const items = [];
        const content = items.map((item) =>
            <PollItem item={item} />
        );
        return (
            <div className="main">
                <div className="container">
                    {content}
                </div>
            </div>
        );
    }
}
