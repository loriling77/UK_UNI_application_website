
import '../index.css'
import data from '../data/ukTop50.json'
import { Link } from 'react-router-dom'


export default function UniLists() {
    return (
        <div style={{ width: '80%', paddingRight: '20px' }}>
            <h1>UK Universities</h1>
            <div className="hide-scrollbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', overflow: 'scroll', height: '100vh' }}>
                {data.map((university) => (
                    <div key={university.name} style={{ display: 'flex', flexDirection: 'column' }}>
                        <img style={{ width: '140px', height: '120px' }} src={university.image} alt={university.name} />
                        <a href={university.website} target="_blank" rel="noopener noreferrer">
                            {university.name}
                        </a>
                        <Link to={`/detail/${encodeURIComponent(university.name)}`} style={{ marginTop: 'auto', textAlign: 'center', padding: '8px 0', background: '#e94560', color: '#fff', borderRadius: '4px', textDecoration: 'none' }}>
                            Go to apply
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
