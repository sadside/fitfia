import React, {memo} from 'react';

const FormattedMessage: React.FC<{children: string}> = ({children}) => {
    return <span dangerouslySetInnerHTML={{__html: children}} />;
};

export default memo(FormattedMessage);
