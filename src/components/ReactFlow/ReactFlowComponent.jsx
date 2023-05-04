import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import ReactFlow, {
    MiniMap,
    ReactFlowProvider,
    Background,
    addEdge,
    Controls,
    SelectionMode, useNodesState, applyNodeChanges, applyEdgeChanges
} from 'reactflow';
import 'reactflow/dist/style.css';
import {CustomModelNode} from "./CustomModelNode";
import Sidebar from "./Sidebar";

const panOnDrag = [1, 2];

let id = 0;
const getId = () => `dndnode_${id++}`;

export const ReactFlowComponent = (props) => {
    const initialNodes = [];

    const initialEdges = [];

    const reactFlowWrapper = useRef(null);
    const nodeTypes = useMemo(() => ({ customModel: CustomModelNode }), []);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    useEffect(() => {
        console.log("use effect");
    }, [nodes]);

    const onDragOver = useCallback((event) => {
        console.log("onDragOver");
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const nodeColor = (node) => {
        switch (node.type) {
            case 'customModel':
                return '#6ede87';
            case 'output':
                return '#6865A5';
            default:
                return '#ff0072';
        }
    };

    const onDrop = useCallback(
        (event) => {
            console.log("onDrop");
            event.preventDefault();

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                console.log("type undefined");
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });

            const newNode = {
                id: getId(),
                type,
                position,
                data: { label: `${type} node`, test: '123' },
                dragHandle: '.drag-handle',
                draggable: true,
            };
            console.log(newNode);

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );

    return (
        <div style={{ width: '65vw', height: '100vh' }} className="dndflow">
            <ReactFlowProvider>
                <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        nodeTypes={nodeTypes}
                        panOnDrag={panOnDrag}
                        selectionMode={SelectionMode.Partial}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                    >
                    <MiniMap
                        nodeColor={nodeColor}
                        nodeStrokeWidth={3}
                        zoomable
                        pannable
                    />
                    <Controls showInteractive={false} />
                    <Background variant="cross" />
                </ReactFlow>
                </div>
                <Sidebar />
            </ReactFlowProvider>
        </div>
    )
}
