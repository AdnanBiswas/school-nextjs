import { useRouter } from 'next/router'
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import ListBox from '../../component/ListBox';

const EachNewsEvent = () => {
  const router = useRouter()
  const { eachNewsEvent } = router.query
  console.log('eachNewsEvent=====',eachNewsEvent);
  
  return (
    <>
        <Header />
        <Navbar />
        <div className="pageBG">
            <div className="container">
                <div className="newspage">
                    <h2>News Event : {eachNewsEvent}</h2>
                    <p>News subtitle will be placed here</p>
                    <div className="row">
                        <section className="col-md-8">
                        <iframe src="/dummy.pdf" width="100%" height="800px"> 
                        </iframe>
                        </section>
                        <aside className="sidenotice col-md-4">
                            <ListBox />
                        </aside>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
    </>
)
}

export default EachNewsEvent