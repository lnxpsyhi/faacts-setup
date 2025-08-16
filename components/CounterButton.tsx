import { useAppDispatch } from '@/lib/hooks';
import { UnknownAction } from '@reduxjs/toolkit';
import { Button } from '@/components/ui/button';

interface CounterButtonProps {
    action: UnknownAction,
    children: React.ReactNode,
    variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined,
    className?: string | undefined
}

const CounterButton = ({ action, children, variant, className }: CounterButtonProps) => {
    const dispatch = useAppDispatch();
    return (
        <Button className={className} variant={variant} size='icon' onClick={() => {
            dispatch(action);
        }}>{children}</Button>
    );
}

export default CounterButton;