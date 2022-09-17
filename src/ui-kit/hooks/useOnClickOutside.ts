import { RefObject, useEffect } from 'react';

export function useOnClickOutside({
    dropdownContainerRef,
    triggerRef,
    handler,
}: {
    dropdownContainerRef: RefObject<any>;
    triggerRef: RefObject<any>;
    handler: (event?: MouseEvent | TouchEvent) => void;
}) {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (
                !dropdownContainerRef.current ||
                dropdownContainerRef.current.contains(event.target) ||
                !triggerRef.current ||
                triggerRef.current.contains(event.target)
            ) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [dropdownContainerRef, triggerRef, handler]);
}
