import React, { useState, useEffect, useRef } from 'react';
import Icon from './Icon';

const DynamicIcon = (props: any) => {

    const ImportedIconRef = useRef(null);
    const [loading, setLoading] = useState(false);
        useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                const { default: namedImport } = await import(`../../../../assets/img/icons/${props.skill ? 'skills/' : null}${props.name}.svg`);
                ImportedIconRef.current = namedImport;
            } catch (err) {
            throw err;
            } finally {
            setLoading(false);
            }
        };
        importIcon();
        }, [props.name, props.skill]);
    
        if (!loading && ImportedIconRef.current) {
        const { current: ImportedIcon } = ImportedIconRef;
        return <Icon src={ImportedIcon} />;
        }
    
        return null;

}; export default DynamicIcon;