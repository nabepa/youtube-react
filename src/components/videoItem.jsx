import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div className='video-item'>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className='video-detail'>
        <h1 className='video-title'>제목 {video.snippet.title}</h1>
        {/* <span className='video-views'>조회수 {video.snippet.}</span> */}
        <span className='video-'>게시일 {video.snippet.publishTime}</span>
        <span className='video-'>게시자 {video.snippet.channelTitle}</span>
        <span className='video-'>설명 {video.snippet.description}</span>
      </div>
    </div>
  );
};

export default VideoItem;
