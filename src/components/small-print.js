import React from 'react';
import Link from './link.js';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

var Footer = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var bitcoinLink = (<Link to={'/' + this.context.intl.locale + '/give-bitcoin/'}>{this.context.intl.formatMessage({id: 'Bitcoin'})}</Link>);
    var checkLink = (<a target='_blank' href='https://wiki.mozilla.org/Ways_to_Give#Check_.28via_postal_service.29'>{this.context.intl.formatMessage({id: 'check'})}</a>);
    return (
      <div className="row disclaimers">
        <p className="other-ways-to-give">
          <FormattedMessage
            id='other_way_to_give'
            values={{
              bitcoinLink,
              checkLink
            }}
          />
        </p>
        <p className="need-help">
          <FormattedHTMLMessage id="problems_donating"/>
        </p>
        <p className="donation-notice">
          {this.context.intl.formatMessage({id: 'donation_notice'})}
        </p>
      </div>
    );
  }
});

module.exports = Footer;
