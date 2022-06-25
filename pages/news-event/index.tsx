import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import NoticeBoardlist from '../../component/NoticeBoardList';
import ListBox from '../../component/ListBox';
import Pagination from '../../component/Pagination';
import MenuBox from '../../component/MenuBox';

const newsevent = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="pageBG">
                <div className="container">
                    <div className="newspage">
                        <h2>নোটিশ বোর্ড</h2>
                        <p>সাম্প্রতিক স্কুলের নোটিশ সমূহ</p>
                        <div className="row">
                            <section className="col-md-8">
                                <NoticeBoardlist />
                                <Pagination/>
                            </section>
                            <aside className="sidenotice col-md-4">
                                <ListBox />
                                <MenuBox/>
                            </aside>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default newsevent
