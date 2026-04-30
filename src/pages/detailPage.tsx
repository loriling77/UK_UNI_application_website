import React from 'react'
import Navigation from '../components/navigation'
import { useParams } from 'react-router-dom'

export default function detailPage() {
    const { universityName } = useParams()

    return (
        <div>
            <Navigation />
            <div>detailPage: {universityName}</div>
        </div>
    )
}
