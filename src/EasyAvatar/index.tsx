import React, { type FC } from 'react';
import './style.less';

export const EasyAvatar: FC<{ title: string }> = (props) => <h4>{props.title}</h4>;
