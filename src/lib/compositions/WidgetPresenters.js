import React from 'react';

import Wrapper from '../components/Wrapper'
import People from '../components/People'

import {useSettings, useDatasource, filterFuncFromArr} from '../helpers'

const defaultProps = {

    wrapperProps: {
        label : "presenters.list_all",
        secondaryLabel : "presenters.list_description",
    },
    links : [],
    limit : 100,
    filter: [
        ["avatar", "http", "contains"],
        ["cname2", 2, "length"],
        ["presenter", 2, "length"]
    ],
    link : false,
    logotype : true,
    bio : false
}


const WidgetPresenters = ({setting, ...props}) => {


    const settings = useSettings(setting)
    const {wrapperProps, limit, filter, link, bio} = Object.assign({}, defaultProps, settings, props)

    const {data} = useDatasource({
        data: {
            resource: "presenters",
            filters: {
                filter: filterFuncFromArr(filter),
                limit: limit
            }
        }
    })

    return (<Wrapper {...wrapperProps}>
    <People 
        setting={setting}
        data={data}
        link={link} 
        text={ bio ? undefined : (item) => "" }
    />
    </Wrapper>)
}

export default WidgetPresenters