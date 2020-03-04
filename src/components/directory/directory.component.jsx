import React from "react"
import {connect} from 'react-redux';
import {selectDirectorySection} from '../../Redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';
import './directory.style.scss';
import MenuItem from "../menu-item/menu-item.component";





    
const Directory = ({sections}) => (
        
            <div className="directory-menu">
                {sections.map(({title,id,imageUrl,size,linkUrl}) => (
                    <MenuItem key ={id} title={title} imageUrl={imageUrl} size={size}
                      link = {linkUrl}
                    />
                ))}
            </div>
);
      



const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySection
})

export default connect(mapStateToProps)(Directory);