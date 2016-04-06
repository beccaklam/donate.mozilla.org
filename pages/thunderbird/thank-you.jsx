import React from 'react';
import ThunderbirdFooter from '../../components/thunderbird/footer.jsx';
import ThankYouHeader from '../../components/thunderbird/thank-you-header.jsx';
import SignUpOrSocial from '../../components/signup-or-social.jsx';
import ThankYouPage from '../thank-you.jsx';

var ThunderbirdThankYou = React.createClass({
  propTypes: {
    email: React.PropTypes.string,
    country: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <ThankYouPage className="thunderbird" {...this.props}>
        <ThankYouHeader/>
        <div>
          <SignUpOrSocial
            supportedLocales={["en"]}
            country={this.props.country}
            email={this.props.email}
          />
          <ThunderbirdFooter/>
        </div>
      </ThankYouPage>
    );
  }
});

module.exports = ThunderbirdThankYou;
