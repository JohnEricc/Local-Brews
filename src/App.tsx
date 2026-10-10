import { useCallback, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Amenities from "./components/Amenities";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const navigateTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleCategorySelect = useCallback((key: string) => {
    setActiveCategory(key);
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const goMenu = useCallback(() => navigateTo("menu"), [navigateTo]);

  // Memoize composed sections' props so a keystroke in the top search
  // does not force Navbar → Hero → About → Footer to re-render.
  const navbarProps = useMemo(
    () => ({
      search,
      onSearchChange: handleSearchChange,
      onCategorySelect: handleCategorySelect,
      activeCategory,
      onNavigate: navigateTo,
    }),
    [search, handleSearchChange, handleCategorySelect, activeCategory, navigateTo]
  );

  return (
    <div className="min-h-screen bg-coffee-950 text-cream-100">
      <Navbar {...navbarProps} />
      <main>
        <Hero onExploreMenu={goMenu} />
        <MenuSection
          search={search}
          onSearchChange={handleSearchChange}
          activeCategory={activeCategory}
          onCategoryChange={handleCategorySelect}
        />
        <Amenities />
        <About />
      </main>
      <Footer onNavigate={navigateTo} onCategorySelect={handleCategorySelect} />
    </div>
  );
}