import React, { CSSProperties, ReactNode, useState }  from 'react';
import './style.less';

export type TEasyCollapseProps = {
  content: ReactNode;
  maxHeight?: number;
  className?: string;
  style?: React.CSSProperties;
};

export type TEasyCollapseListProps = {
  content: ReactNode[];
  gap?: number;
  maxHeight?: number;
  itemClassName?: string;
  itemStyle?: React.CSSProperties;
};

export const EasyCollapse = (props: TEasyCollapseProps) => {
  const { content, maxHeight, className = '', style = {} } = props;
  const uuid = `${Date.now()}`;
  const maxHeightNew = maxHeight === undefined ? 400 : maxHeight;

  return (
    <div
      className={`easy-collapse-wrapper ${className}`}
      style={{ ...style, '--max-height': `${maxHeightNew}px` } as CSSProperties}
    >
      <input className="easy-collapse-content-check" type="checkbox" id={uuid} hidden />
      <div className="easy-collapse-content">
        <div className="easy-collapse-text">{content}</div>
        <label htmlFor={uuid} className="easy-collapse-btn">
          <span></span>
        </label>
      </div>
    </div>
  );
};

export const EasyCollapseList = (props: TEasyCollapseListProps) => {
  const { content, gap, itemClassName = '', itemStyle = {} } = props;

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap }}>
      {content?.map((item, index) => {
        return <EasyCollapse key={index} content={item} className={itemClassName} style={{ ...itemStyle }} />;
      })}
    </div>
  );
};

export const useExpandAndFold = () => {
  const [expandedAll, setExpandedAll] = useState<boolean>(false);

  const expandOrFoldAll = () => {
    const contentCheck = document.querySelectorAll('.easy-collapse-content-check');
    contentCheck.forEach((item: any) => {
      item.checked = !expandedAll;
    });

    setExpandedAll(!expandedAll);
  };

  return { expandedAll, expandOrFoldAll };
};
