import React from 'react';

const SignUpPage = () => {
  return (
    <div>
      <a
        className="btn btn-primary"
        data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up"
        data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"releases signup prompt","auth_type":"SIGN_UP","originating_url":"https://github.com/rauenzi/BetterDiscordApp/releases"}}'
        href="https://github.com/join?source=prompt-releases"
      >
        Sign up
      </a>

      <style jsx>{`
        .btn {
          -webkit-text-size-adjust: 100%;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
          word-wrap: break-word;
          text-align: center!important;
          box-sizing: border-box;
          text-decoration: none;
          position: relative;
          display: inline-block;
          padding: 6px 12px;
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
          white-space: nowrap;
          vertical-align: middle;
          cursor: pointer;
          user-select: none;
          background-repeat: repeat-x;
          background-position: -1px -1px;
          background-size: 110% 110%;
          border: 1px solid rgba(27,31,35,.2);
          border-radius: .25em;
          appearance: none;
          color: #fff;
          background-color: #28a745;
          background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
        }
      `}</style>
    </div>
  );
};

export default SignUpPage;
