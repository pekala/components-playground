/*jshint esnext: true */

/**
 * Small drops used as action buttons in clippings context
 */

const React = require('react');

require('./ClipDrop.scss');

const ClipDrop = React.createClass({
    propTypes: {
        /**
         * Counter displayed as a badge next to the drop
         */
        counter: React.PropTypes.number,
        /**
         * Shape of the drop 
         */
        shape: React.PropTypes.oneOf(['tear', 'circle']),
        /**
         * Color theme of the drop and counter badge
         */
        theme: React.PropTypes.oneOf(['orange', 'blue', 'green']),
        /**
         * Icon in the drop (uses icons from UI Components)
         */
        icon: React.PropTypes.oneOf([
            'comment', 
            'play', 
            'share', 
            'link',
            'crop',
            'chevron-x'
        ]).isRequired
    },
    getDefaultProps: function() {
        return {
            counter: 0,
            shape: 'circle',
            theme: 'orange'
        };
    },
    render: function() {
        const className = `ClipDrop__${this.props.theme}-${this.props.shape}`;
        const iconClassName = `issuuicon issuuicon-${this.props.icon}`;
        return (
            <span className={className}>
                <span className={iconClassName}></span>
                {this.props.counter !== 0 &&
                    <span className="ClipDrop--counter">{this.props.counter}</span>
                }
            </span>
        );
    }
});

module.exports = ClipDrop;
