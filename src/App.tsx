import React from 'react';
import { Tooltip } from 'react-tooltip';

export const TooltipAnchor: React.FunctionComponent<any> = ({ children, id, ...rest }) => {
    return (
        <span
            id={id}
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: 'auto',
                alignItems: 'center',
                width: '60px',
                height: '60px',
                borderRadius: '60px',
                color: '#222',
                background: 'rgba(255, 255, 255, 1)',
                cursor: 'pointer',
                boxShadow: '3px 4px 3px rgba(0, 0, 0, 0.5)',
                border: '1px solid #333',
            }}
            {...rest}
        >
            {children}
        </span>
    );
};

const App: React.FunctionComponent = () => {
    return (
        <div style={{
            display: 'flex', gap: '5px', width: 'fit-content', margin: '300px 200px',
        }}
        >
            <TooltipAnchor
                data-tooltip-id="my-tooltip"
                data-tooltip-content="1"
                data-some-relevant-attr="wow"
            >
                ◕‿‿◕
            </TooltipAnchor>
            <TooltipAnchor
                data-tooltip-id="my-tooltip"
                data-tooltip-content="2"
                data-some-relevant-attr="so relevant"
            >
                ◕‿‿◕
            </TooltipAnchor>
            <TooltipAnchor
                data-tooltip-id="my-tooltip"
                data-tooltip-content="3"
                data-some-relevant-attr="much important"
            >
                ◕‿‿◕
            </TooltipAnchor>
            <Tooltip
                id="my-tooltip"
                delayShow={0}
                delayHide={0}
                render={({ content, activeAnchor }) => {
                    if (content !== activeAnchor?.getAttribute('data-tooltip-content')) {
                        console.log('activeAnchor', activeAnchor, 'content', content);
                    }
                    
                    return (
                        <span>
                            {`The element #${content} is currently active.`}
                            <br />
                            Relevant attribute:
                            {activeAnchor?.getAttribute('data-some-relevant-attr') || 'not set'}
                            {content === '1' ? (
                                <>
                                    <br />
                                    ddd
                                </>
                            ) : ''}
                        </span>
                    );
                }}
            />
        </div>
    );
};

export default React.memo(App);
