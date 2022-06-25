import { useRouter } from 'next/router'
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
// import ListBox from '../../component/ListBox';

const PageSlug = () => {
    const router = useRouter()
    const { pageSlug } = router.query
    console.log('pageSlug=====', pageSlug);

    return (
        <>
            <Header />
            <Navbar />
            <div className="pageBG">
                <div className="container">
                    <div className="newspage">
                        <h2>{pageSlug}</h2>
                    </div>
                    <p style={{ textAlign: 'center', fontSize: '22px' }}>Coming soon</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PageSlug