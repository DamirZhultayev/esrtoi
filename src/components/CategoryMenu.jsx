import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import firstIMage from "../images/asd.svg"
import {CategoryCounter, CategoryItem} from "./CategoryItem";
import { LinkBase } from './LinkBase';

export function CategoryMenu({categories}) {
    const renderTree = (nodes) => (
        <LinkBase to={`/home?categoryId=${nodes.id}`}>
            <TreeItem  key={nodes.id} nodeId={nodes.id} label={<div> 
            <CategoryItem>
                {nodes.name}
            <CategoryCounter>{nodes.childCount}</CategoryCounter>
            </CategoryItem>
        </div>}>
          {Array.isArray(nodes.childCategories)
            ? nodes.childCategories.map((node) => renderTree(node))
            : null}
        </TreeItem>
        </LinkBase>
        
    );

    return (
        <div>
             <TreeView
              aria-label="rich object"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpanded={['root']}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: 110, flexGrow: 1, maxWidth: 400}}
              style={{color:"#5E6366"}}
             >     
            {categories?.map((item)=>renderTree(item))}
            </TreeView>
        </div>
    )
}