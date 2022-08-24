import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

export interface ShareArticleProps {
  articleLink: string;
  hashTags: string[];
  articleTitle: string;
}

export function ShareArticle({ articleLink, hashTags, articleTitle }: ShareArticleProps) {
  return (
    <div className={'fixed right-20 top-1/3 flex flex-col  items-center'}>
      <p className={'default-police font-bold text-2xl'}>Share</p>
      <div className={'grid grid-cols-2  gap-4 mt-6'}>
        <TelegramShareButton
          url={articleLink}
          title={articleTitle}
          className={'transition-all duration-200 hover:scale-125'}
        >
          <TelegramIcon size={36} round />
        </TelegramShareButton>
        <TwitterShareButton
          title={articleTitle}
          url={articleLink}
          hashtags={hashTags}
          className={'transition-all duration-200 hover:scale-125'}
        >
          <TwitterIcon size={36} round />
        </TwitterShareButton>
        <LinkedinShareButton
          title={articleTitle}
          url={articleLink}
          className={'transition-all duration-200 hover:scale-125'}
        >
          <LinkedinIcon size={36} round />
        </LinkedinShareButton>
        <WhatsappShareButton
          url={articleLink}
          title={articleTitle}
          separator=":: "
          className={'transition-all duration-200 hover:scale-125'}
        >
          <WhatsappIcon size={36} round />
        </WhatsappShareButton>
        <EmailShareButton
          url={articleLink}
          subject={articleTitle}
          body="body"
          className={'transition-all duration-200 hover:scale-125'}
        >
          <EmailIcon size={36} round />
        </EmailShareButton>
      </div>
    </div>
  );
}

export default ShareArticle;
