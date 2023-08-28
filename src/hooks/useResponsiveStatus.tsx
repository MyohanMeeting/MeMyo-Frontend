import { useEffect, useRef, useState } from 'react';


function useResponsiveStatus() {
    const [isMobile, setIsMobile] = useState<boolean>();
    const width = useRef(0);
    const onResize = () => {
        let width = document.documentElement.clientWidth;
        return width;
    }
    const onSettingResize = () => {
        width.current = onResize();
            if (width.current < 400) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
        }
    }

    useEffect(() => {
        onSettingResize();
        window.addEventListener('resize',onSettingResize)

        return () => {
            window.removeEventListener('resize', onSettingResize)
        }
    }, []);

    return isMobile;
}

export default useResponsiveStatus;