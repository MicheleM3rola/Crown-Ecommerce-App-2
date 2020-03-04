import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCollectionsForPreview} from '../../Redux/shop/shop.selectors';
import PreviewCollection from '../preview-collection/preview.collection.component';
import './collections-overview.style.scss';


const CollectionsOverview = ({collections})=>(
    <div className='collections-overview'>
                {
                    collections.map(({id,...otherProps}) =>(
                        <PreviewCollection key={id} {...otherProps}/>
                    ))
                }

            </div>
)


const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})



export default connect(mapStateToProps)(CollectionsOverview);