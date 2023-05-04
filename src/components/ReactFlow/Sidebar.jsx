import React from 'react';

export default () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
        console.log(event);
    };

    return (
        <aside>
            <div className="description">You can drag these nodes to the pane on the left.</div>
            <div className="dndnode custom-model-node" onDragStart={(event) => onDragStart(event, 'customModel')} draggable>
                Model
            </div>
            {/*<div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                Default Node
            </div>*/}
        </aside>
    );
};
