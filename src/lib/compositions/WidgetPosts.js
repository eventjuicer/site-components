import React from 'react';
import Typography from '@material-ui/core/Typography';
import CachableDatasource from '../datasources/CachableDatasource'
import {useTranslate} from '../i18n'
import get from 'lodash/get'
import PostCard from '../components/PostCard'
import nth from 'lodash/nth'
import isObject from 'lodash/isObject'
import keyBy from 'lodash/keyBy'

function WidgetPosts({company, page, label, inserts}) {

    const [translate] = useTranslate();

    return (
    <>
    {label && <Typography  variant="h4" component="h3" >{translate(label)}</Typography>}

    <CachableDatasource queries={{
      all: {
        resource: "posts",
        params: { page: page}
      },
      filtered: {
        resource: "posts",
        params: { company: company}
      }
    }}>{({all, filtered}) => {

      const arr = (company? filtered: all);

      //get IDs for insers

      const insertPosIds = keyBy((isObject(inserts)? Object.keys(inserts): []).map(pos => ({
        id: get(nth(arr, pos), "id"),
        insert: inserts[pos]
      })), "id")

      return arr.map(post => {

        const id = get(post, 'id')
  
        if(!id){
          return null;
        }

        const insert = !company && id in insertPosIds ? insertPosIds[id]["insert"] : null;
      

        const headline = get(post, "meta.headline", "");
        const _quote = get(post, "meta.quote", "");
        const body = get(post, "meta.body", "")
        const published_at = get(post, "published_at", "")
        const published_at_year = published_at.substring(0, 4);
        const isOwn = get(post, "company.id") == 1216
        const logotype = !company && !isOwn? get(post, "company.profile.logotype_cdn") : null
        const alt = get(post, "company.profile.name", "")

        let quote;
  
        if(_quote.length > 10 && published_at_year > 2018){
          quote = _quote
        }else{
          quote = body.substr(0, 200).replace(/(\*|#|!?\[[^\]]*\]\([^\)]+\))/gm, "");
        }
  
        return <>{insert}<PostCard 
            key={id} 
            id={id} 
            headline={headline} 
            quote={quote} 
            logotype={logotype} 
            alt={alt}
            published_at={published_at}
            /></>
  
      })

    }}
  </CachableDatasource></>);
}

WidgetPosts.defaultProps = {
  label: "posts.latest",
  company: null,
  page: 1,
  inserts : null
}

export default WidgetPosts