import { useAppDispatch } from '@/lib/hooks';
import { UnknownAction } from '@reduxjs/toolkit';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

interface CounterButtonProps {
    action: UnknownAction,
    children: React.ReactNode,
    variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined,
    className?: string,
    tooltip?: string
}

const CounterButton = ({ action, children, variant, className, tooltip }: CounterButtonProps) => {
    const dispatch = useAppDispatch();
    return (


        <Button className={className} variant={variant} size='icon' onClick={() => {
            dispatch(action);
        }}>
            {(tooltip?.trim().length !== 0 && typeof tooltip !== 'undefined') ? <Tooltip>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent>
                    <p>{tooltip}</p>
                </TooltipContent>
            </Tooltip> : children}

        </Button>
    );
}

export default CounterButton;