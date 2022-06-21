import { ProductItem } from "./CategoryItem";
import styled from "@emotion/styled";
import { LinkBase } from "./LinkBase";
import firstImage from "../images/asd.svg"

export function Products({ content, product, category }) {
    const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 25%);
        gap: 15px;
        width: 900px;
        margin-left: 425px;
    `

    return (
        <Grid>
            {!category?<div style={{ display: "flex", alignItems: "center", margin: "10em 30em", flexWrap: "wrap" }}><img src={firstImage} alt="" /><h2 style={{ paddingLeft: "2em", textAlign: "center" }}>Нет подкатегории</h2></div>
            :!product?.content.length>0?<div style={{ display: "flex", alignItems: "center", margin: "10em 30em", flexWrap: "wrap" }}><img src={firstImage} alt="" /><h2 style={{ paddingLeft: "2em", textAlign: "center" }}>Нет товаров</h2></div>
            :content.map((item) => (
                <LinkBase to={`/home?categoryId=${item.id}`}>
                    <ProductItem>{item.name}</ProductItem>
                </LinkBase>
            ))
            }
            
        </Grid>
    )
}