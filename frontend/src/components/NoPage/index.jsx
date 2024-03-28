import styles from './style.css'
import NotFoundImage from '../../assets/imgs/unnamed.png'

const NoPage = () => {
    const btnSize = { "width":'150px',  "height":'40px' }
    return (
        <div style={styles}>
            <div className='no-page'>
                <div>
                    <h1>404 Not Found</h1>
                    <p>Home.Pages. <span className='not-found-text'>404 Not Found</span></p>
                </div>
                <img 
                    src={NotFoundImage} alt="Not Found" 
                    width={600} height={500}
                />
                <a style={btnSize} className='danger-btn' href="/">
                    Back To Home
                </a>
                <img className='brands-img' src={NotFoundImage} alt="Not Found" />
            </div>
        </div>
    )
};

export default NoPage;