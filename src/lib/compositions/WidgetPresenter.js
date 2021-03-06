import React from 'react';

import { MyHead as Head } from '../next';
import Divider from '@material-ui/core/Divider';
import _get from 'lodash/get';

import {
    MyTypography as Typography,
    TwoColsLayout as Section,
    Wrapper,
    Presentation,
    Presenter as PresenterName,
    Sharer,
    MyAvatar as Avatar,
    ProfileLogotype
  } from '../components';


import Presenters from '../datasources/Presenters'
import { getPresenterOgImage, getSpeakerName } from '../helpers';


const getSpeakerAvatar = (speaker) => _get(speaker, 'avatar');


const WidgetPresenter = ({id, asPath, ...rest}) => (


    <Presenters id={id}>{

        (filtered, all, record) => {
                    
            return (

            <React.Fragment>

            <Head
            image={getPresenterOgImage(record, 'ebe5_template_en')}
            url={asPath}
            titleLabel={['presenters.opengraph.title', { name : getSpeakerName(record) }]}
            descriptionLabel={[
            'presenters.opengraph.description',
            {
                fname: _get(record, 'fname'),
                cname2: _get(record, 'cname2'),
                presentation_title: _get(record, 'presentation_title')
            }
            ]}
            />

            <Wrapper first={true} {...rest}>
            <Section
            leftSize={5}
            left={
            <div
            style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 20
            }}
            >
            <Avatar src={getSpeakerAvatar(record)} minimal={false} />

            <ProfileLogotype data={record} />

            </div>
            }
            leftCentered={true}
            right={
            <div>
            <Presentation
            title={record.presentation_title}
            description={record.presentation_description}
            />

            <Divider />

            <PresenterName data={record} />

            <Sharer url={asPath} />
            </div>
            }
            />
            </Wrapper>

            </React.Fragment>
        )
    }

    }</Presenters>

   
)

export default WidgetPresenter

