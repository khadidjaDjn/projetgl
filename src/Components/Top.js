import './top.css'
import LawyerCard from './LawyerCard';

const TOP = () => {
    return ( 
        <div className='topLaywers'>
            <h1>top lawyers</h1>
            <div className='cards'>
                <LawyerCard></LawyerCard>
                <LawyerCard></LawyerCard>
                <LawyerCard></LawyerCard>
            </div>
        </div>
     );
}
 
export default TOP;