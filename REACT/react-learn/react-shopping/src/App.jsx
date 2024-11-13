import Footer from "./components/footer";
import Header from "./components/Header";
import CategorySection from './components/CategorySection';
import ProductSection from "./components/ProductSection";



export default function App() {
  const title = "Product Categories";
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <>
      <Header />
      <CategorySection />
      <ProductSection/>
      <Footer />
    </>
  );
}
