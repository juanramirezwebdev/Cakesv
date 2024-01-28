import { InstagramEmbed } from 'react-social-media-embed';
import { instagramPosts } from '../data/instagramData';

const Instagram = () => {
  return (
    <>
      <div className="row" style={{ marginTop: '20px', marginBottom: '20px' }}>
        {instagramPosts.map((postUrl, index) => (
          <div key={index} className="col-md-4 mb-4">
            <InstagramEmbed url={postUrl} width={328} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Instagram;
