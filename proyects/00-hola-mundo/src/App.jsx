import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <div className='section-card'>
        < TwitterFollowCard userName="kikobeats" name="Enrique Prueba" />
        < TwitterFollowCard userName="elonmusk" name="Elon Musk" />
        < TwitterFollowCard userName="casey" name="Casey Prueba" />
        </div>
    )
}