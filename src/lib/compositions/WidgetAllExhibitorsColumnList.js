
import React from 'react';

import Companies from '../datasources/Companies'
import ColumnList from '../components/ColumnList'
import KeywordSelect from '../components/KeywordSelect'
import {Centered} from '../components/MyLayouts'
import MyTypography from '../components/MyTypography'
import Wrapper from '../components/Wrapper'
 

const WidgetAllExhibitorsColumnList = (props) => (

    <Wrapper label="exhibitors.list_full" color="#ffffff" {...props}>

    <Companies columns={true} sort='profile.name'>
      {(exhibitors, keywords) => 
        
    <React.Fragment>
    {
      
      keywords && keywords.length ?

      (<Centered style={{marginTop: 80}}>

      <MyTypography label="exhibitors.list.filter_title" template="SUBH2CH" />
      <KeywordSelect keywords={keywords} />

      </Centered>) : null

    }

    

    <ColumnList data={exhibitors} />

    </React.Fragment>
      
       }
    </Companies>

    </Wrapper>


)

WidgetAllExhibitorsColumnList.defaultProps = {


}

export default WidgetAllExhibitorsColumnList
