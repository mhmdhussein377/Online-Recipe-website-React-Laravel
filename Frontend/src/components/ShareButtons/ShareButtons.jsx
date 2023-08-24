import {FacebookShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";
import "./index.css"

const ShareButtons = ({name}) => {

    const shareUrl = window.location.href;
    const title = name;

    return (
        <div className="share-buttons">
            <FacebookShareButton className="share-button" url={shareUrl}>
                Share on Facebook
            </FacebookShareButton>
            <TwitterShareButton className="share-button" url={shareUrl} title={title}>
                Share on Twitter
            </TwitterShareButton>
            <WhatsappShareButton className="share-button" url={shareUrl} description={title}>
                Share on Whatsapp
            </WhatsappShareButton>
        </div>
    );
};

export default ShareButtons;
