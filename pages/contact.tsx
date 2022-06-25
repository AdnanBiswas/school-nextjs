import Header from '../component/Header';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Menubox from '../component/MenuBox';

const contact = () => {
    return (
        <>
            <Header />
            <Navbar />

            <div className="container">
                <h2 className="section-cont paraHeader"> যোগাযোগ </h2>
                <div className="row">
                <div className="contact-cont-left col-8">
                    <div className="contact-cont-left-top">
                        <div className="contact-cont-left-top-left">
                            <h3 className="contact-cont-left-top-left-title"> যোগাযোগের ঠিকানা </h3>
                            <p className="contact-cont-left-top-left-para"> শিবগঞ্জ, সত্রাজিতপুর, <br/>
                                চাঁপাই নবাবগঞ্জ, রাজশাহী- ১২০৭</p>
                            <p>01740933864</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <Menubox/>
                </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default contact;