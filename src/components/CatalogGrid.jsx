import styled from "@emotion/styled";
import { Category } from "@mui/icons-material";
import { LinkBase } from "./LinkBase";


export function CatalogGrid({categories, category}) {
    const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 30%);
        gap: 10px;
        max-width: 900px;
    `
    const ChildItem = styled.div`
        left: 10px;
        top: 43px;
        border-radius: 4px;
        padding: 5px, 10px, 5px, 10px;
        background-color: #FFFFFF;    
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 10px;
        gap: 10px;
        width: 230px;
        height: 28px;
        border-radius: 4px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    `


    return (
        <div style={{display: "flex"}}>
            <Grid>
            {!category?<div>sad</div>
            :categories?.map((item)=>(
              <div style={{backgroundColor: "#EAEAEA", display:"flex", flexWrap: "wrap", height: "250px", padding: "10px"}}>
                  <h3>{item.name}</h3>
                  {item.childCategories.slice(0, 3).map((child)=>(
                      <LinkBase to={`/catalog?categoryId=${child.id}`}>
                        <ChildItem>{child.name}</ChildItem>
                      </LinkBase>
                  ))}
                </div>  
            ))}
            </Grid>
        </div>
    ) 
}
// {"+"{item.childCategories.slice(4).length}"категории"}