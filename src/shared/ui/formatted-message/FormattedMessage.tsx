import React, {useEffect, useRef} from 'react';
import {addMedia, clearMedia} from 'src/entities/Task/taskSLice.ts';
import {useAppDispatch} from 'src/shared/utils/hooks/redux.ts';

const FormattedMessage: React.FC<{children: string}> = ({children}) => {
    const ref = useRef<HTMLElement>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const text: [] = [];

        ref?.current?.childNodes.forEach(node => {
            //@ts-ignore
            if (node.nodeName === '#text') text.push(node.wholeText);
            if (node.nodeName === 'BR') node.remove();
            if (node.nodeName === 'A' && node.textContent) {
                dispatch(addMedia({link: node.textContent}));
                node.replaceWith('*Смотри медиа*');
            }
        });

        // @ts-ignore
        ref.current.textContent = text.join('');

        return () => {
            dispatch(clearMedia());
        };
    }, []);

    return (
        <span
            dangerouslySetInnerHTML={{__html: children}}
            ref={ref}
            style={{maxWidth: '100%'}}
        />
    );
};

export default FormattedMessage;
