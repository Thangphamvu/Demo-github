import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="left">
                    count items left
                </div>
                <div className="center">
                    <button type="button" className="btn btn-warning mr-5">All</button>
                    <button type="button" className="btn btn-warning mr-5">Active</button>
                    <button type="button" className="btn btn-warning">Completed</button>
                </div>
                <div className="right">
                    <button type="button" className="btn btn-danger">Clear completed</button>
                </div>
            </div>
        );
    }
}

export default Footer;
