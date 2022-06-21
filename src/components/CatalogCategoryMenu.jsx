import * as React from 'react';
import styled from "@emotion/styled";
import {CategoryCounter} from "./CategoryItem";
import { LinkBase } from './LinkBase';
import { Navigate } from 'react-router-dom';

const Div = styled.div`
    width: 240px;
    left: 0px;
    top: 120px;
    border-radius: 0px;
    border-bottom: 1px solid #F1F3F4;
    height: 40px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14sp;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.25px;
`

export function CatalogCategoryMenu({categories}) {
    
    
    
 
    return (
       <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", alignContent: "flex-start", maxWidth: "350px", margin: "0"}}>
           {categories?.map((item) => (
               <LinkBase to={`/catalog?categoryId=${item.id}`} style={{margin: "auto"}}>
                    <Div key={item.id}>
                        <span style={{color: "#5E6366"}}>{item.name}</span>
                        <CategoryCounter> {item.childCount} </CategoryCounter>
                    </Div>
               </LinkBase>           
           ))}
       </div>

    )
}
