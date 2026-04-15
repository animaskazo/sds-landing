import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: 'Super Digital Solutions',
    description: 'Super Digital Solutions es una empresa de desarrollo de software con sede en Chile, especializada en la creación de productos digitales de alta calidad.',
    appleWebApp: {
        title: 'Super Digital Solutions',
    },
};

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
