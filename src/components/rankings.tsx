import React from 'react'
import '../index.css'
import dataWorld from '../data/qs2026World.json'
import dataUK from '../data/qs2026UK.json'


export default function Rankings() {
    const [rankingType, setRankingType] = React.useState('world')
    const data = rankingType === 'world' ? dataWorld : dataUK
    return (
        <div>
            <select aria-label='2026 QS Rankings' value={rankingType} onChange={(e) => setRankingType(e.target.value)}>
                <option value="world">2026 QS World Rankings</option>
                <option value="uk">2026 QS UK Rankings</option>
            </select>

            <ul className="hide-scrollbar" style={{ overflow: 'scroll', height: '100vh' }}>
                {data.map((university) => (
                    rankingType === 'world' ? (
                        <li key={university.rank}>
                            {university.rank}. {university.name} ({university.country})
                        </li>
                    ) : (
                        <li key={university.rank}>
                            {university.rank}. {university.name}
                        </li>
                    )
                ))}
            </ul>
        </div>
    )
}
