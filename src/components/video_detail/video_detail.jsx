import styles from './video_detail.module.css';
import React from 'react';

const VideoDetail = ({ video, video: { snippet } }) => {
  const decode = require('unescape');
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        id='ytplayer'
        type='text/html'
        title='youtube video player'
        width='100%'
        height='500px'
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className={styles.metadata}>
        <h2 className={styles.title}>{decode(snippet.title)}</h2>
        <h3 className={styles.channel}>{snippet.channelTitle}</h3>
        <pre className={styles.description}>{snippet.description}</pre>
      </div>
    </section>
  );
};

export default VideoDetail;
