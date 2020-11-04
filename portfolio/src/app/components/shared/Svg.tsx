import React, { useState, useEffect, useRef } from 'react';
import { ReactSVG } from 'react-svg';

export const Svg = (props: {src: string, name: string, styles?: string, size?: string, onClick?: any}) => {

    const IconWrapper = (icon: any) => (<ReactSVG className={`icon-svg ${icon.size} ${icon?.extra ? icon.extra : ''}`} src={icon.file} onClick={icon.onClick} />);
    const ImportedIconRef = useRef(null);
    const [loading, setLoading] = useState(false);
        useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                const { default: namedImport } = await import(`../../../assets/icons/${props.src}/${props.name}.svg`);
                ImportedIconRef.current = namedImport;
            } catch (err) {
                console.error(err);
                throw err;
            } finally {
                setLoading(false);
            }
        };
        importIcon();
        }, [props.name, props.src]);
        const { current: ImportedIcon } = ImportedIconRef;
        return !loading && ImportedIconRef.current ? <IconWrapper size={props.size} file={ImportedIcon} extra={props.styles} onClick={props.onClick} /> : null;

};