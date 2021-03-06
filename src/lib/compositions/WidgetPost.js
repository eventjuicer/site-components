
import React from 'react';
import Box from '@material-ui/core/Box';
import get from 'lodash/get'

import SingleRecord from "../datasources/SingleRecord"
import WidgetPostCompact from './WidgetPostCompact'
import WidgetPostCovered from './WidgetPostCovered'
import WidgetPublisher from './WidgetPublisher'
import Markdown from '../components/Markdown'
import Alert from '../components/Alert'
// import WidgetPostsByAuthor from './WidgetPostsByAuthor'
import Sharer from '../components/Sharer'
import dynamic from 'next/dynamic'
import {slug} from '../helpers'
const WidgetPostsByAuthor = dynamic(() => import('./WidgetPostsByAuthor'))

const WidgetPost = ({id, wrapperProps}) => <SingleRecord endpoint="posts" id={id}>{(post) => {
    
    const headline = get(post, "meta.headline", "")
    const quote = get(post, "meta.quote", "")
    const body = get(post, "meta.body", "")
    const published_at_year = get(post, "published_at", "").substring(0, 4)
    const isOld = published_at_year < 2020
    const short = ["news"].includes(get(post, "category"));
    const company_id = get(post, "company.id", 0)
    const hasCover = get(post, "cover", "").indexOf("cloudinary") > 0

    const content = <>{isOld && <Alert type="error" label="alerts.content_is_old" />}
                    <Markdown children={body} rendererData={post} big={true} />
                    
                    </>
    const other =   null//<WidgetPostsByAuthor except={id} company_id={company_id} />

    const publisher =  <div style={{marginBottom: 20}}> 
                      <WidgetPublisher id={company_id} initialData={post.company} />  
                      <Sharer url={`/${slug(headline)},${id}`} />
                      </div>

    const props = {wrapperProps, id, headline, content, publisher, other}

    return short || !hasCover? <WidgetPostCompact {...props} />: <WidgetPostCovered cover={post.cover} isOld={isOld} quote={quote} {...props} />
    
  }}</SingleRecord>


WidgetPost.defaultProps = {
  id: 0,
  wrapperProps: {
    first: false,
    color: "transparent"
  }
}


export default WidgetPost
