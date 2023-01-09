import React from "react";

export interface iChildren{
    children: React.ReactNode
}

export interface iCardProduct{
    id: number,
    name: string,
    category: string,
    price: number,
    img: string  
}