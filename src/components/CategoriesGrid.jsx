import { CategoryCounter, CategoryItem } from "./CategoryItem";
import styled from "@emotion/styled";
import { LinkBase } from "./LinkBase";
import firstImage from "../images/asd.svg"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  gap: 15px;
`

export function CategoriesGrid({ categories }) {
  return (
    <Grid>
      {!categories ? <div style={{ display: "flex", alignItems: "center", margin: "10em 30em", flexWrap: "wrap" }}><img src={firstImage} alt="" /><h2 style={{ paddingLeft: "2em", textAlign: "center" }}>Нет подкатегории</h2></div>
        : categories?.map((category) => (
          <LinkBase to={`/home?categoryId=${category.id}`}>
            <CategoryItem>
              {category.name}
              <CategoryCounter>
                {category.childCount}
              </CategoryCounter>
            </CategoryItem>
          </LinkBase>
        ))}
    </Grid>

  )
}