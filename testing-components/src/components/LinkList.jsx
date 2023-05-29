import React from 'react';

const LinkList = ({id, links}) => {
    return (
        
        <div id={id}>
            <h4><strong>{id}</strong></h4>
            <ul>
                {
                    links.map((link) => {
                        return <li key={link}><a href="#">{link}</a></li>
                    })
                }
            </ul>
            <hr />
        </div>
    );
};

export default LinkList;