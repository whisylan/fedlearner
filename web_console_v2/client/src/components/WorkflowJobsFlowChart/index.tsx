import React, { FC, useEffect, useState } from 'react';
import WorkflowJobNode from './WorkflowJobNode';
import {
  JobNodeType,
  JobNodeRawData,
  convertJobsToElements,
  JobNode,
  JobNodeStatus,
} from './helpers';
import styled from 'styled-components';
import ReactFlow, {
  Background,
  BackgroundVariant,
  isNode,
  OnLoadParams,
  FlowElement,
} from 'react-flow-renderer';

import PubSub from 'pubsub-js';
import { useSubscribe } from 'hooks';
import { Variable } from 'typings/workflow';

const Container = styled.div`
  position: relative;
  /* TODO: remove the hard-coded 48px of chart header */
  height: ${(props: any) => `calc(100% - ${props.top || '0px'} - 48px)`};
  background-color: var(--gray1);

  /* react flow styles override */
  .react-flow__node {
    border-radius: 4px;
    font-size: 1em;
    text-align: initial;
    background-color: transparent;
    cursor: initial;

    &-global,
    &-execution,
    &-config {
      &.selected {
        --selected-background: #f2f6ff;
        --selected-border-color: var(--primaryColor);
      }
    }

    &.selectable {
      cursor: pointer;

      &:hover {
        filter: drop-shadow(0px 4px 10px #e0e0e0);
      }
    }
  }
  .react-flow__handle {
    width: 6px;
    height: 6px;
    opacity: 0;
  }
  .react-flow__edge {
    &-path {
      stroke: var(--gray4);
    }
  }
`;
// Internal pub-sub channels, needless to put in any shared file
const CHANNELS = {
  update_node_status: 'workflow_job_flow_chart.update_node_status',
};

type Props = {
  globalVariables?: Variable[];
  jobs: JobNodeRawData[];
  type: JobNodeType;
  selectable?: boolean;
  onJobClick?: (node: JobNode) => void;
  onCanvasClick?: () => void;
};

const WorkflowJobsFlowChart: FC<Props> = ({
  globalVariables,
  jobs,
  type,
  selectable = true,
  onJobClick,
  onCanvasClick,
}) => {
  const [elements, setElements] = useState<FlowElement[]>([]);

  useEffect(() => {
    const jobElements = convertJobsToElements({ jobs, globalVariables }, { type, selectable });

    setElements(jobElements);
  }, [jobs, type, selectable, globalVariables]);

  useSubscribe(
    CHANNELS.update_node_status,
    (_: string, arg: { id: string; status: JobNodeStatus }) => {
      updateNodeStatus(arg);
    },
  );

  return (
    <Container>
      <ReactFlow
        elements={elements}
        onLoad={onLoad}
        onElementClick={(_, element: FlowElement) => onElementsClick(element)}
        onPaneClick={onCanvasClick}
        nodesDraggable={false}
        zoomOnScroll={false}
        zoomOnDoubleClick={false}
        minZoom={1}
        maxZoom={1}
        nodeTypes={WorkflowJobNode}
      >
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} color="#E1E6ED" />
      </ReactFlow>
    </Container>
  );

  function onElementsClick(element: FlowElement) {
    if (isNode(element)) {
      onJobClick && onJobClick(element as JobNode);
    }
  }
  function onLoad(_reactFlowInstance: OnLoadParams) {
    _reactFlowInstance!.fitView({ padding: 2 });
  }
  function updateNodeStatus(arg: { id: string; status: JobNodeStatus }) {
    setElements((els) => {
      return els.map((el) => {
        if (el.id === arg.id) {
          el.data = {
            ...el.data,
            status: arg.status,
          };
        }
        return el;
      });
    });
  }
};

export function updateNodeStatusById(arg: { id: string; status: JobNodeStatus }) {
  PubSub.publish(CHANNELS.update_node_status, arg);
}

export default WorkflowJobsFlowChart;
