import React, { Component } from 'react';
import { FacebookButton, FacebookCount,LinkedInButton,TwitterButton,TumblrButton } from "react-social";
import './likeAndShare.styles.css';

const LikeAndShare=({title,url})=> {
  return (
    <div style={{ marginBottom: "10px" }}>
      <FacebookButton url={url} appId={751765995874748} className="button-share">
      <img alt="messenger" src="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-facebook.svg" loading="lazy" height="40" width="40" />
    </FacebookButton>
    <LinkedInButton url={url} appId={751765995874748} className="button-share">
    <img alt="messenger" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/linkedin_circle-512.png" loading="lazy" height="40" width="40" />
    </LinkedInButton>
    <TwitterButton url={url} appId={751765995874748} className="button-share">
    <img alt="messenger" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" loading="lazy" height="40" width="40" />
    </TwitterButton>
    <TumblrButton url={url} appId={751765995874748} className="button-share">
    <img alt="messenger" src="https://cdn-icons-png.flaticon.com/512/145/145811.png?w=360" loading="lazy" height="40" width="40" />
    </TumblrButton>
    </div>
  );
}

export default LikeAndShare;