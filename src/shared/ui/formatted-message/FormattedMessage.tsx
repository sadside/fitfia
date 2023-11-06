import React, {useEffect, useRef} from 'react';
import {addMedia, clearMedia} from 'src/entities/Task/taskSLice.ts';
import {useAppDispatch} from 'src/shared/utils/hooks/redux.ts';

const FormattedMessage: React.FC<{children: string}> = ({children}) => {
    const ref = useRef<HTMLElement>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const reg = /\n+/g;

        let text = '';

        ref?.current?.childNodes.forEach(node => {
            if (node.textContent.replace(' ', '') === 0) node.remove();
            if (node.nodeName === 'BR') node.remove();
            if (node.nodeName === 'A' && node.textContent) {
                dispatch(addMedia({link: node.textContent}));
                node.replaceWith(' *Смотри медиа* ');
            }
        });

        ref?.current?.childNodes.forEach(node => {
            text += node.textContent;
        });

        console.log(text);

        // @ts-ignore
        ref.current.textContent = text.replace('  ', '');

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
