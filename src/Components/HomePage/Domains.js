import './domains.css'
import { FaBalanceScale,FaBuilding, FaUser, FaChartBar, FaCannabis, FaGavel } from 'react-icons/fa';


const Domains = () => {
    return ( 
        <div className='domains'>
            <h1>our domains</h1>
            <div className='ourDomains'>
                <div className='domain-item'>
                    <div className='title' >
                        <FaGavel className='domain-icon' />
                        <h4>criminal law</h4>
                    </div>
                    <p>Criminal law attorneys defend individuals against charges, ensuring fair trials and protecting rights, with expertise in navigating the complexities of the legal system.</p>
                </div>
                <div className='domain-item'>
                    <div className='title' >
                    <FaBalanceScale className='domain-icon' />
                        <h4>family law</h4>
                    </div>
                    <p>Specializing in family matters, family law practitioners guide clients through divorce, child custody, and adoption cases, prioritizing resolutions that uphold the well-being of the family.</p>
                </div>
                <div className='domain-item'>
                    <div className='title' >
                        <FaBuilding className='domain-icon'/>
                        <h4>real estate law</h4>
                    </div>
                    <p>Real estate lawyers facilitate property transactions, addressing legal intricacies, resolving disputes, and ensuring the lawful transfer of ownership in residential and commercial real estate deals.</p>
                </div>
                <div className='domain-item'>
                    <div className='title' >
                        <FaUser className='domain-icon'/>
                        <h4>personal law</h4>
                     </div>
                     <p>Personal law attorneys advocate for justice in cases of personal injury, medical malpractice, and insurance claims, providing legal representation to secure fair compensation for clients harmed by others.</p>
                </div>
                 <div className='domain-item'>
                    <div className='title' >
                        <FaChartBar className='domain-icon'/>
                        <h4>financial law</h4>
                    </div>
                    <p>Experts in financial law navigate regulations governing transactions and institutions, offering legal advice on securities, banking, and corporate governance to ensure compliance and financial stability.</p>
                </div>
                 <div className='domain-item'>
                    <div className='title' >
                        <FaCannabis className='domain-icon' />

                        <h4>drug offence</h4>
                     </div>
                    <p>Specializing in drug-related legal matters, attorneys provide comprehensive defense, addressing issues such as search and seizure, constitutional rights, and advocating for alternatives to incarceration.</p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Domains;