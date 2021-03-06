
import React from 'react';

import Exhibitors from '../datasources/Exhibitors'
import ColumnList from '../components/ColumnList'
import KeywordSelect from '../components/KeywordSelect'
import {Centered} from '../components/MyLayouts'
import MyTypography from '../components/MyTypography'
import Wrapper from '../components/Wrapper'
 

const WidgetExhibitorsColumnList = (props) => (

    <Wrapper label="exhibitors.list_full" color="#ffffff" {...props}>

    <Exhibitors columns={true} sort='profile.name'>
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
    </Exhibitors>

    </Wrapper>


)

WidgetExhibitorsColumnList.defaultProps = {


}

export default WidgetExhibitorsColumnList
