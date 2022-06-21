import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Products } from './Products';
import { Category } from '@mui/icons-material';
import { CategoryCounter } from './CategoryItem';
import { CatalogGrid } from './CatalogGrid';
import {useEffect, useMemo, useState} from "react";
import {fetchCategories} from "../fetchers/fetchCategories";


export default function CatalogList({categories}) {
  const [category, setCategory] = useState()


    useEffect(() => {
        fetchCategories().then((categories) => {
          setCategory({
            name: 'Главная',
            id: undefined,
            childCategories: categories,
          })
        })
      }, [])

    
    
  return (
      <div>
          {categories?.map((item)=> (
            <List>
          <ListItem disablePadding style={{width: "300px"}}>
            <ListItemButton href={<CatalogGrid categories={category?.childCategories ?? []}/>}>
              <ListItemText primary={item.name} />
              <CategoryCounter>{item.childCounter}</CategoryCounter>
            </ListItemButton>
          </ListItem>
        </List>
          ))}
      </div>
        

  );
}