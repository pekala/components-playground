/*jshint esnext: true */

const React = require('react');
const Clip = require('./Clip.jsx');

require('./ClipsPage.scss');

const ClipsPage = React.createClass({
    propTypes: {
        /**
         * Array of clips with clip props (see Clip component)
         * and `top` and `left` values (px) for `(x, y)` position of 
         * top left corner of each clip
         */
        clips: React.PropTypes.array
    },
    render: function() {
        const clips = this.props.clips.map(function(clip, index) {
            return (
                <div style={{top: clip.top, left: clip.left}}>
                    <Clip key={index} {...clip} />
                </div>
            );
        }.bind(this));

        return <div className="ClipsPage">{clips}</div>;
    }
});

module.exports = ClipsPage;
