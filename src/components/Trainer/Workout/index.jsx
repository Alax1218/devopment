import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Completed from './Completed'
import Remaining from './Remaining'
import axios from '../../../store/axios-secure'
import Loader from '../../Common/Loader'
import InternalServerErrorPage from '../../Common/ErrorPage/InternalServerErrorPage'
import './index.scss'
import ClientContainer from '../Dashboard/ClientView/ClientContainer'

const Workout = () => {
    const location = useLocation()
    const history = useHistory()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [clientId, setClientId] = useState(0)
    const [client, setClient] = useState({})
    const [latestCompletedSession, setLatestCompletedSession] = useState(null)

    const setClientDetails = () => {
        setClient(['No program', [location.state]])
        // setLoading(true)
        // try {
        //     const response = await axios.get(
        //         `workout/trainer/suggest/client-list/${clientId}`,
        //     )
        //     setClient(response?.data)
        //     setError(false)
        //     setLoading(false)
        // } catch (error) {
        //     if (error?.response?.status === 400) {
        //         history.push('/')
        //     }
        //     setError('Unable fetch client details, please try again later')
        //     setLoading(false)
        // }
    }

    useEffect(() => {
        const clientId = location.pathname.split('/')[2]
        setClientId(clientId)
        setClientDetails()
    }, [])

    return loading || clientId === 0 ? (
        <Loader />
    ) : error ? (
        <InternalServerErrorPage />
    ) : (
        <div className="workout container-xl pb-5">
            <ClientContainer
                showAccordian={false}
                showBackButton={true}
                showContainer={false}
                clientList={[client]}
                showWorkoutButton={false}
                showLastWorkout={false}
            />
            <Completed
                clientId={clientId}
                client={location.state}
                setLatestCompletedSession={setLatestCompletedSession}
            />
            <Remaining
                clientId={clientId}
                latestCompletedSession={latestCompletedSession}
            />
        </div>
    )
}

export default Workout
