/*jshint esnext: true */

const React = require('react');
const ClipDrop = require('./ClipDrop.jsx');

require('./ClipMetaBar.scss');

const ClipMetaBar = React.createClass({
    propTypes: {
        /**
         * An array of clip drop props (counter, shape, icon, theme) for included drops
         */
        drops: React.PropTypes.array
    },
    render: function() {
        const drops = this.props.drops.map(function(drop, index) {
            return <ClipDrop key={index} theme={this.props.theme} {...drop} />;
        }.bind(this));

        return <div className="ClipMetaBar">{drops}</div>;
    }
});

module.exports = ClipMetaBar;
