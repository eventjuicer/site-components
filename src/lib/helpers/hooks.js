
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {resourceFetchSuccess, setUserToken} from '../components/redux/actions'
import {getUserByToken} from './api'
import get from 'lodash/get'
import { useRouter } from 'next/router'

export const useUserData = () => {

    const [updates, setUpdates] = useState(0);
    const token = useSelector(state => state.app.token)
    const currentUser = useSelector(state => state.resources.currentUser)
    const transactions = useSelector(state => state.transactions.forms)

    const filteredTransactions = transactions.filter(item => item.action == "profile_updated")
    const settings = useSelector(state => state.settings)
    const dispatch = useDispatch();

    useEffect(()=>{

        const api = get(settings, "system.service_api")

        const fetchTokenAndSetUser = async () => {
            const data = await getUserByToken(api, token)
            dispatch(resourceFetchSuccess("currentUser", data));
        }
        
        if(api &&  (updates != filteredTransactions || !currentUser || !("token" in currentUser) || currentUser.token != token)){
            fetchTokenAndSetUser();
            setUpdates(updates+1);
        }
      
    }, [token, updates])

    return currentUser;
    
}

export const useToken = (token, target = "/account") => {

    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(()=>{
    
        if(token){
            dispatch(setUserToken(token))
            router.push(target)
        }
    })
}
