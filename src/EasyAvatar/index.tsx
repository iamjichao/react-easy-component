import React from 'react';
import './style.less';

export type TEasyAvatarProps = {
  nickname: string;
  src: string;
  width?: number;
};

export const EasyAvatar = (props: TEasyAvatarProps) => {
  const { nickname, src, width = 50 } = props;
  return (
    <div
      style={{
        fontSize: width / 2,
        width,
        height: width,
      }}
    >
      <img className="avatar" src={src} alt={nickname} style={{}} />
    </div>
  );
};
