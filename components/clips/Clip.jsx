/*jshint esnext: true */

const React = require('react');
const ClipMetaBar = require('./ClipMetaBar.jsx');

require('./Clip.scss');

// This is a magical number. It comes from the depths of Issuu. 
// It is perfect. It shall never change.
// If a link is higher than 3.26% of the page height, 
// it shall be a boxed link - otherwise what used to be a "blue inline link".
const MINHEIGHTCLIPPINGPERCENTAGE = 0.0326;

const Clip = React.createClass({
    propTypes: {
        /**
         * Creator and owner of the clipping
         */
        owner: React.PropTypes.oneOf(['publisher', 'reader']),
        /**
         * Type of clipping (only aplicable to publisher clips)
         */
        type: React.PropTypes.oneOf(['link', 'video', 'navigation']),
        /**
         * Width of the clipping area in pixels
         */
        width: React.PropTypes.number.isRequired,
        /**
         * Height of the clipping area in pixels
         */
        height: React.PropTypes.number.isRequired,
        /**
         * Total number of comments
         */
        commentsCount: React.PropTypes.number,
        /**
         * Total number of shares
         */
        sharesCount: React.PropTypes.number
    },
    getDefaultProps: function() {
        return {
            owner: 'reader',
            commentsCount: 0,
            sharesCount: 0
        };
    },
    getInitialState: function() {
        return {
            windowHeight: window.innerHeight
        };
    },
    handleResize: function(e) {
        this.setState({
            windowHeight: window.innerHeight
        });
    },
    componentDidMount: function() {
        window.addEventListener('resize', this.handleResize);
    },
    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
    },
    getMetaBarProps: function() {
        const baseDrops = [{
            icon: 'comment',
            shape: 'tear',
            counter: this.props.commentsCount
        }, {
            icon: 'share',
            counter: this.props.sharesCount
        }];

        switch(this.props.type) {
            case 'link':
                return {
                    theme: 'blue',
                    drops: baseDrops.concat([{
                        'icon': 'link'
                    }])
                };
            case 'video':
                return {
                    theme: 'blue',
                    drops: baseDrops.concat([{
                        'icon': 'play'
                    }])
                };
            case 'navigation':
                return {
                    theme: 'green',
                    drops: [{
                        'icon': 'link'
                    }]
                };
            default:
                return {
                    theme: this.props.owner === 'reader' ? 'orange' : 'blue',
                    drops: baseDrops
                };
        }
    },
    render: function() {
        const metaBarProps = this.getMetaBarProps();
        let theme;
        if(this.props.owner === 'reader') {
            theme = 'orange';
        } else if(this.props.type === 'navigation') {
            theme = 'green';
        } else  {
            theme = 'blue';
        }
        const className = `Clip__${theme}`;
        const showMetaBar = this.props.height / this.state.windowHeight > MINHEIGHTCLIPPINGPERCENTAGE;
        return (
            <div className={className}>
                <a className="Clip--area" style={{width: this.props.width, height:this.props.height}}></a>
                {showMetaBar &&
                    <ClipMetaBar theme={metaBarProps.theme} drops={metaBarProps.drops}/>
                }
            </div>
        );
    }
});

module.exports = Clip;
