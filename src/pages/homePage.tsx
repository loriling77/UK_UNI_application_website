import React from 'react'
import Navigation from '../components/navigation'
import Rankings from '../components/rankings'
import UniLists from '../components/uniLists'

export default function HomePage() {
    return (<>
        <div style={{ overflow: 'auto' }}>


            <Navigation />
            {/* main content */}
            <div style={{ padding: '20px', display: 'flex' }}>
                {/* uni lists */}
                <UniLists></UniLists>
                {/* QS rankings */}
                <Rankings></Rankings>

            </div>
        </div>
    </>

    )
}
