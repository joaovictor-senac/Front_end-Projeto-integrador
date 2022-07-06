import React from "react";
import { Container } from './styles'

interface TooltipProps {
    title: string;
    className?: string;
    children: string;
}

const Tooltips: React.FC<TooltipProps> = ({ className='', title, children }) => {
    return (
        <Container className = {className} >
            {children}
            <span>{title}</span>
        </Container>
    )
}

export default Tooltips;