import { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { instagramPosts } from '../data/instagramData';

const Instagram = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <br />
      {isLoading ? (
        <div className="text-center">
          <i className="fas fa-spinner fa-spin fa-2x text-primary"></i>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="row">
          {instagramPosts.map((postUrl, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="instagram-post-wrapper">
                <InstagramEmbed url={postUrl} maxWidth={328} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Instagram;
