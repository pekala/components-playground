/*jshint esnext: true */

const React = require('react');
const ClipDrop = require('./ClipDrop.jsx');

require('./ClipToggle.scss');

const ClipToggle = React.createClass({
    propTypes: {
        /**
         * Number of clips to be shown in the badge
         */
        clipCount: React.PropTypes.number
    },
    getDefaultProps: function() {
        return {
            clipCount: 0
        };
    },
    getInitialState: function() {
        return {
            active: false
        };
    },
    toggleClicked: function() {
        this.setState({
            active: !this.state.active,
            cropActive: false
        });
    },
    cropToggleClicked: function() {
        if(this.state.active) {
            this.setState({
                cropActive: !this.state.cropActive
            });
        }
    },
    render: function() {
        const className = 'ClipToggle' + (this.state.active ? ' ClipToggle__active' : '');
        return (
            <div className={className}>
                <div onClick={this.toggleClicked}>
                    <ClipDrop
                        counter={this.props.clipCount}
                        shape="tear"
                        icon="chevron-x"
                    />
                </div>
                <div className="ClipToggle--cropToggle" onClick={this.cropToggleClicked}>
                    <ClipDrop 
                        icon="crop" 
                        theme={this.state.cropActive ? 'green' : 'orange'}
                    />
                </div>
            </div>
        );
    }
});

module.exports = ClipToggle;
