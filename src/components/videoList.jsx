import React from 'react';
import VideoItem from './videoItem';

const VideoList = ({ videos }) => {
  return (
    <ul video-list>
      {videos.map((video) => (
        <VideoItem key={video.id.videoId} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
