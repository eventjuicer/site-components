

import PropTypes from 'prop-types';
import { get } from 'lodash';

import dynamic from 'next/dynamic';
import { MyHead } from '../next';

const CompanyBookingmap = dynamic(import('../compositions/CompanyBookingmap'));

import {
  getCompanyAltOgImage,
  getCompanyProfileInfo,
} from '../helpers/data';

import SingleRecord from "../datasources/SingleRecord"

import Wrapper from '../components/Wrapper'
import CompanyData from '../components/CompanyData'
import CompanyLogotype from '../components/CompanyLogotype'
import KeywordSelect from '../components/KeywordSelect'
import {TwoColsLayout, Centered} from '../components/MyLayouts'

const Company = ({id, asPath}) => (

  <SingleRecord endpoint="companies" id={id}>
  {
  (company) =>
  <React.Fragment>
  <MyHead
      image={getCompanyAltOgImage(company, asPath)}
      url={asPath}
      titleLabel={[
        'companies.opengraph.title',
        { name: getCompanyProfileInfo(company, 'name') }
      ]}
    />

    <Wrapper label="">

    <TwoColsLayout
      leftSize={5}
      left={<CompanyLogotype company={company} />}
      leftCentered={true}
      right={

      <div style={{marginTop: 50}}>

        <Centered>
         <KeywordSelect keywords={get(company, 'profile.keywords', [])} />
        </Centered>

        <div style={{marginTop: 10}}>
          <CompanyData id={id} endpoint="companies" />
        </div>
      
      </div>  
    }
    />

    </Wrapper>

    <CompanyBookingmap company={company} />
    
    </React.Fragment>
}
</SingleRecord>)


export default Company
