import React from 'react';

import GridBenefits from '../components/GridBenefits'
import Wrapper from '../components/Wrapper'
import Settings from '../datasources/Settings'


const WidgetVisitorBenefits = ({benefits, ...rest}) => (
    <Wrapper {...rest}>
       <Settings name="visitor">{
           ({benefits}) => <GridBenefits baseLabel="visitors.benefits" items={benefits} />
       }</Settings>
      
    </Wrapper>
)

WidgetVisitorBenefits.defaultProps = {
    benefits : []
}

export default WidgetVisitorBenefits
