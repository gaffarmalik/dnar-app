import { ReactElement } from 'react';
import '../../../styles/App.scss';
import useEvent from './useEvent';
import Event from './Event';
import Loader from '../../../components/Loader';


function Events(): ReactElement {
    const [events] = useEvent();
    return (

        <aside className="right">
            <div className='news-container'>
                <h3>Events</h3>
                {
                    events.length === 0 ?
                        <Loader w={100} h={100} />
                        :
                        events.map((v: any, i: number) => (
                            <Event key={i} {...v} />
                        ))}
            </div>
        </aside>
    );
}

export default Events;
