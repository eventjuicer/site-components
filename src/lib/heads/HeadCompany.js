import React from 'react'
import { MyHead } from '../next';
//import Companies from '../datasources/Companies'
import SingleRecord from '../datasources/SingleRecord'
import Settings from '../datasources/Settings'

import {
    getCompanyProfileInfo
} from '../helpers/data';
  
  
 const HeadCompany = ({id, slug, path, ogTemplate, defaultLang, children}) => (
    <Settings>{(get) => (
        <SingleRecord endpoint="companies" id={id} slug={slug}>{(record) => (
            <MyHead
                image={ getCompanyProfileInfo(record, 'og_image') }
                url={`${path}/${slug}`}
                titleLabel={[
                  'companies.opengraph.title',
                  { name: getCompanyProfileInfo(record, 'name') }
                ]}>{children}</MyHead>
        )}</SingleRecord>
    )}</Settings>
   
)

HeadCompany.defaultProps = {
    path : "/exhibitors",
    id: null,
    slug: null,
    defaultLang: "en"
}

export default HeadCompany;