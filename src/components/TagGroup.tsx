import React from 'react';
import Tag from './Tag';

export interface tagGroupProps {
    tags: string[];
    className?: string
}

const TagGroup: React.FC<tagGroupProps> = ({tags, className}) => {
    return(
        <div className={`${className ? className : ``} flex flex-row`}>
            {tags.map((tag, i) => {
                return(
                    <div key={i} className={`mr-2`}>
                        <Tag>{tag}</Tag>
                    </div>
                )
            })}
        </div>
    )
}

export default TagGroup