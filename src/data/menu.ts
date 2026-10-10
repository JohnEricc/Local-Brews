export type CategoryKey =
  | "all"
  | "iced-coffee"
  | "iced-blended"
  | "hot-coffee"
  | "food"
  | "non-coffee"
  | "cream-based"
  | "pastries"
  | "add-ons";

export interface MenuProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Exclude<CategoryKey, "all">;
  badge?: string;
  size?: string;
  image?: string;
}

export interface Category {
  key: CategoryKey;
  label: string;
  short?: string;
}

export const categories: Category[] = [
  { key: "all", label: "All", short: "All" },
  { key: "hot-coffee", label: "Hot Coffee", short: "Hot Coffee" },
  { key: "iced-coffee", label: "Iced Coffee", short: "Iced Coffee" },
  { key: "iced-blended", label: "Iced Blended", short: "Iced Blended" },
  { key: "cream-based", label: "Cream Based", short: "Cream Based" },
  { key: "non-coffee", label: "Non-Coffee Latte", short: "Non-Coffee" },
  { key: "add-ons", label: "Add-ons", short: "Add-ons" },
  { key: "food", label: "Food", short: "Food" },
  { key: "pastries", label: "Pastries", short: "Pastries" },
];

export const products: MenuProduct[] = [
  // ICED COFFEE (Flat ₱129)
  {
    id: "iced-americano",
    name: "Americano",
    description:
      "Double shot espresso pulled over ice, finished with cold filtered water. Crisp, clean, beautifully bold.",
    price: 129,
    category: "iced-coffee",
    badge: "ESPRESSO",
    size: "16oz - 22oz",
    image: "/Images/Iced Coffee/(Iced) Americano.webp",
  },
  {
    id: "iced-latte",
    name: "Latte",
    description:
      "Silky cold fresh milk balanced with rich house espresso over ice.",
    price: 129,
    category: "iced-coffee",
    badge: "CLASSIC",
    size: "16oz - 22oz",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=a%20layered%20iced%20latte%20in%20a%20clear%20glass%20with%20creamy%20milk%20and%20espresso%20over%20ice%2C%20dark%20cafe%20background%2C%20moody%20photography&image_size=square",
  },
  {
    id: "iced-local-signature",
    name: "Local Brew Signature Latte",
    description:
      "Our proprietary house blend espresso layered over sweetened creamy milk.",
    price: 129,
    category: "iced-coffee",
    badge: "BEST SELLER",
    size: "16oz - 22oz",
    image: "/Images/Iced Coffee/(Iced) Local Brew Signature Latte.webp",
  },
  {
    id: "iced-spanish-latte",
    name: "Spanish Latte",
    description:
      "Sweet condensed milk meets rich espresso and fresh milk over ice. Nostalgic, creamy, and smooth.",
    price: 129,
    category: "iced-coffee",
    badge: "POPULAR",
    size: "16oz - 22oz",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=a%20spanish%20latte%20in%20a%20glass%20with%20swirled%20milk%20and%20espresso%20layers%20over%20ice%2C%20warm%20dark%20cafe%20tones&image_size=square",
  },
  {
    id: "iced-caramel-macchiato",
    name: "Caramel Macchiato",
    description:
      "House espresso, chilled milk, and buttery caramel drizzle over ice.",
    price: 129,
    category: "iced-coffee",
    badge: "CROWD FAVORITE",
    size: "16oz - 22oz",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=a%20caramel%20iced%20latte%20with%20drizzled%20caramel%20and%20ice%20in%20a%20glass%2C%20dark%20moody%20cafe%20photography&image_size=square",
  },
  {
    id: "iced-mocha-latte",
    name: "Mocha Latte",
    description:
      "Decadent chocolate sauce blended with espresso and cold milk.",
    price: 129,
    category: "iced-coffee",
    badge: "SWEET",
    size: "16oz - 22oz",
    image: "/Images/Iced Coffee/(Iced) Mocha Latte.webp",
  },
  {
    id: "iced-hazelnut-latte",
    name: "Hazelnut Latte",
    description:
      "Aromatic roasted hazelnut syrup stirred with bold espresso and creamy milk.",
    price: 129,
    category: "iced-coffee",
    badge: "NUTTY",
    size: "16oz - 22oz",
    image: "/Images/Iced Coffee/(Iced) Hazelnut Latte.webp",
  },
  {
    id: "iced-vanilla-latte",
    name: "Vanilla Latte",
    description:
      "Smooth French vanilla syrup blended with chilled espresso and milk.",
    price: 129,
    category: "iced-coffee",
    badge: "SMOOTH",
    size: "16oz - 22oz",
    image: "/Images/Iced Coffee/(Iced) Vanilla Latte.webp",
  },
  {
    id: "iced-salty-foam-latte",
    name: "Salty Foam Latte",
    description:
      "Iced latte crowned with a layer of velvety, savory cream cheese cold foam.",
    price: 129,
    category: "iced-coffee",
    badge: "SIGNATURE",
    size: "16oz - 22oz",
    image: "/Images/Iced Coffee/(Iced) Salty Foam Latte.webp",
  },
  {
    id: "iced-white-mocha-crumble",
    name: "White Mocha Crumble",
    description:
      "Velvety white chocolate mocha topped with crunchy biscuit crumbles.",
    price: 129,
    category: "iced-coffee",
    badge: "INDULGENT",
    size: "16oz - 22oz",
    image: "/Images/Iced Coffee/(Iced) White Mocha Crumble.webp",
  },
  {
    id: "iced-sweetened-nut-crumble",
    name: "Sweetened Nut Crumble",
    description:
      "Rich nutty iced latte finished with sweet roasted crushed praline bits.",
    price: 129,
    category: "iced-coffee",
    badge: "SPECIALTY",
    size: "16oz - 22oz",
    image: "/Images/Iced Coffee/(Iced) Sweetened Nut Crumble.webp",
  },
  {
    id: "iced-canella-latte",
    name: "Canella Latte",
    description:
      "Fragrant cinnamon-infused spiced latte over ice with a smooth finish.",
    price: 129,
    category: "iced-coffee",
    badge: "SPICED",
    size: "16oz - 22oz",
    image: "/Images/Iced Coffee/(Iced) Canella Latte.webp",
  },
  {
    id: "iced-black-forest-latte",
    name: "Black Forest Latte",
    description:
      "Dark cocoa notes paired with sweet cherry undertones and chilled espresso.",
    price: 129,
    category: "iced-coffee",
    badge: "RICH",
    size: "16oz - 22oz",
    image: "/Images/Iced Coffee/(Iced) Black Forest Latte.webp",
  },
  {
    id: "iced-peppermint-mocha",
    name: "Peppermint Mocha Latte",
    description:
      "Cool peppermint syrup combined with dark mocha and chilled espresso.",
    price: 129,
    category: "iced-coffee",
    badge: "REFRESHING",
    size: "16oz - 22oz",
    image: "/Images/Iced Coffee/(Iced) Peppermint Mocha Latte.webp",
  },
  {
    id: "iced-matcha-latte",
    name: "Matcha Latte",
    description:
      "Ceremonial-grade Japanese green tea whisked with cold milk over ice.",
    price: 129,
    category: "iced-coffee",
    badge: "GREEN",
    size: "16oz - 22oz",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=a%20vibrant%20matcha%20iced%20latte%20with%20green%20and%20white%20layers%20over%20ice%20in%20a%20glass%2C%20dark%20cafe%20photography&image_size=square",
  },

  // ICED BLENDED (Flat ₱179)
  {
    id: "blended-local-signature",
    name: "Local Brew Signature",
    description:
      "Our signature espresso blend whipped to icy perfection with milk, topped with rich whipped cream and signature drizzle.",
    price: 179,
    category: "iced-blended",
    badge: "HOUSE FAVORITE",
    size: "22oz",
    image: "/Images/Iced Blended/Local Brew Signature (Iced Blended).webp",
  },
  {
    id: "blended-cookies-cream",
    name: "Cookies & Cream",
    description:
      "Rich cream base whipped with crushed dark chocolate cookies, finished with a dome of whipped cream and Oreo crumbles.",
    price: 179,
    category: "iced-blended",
    badge: "DECADENT",
    size: "22oz",
    image: "/Images/Iced Blended/Cookies & Cream (Iced Blended).webp",
  },
  {
    id: "blended-triple-mocha",
    name: "Triple Mocha",
    description:
      "Decadent dark chocolate, bold espresso, milk, and ice whipped together, topped with velvety whipped cream and chocolate fudge drizzle.",
    price: 179,
    category: "iced-blended",
    badge: "POPULAR",
    size: "22oz",
    image: "/Images/Iced Blended/Triple Mocha (Iced Blended).webp",
  },
  {
    id: "blended-caramel-macchiato",
    name: "Caramel Macchiato",
    description:
      "Smooth espresso blended over ice with buttery caramel syrup, finished with whipped cream and golden caramel drizzle.",
    price: 179,
    category: "iced-blended",
    badge: "SWEET",
    size: "22oz",
    image: "/Images/Iced Blended/Caramel Macchiato (Iced Blended).webp",
  },
  {
    id: "blended-java-chip",
    name: "Java Chip",
    description:
      "Bold coffee and milk blended with crunchy chocolate chips, crowned with whipped cream and dark mocha drizzle.",
    price: 179,
    category: "iced-blended",
    badge: "BLENDED",
    size: "22oz",
    image: "/Images/Iced Blended/Java Chip (Iced Blended).webp",
  },
  {
    id: "blended-matcha",
    name: "Matcha",
    description:
      "Premium ceremonial-grade matcha blended to icy smoothness with creamy milk, topped with whipped cream and matcha dust.",
    price: 179,
    category: "iced-blended",
    badge: "GREEN TEA",
    size: "22oz",
    image: "/Images/Iced Blended/Matcha (Iced Blended).webp",
  },

  // HOT COFFEE (Flat ₱89)
  {
    id: "hot-americano",
    name: "Café Americano",
    description:
      "Double shot of rich espresso diluted with hot water. Straightforward, aromatic, and full-bodied.",
    price: 89,
    category: "hot-coffee",
    badge: "CLASSIC",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=a%20hot%20americano%20in%20a%20black%20ceramic%20cup%20with%20crema%20and%20gentle%20steam%2C%20dark%20cafe%20photography&image_size=square",
  },
  {
    id: "hot-latte",
    name: "Café Latte",
    description:
      "Our house espresso with lightly steamed, silky milk and a thin layer of microfoam.",
    price: 89,
    category: "hot-coffee",
    badge: "BARISTA PICK",
    image: "/Images/Hot Coffee/(Hot) Cafe Latte.webp",
  },
  {
    id: "hot-cappuccino",
    name: "Cappuccino",
    description:
      "Equal parts espresso, steamed milk, and airy velvety foam. Classic, comforting, and aromatic.",
    price: 89,
    category: "hot-coffee",
    badge: "TRADITIONAL",
    image: "/Images/Hot Coffee/(Hot) Cappuccino.webp",
  },
  {
    id: "hot-caramel-macchiato",
    name: "Caramel Macchiato",
    description:
      "Velvety steamed milk marked with espresso and ribbons of warm caramel sauce.",
    price: 89,
    category: "hot-coffee",
    badge: "SWEET",
    image: "/Images/Hot Coffee/(Hot) Caramel Macchiato.webp",
  },
  {
    id: "hot-spanish-latte",
    name: "Spanish Latte",
    description:
      "Warm condensed milk blended with freshly pulled espresso and steamed whole milk.",
    price: 89,
    category: "hot-coffee",
    badge: "CREAMY",
    image: "/Images/Hot Coffee/(Hot) Spanish Latte.webp",
  },
  {
    id: "hot-local-signature",
    name: "Local Signature",
    description:
      "Our barista special warm brew with subtle sweetness and balanced espresso strength.",
    price: 89,
    category: "hot-coffee",
    badge: "HOUSE SPECIAL",
    image: "/Images/Hot Coffee/(Hot) Local Signature.webp",
  },
  {
    id: "hot-white-mocha",
    name: "White Mocha Latte",
    description:
      "Decadent white chocolate ganache melted into steaming espresso and microfoam milk.",
    price: 89,
    category: "hot-coffee",
    badge: "INDULGENT",
    image: "/Images/Hot Coffee/(Hot) White Mocha Latte.webp",
  },
  {
    id: "hot-hazelnut-latte",
    name: "Hazelnut Latte",
    description:
      "Toasted hazelnut aroma combined with smooth espresso and steamed milk.",
    price: 89,
    category: "hot-coffee",
    badge: "NUTTY",
    image: "/Images/Hot Coffee/(Hot) Hazelnut Latte.webp",
  },
  {
    id: "hot-vanilla-latte",
    name: "Vanilla Latte",
    description:
      "Warm, fragrant vanilla syrup blended with steamed milk and bold espresso.",
    price: 89,
    category: "hot-coffee",
    badge: "SMOOTH",
    image: "/Images/Hot Coffee/(Hot) Vanilla Latte.webp",
  },
  {
    id: "hot-mocha-latte",
    name: "Mocha Latte",
    description:
      "Rich dark cocoa and freshly pulled espresso infused into steamed milk.",
    price: 89,
    category: "hot-coffee",
    badge: "CHOCOLATE",
    image: "/Images/Hot Coffee/(Hot) Mocha Latte.webp",
  },
  {
    id: "hot-matcha-latte",
    name: "Matcha Latte",
    description:
      "Warm, frothy ceremonial matcha combined with velvety steamed milk.",
    price: 89,
    category: "hot-coffee",
    badge: "GREEN",
    image: "/Images/Hot Coffee/(Hot) Matcha Latte.webp",
  },
  {
    id: "hot-peppermint-mocha",
    name: "Peppermint Mocha Latte",
    description:
      "Warm mocha infused with cooling peppermint essence for a comforting finish.",
    price: 89,
    category: "hot-coffee",
    badge: "WARMING",
    image: "/Images/Hot Coffee/(Hot) Peppermint Mocha Latte.webp",
  },
  {
    id: "hot-choco",
    name: "Choco",
    description:
      "Rich, thick Dutch hot chocolate made with steamed whole milk.",
    price: 89,
    category: "hot-coffee",
    badge: "KID FRIENDLY",
    image: "/Images/Hot Coffee/(Hot) Choco.webp",
  },

  // FOOD (Utak POS Verified)
  {
    id: "food-tapsilog",
    name: "Tapsilog",
    description:
      "Tender marinated beef tapa, garlic fried rice, and a sunny-side egg. A Filipino all-day classic.",
    price: 199,
    category: "food",
    badge: "LOCAL",
    image: "/Images/Food/(Food) Tapsilog.webp",
  },
  {
    id: "food-tocilog",
    name: "Tocilog",
    description:
      "Sweet, caramelized pork tocino served with fragrant garlic sinangag and fried egg.",
    price: 189,
    category: "food",
    badge: "LOCAL",
    image: "/Images/Food/(Food) Tocilog.webp",
  },
  {
    id: "food-bangsilog",
    name: "Bangsilog",
    description:
      "Crispy fried marinated boneless bangus with garlic fried rice and a sunny-side egg.",
    price: 219,
    category: "food",
    badge: "BEST SELLER",
    image: "/Images/Food/(Food) Bangsilog.webp",
  },
  {
    id: "food-carbonara",
    name: "Carbonara",
    description:
      "Creamy, garlicky pasta tossed with crispy bacon and parmesan cheese. Warm comfort in every bite.",
    price: 169,
    category: "food",
    badge: "BEST SELLER",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=a%20plate%20of%20creamy%20carbonara%20pasta%20with%20parmesan%20and%20crispy%20bacon%2C%20dark%20moody%20food%20photography&image_size=square",
  },
  {
    id: "food-spaghetti",
    name: "Spaghetti",
    description:
      "Classic sweet-style Filipino pasta sauce loaded with ground meat, hotdog slices, and grated cheese.",
    price: 179,
    category: "food",
    badge: "FAVORITE",
    image: "/Images/Food/(Food) Spaghetti.webp",
  },
  {
    id: "food-nachos",
    name: "Nachos",
    description:
      "Crisp tortilla chips loaded with savory beef sauce, melted cheese drizzle, and salsa.",
    price: 189,
    category: "food",
    badge: "SHAREABLE",
    image: "/Images/Food/(Food) Nachos.webp",
  },
  {
    id: "food-waffle",
    name: "Waffle",
    description:
      "Freshly pressed golden waffle served warm with butter and maple syrup.",
    price: 99,
    category: "food",
    badge: "SNACK",
    image: "/Images/Food/(Food) Waffle.webp",
  },
  {
    id: "food-water",
    name: "Bottled Water",
    description: "Purified drinking water 500ml.",
    price: 12,
    category: "food",
    badge: "HYDRATION",
    image: "/Images/Food/(Food) Bottled Water.webp",
  },

  // NON-COFFEE LATTE
  {
    id: "non-coffee-strawberry-latte",
    name: "Strawberry Latte",
    description:
      "Real strawberry purée poured over sweet creamy milk and ice. Refreshing and bright.",
    price: 149,
    category: "non-coffee",
    badge: "FRUITY",
    size: "16oz - 22oz",
    image: "/Images/Non Coffee Latte/(Non Coffee Latte) Strawberry Latte.webp",
  },
  {
    id: "non-coffee-blueberry-latte",
    name: "Blueberry Latte",
    description:
      "Wild blueberry compote swirled with fresh whole milk over ice.",
    price: 149,
    category: "non-coffee",
    badge: "BERRY",
    size: "16oz - 22oz",
    image: "/Images/Non Coffee Latte/(Non Coffee Latte) Blueberry Latte.webp",
  },
  {
    id: "non-coffee-mango-latte",
    name: "Mango Latte",
    description:
      "Sweet ripe Philippine mango nectar layered with velvety chilled milk.",
    price: 149,
    category: "non-coffee",
    badge: "TROPICAL",
    size: "16oz - 22oz",
    image: "/Images/Non Coffee Latte/(Non Coffee Latte) Mango Latte.webp",
  },
  {
    id: "non-coffee-strawberry-matcha",
    name: "Strawberry Matcha Latte",
    description:
      "Ceremonial-grade matcha meets sweet strawberry notes, blended smooth with creamy milk for a vibrant, layered treat.",
    price: 179,
    category: "non-coffee",
    badge: "BEST SELLER",
    size: "16oz - 22oz",
    image: "/Images/Non Coffee Latte/(Non Coffee Latte) Strawberry Matcha Latte.webp",
  },

  // CREAM BASED (Flat ₱179)
  {
    id: "cream-white-java",
    name: "White Java",
    description:
      "Rich white chocolate and cream blend whipped with ice, topped with whipped cream.",
    price: 179,
    category: "cream-based",
    badge: "INDULGENT",
    size: "22oz",
    image: "/Images/Cream based/White Java (Cream Based).webp",
  },
  {
    id: "cream-dark-chocolate",
    name: "Dark Chocolate",
    description:
      "Intense dark Dutch chocolate blended with a smooth ice-cream base and fudge drizzle.",
    price: 179,
    category: "cream-based",
    badge: "RICH",
    size: "22oz",
    image: "/Images/Cream based/Dark Chocolate (Cream Based).webp",
  },
  {
    id: "cream-cheesecake",
    name: "Cheesecake",
    description:
      "Tangy and sweet cheesecake cream base blended to frosty perfection with graham crumble.",
    price: 179,
    category: "cream-based",
    badge: "FAVORITE",
    size: "22oz",
    image: "/Images/Cream based/Cheesecake (Cream Based).webp",
  },
  {
    id: "cream-strawberry",
    name: "Strawberry",
    description:
      "Luscious sweet strawberry cream frappe topped with fluffy whipped cream.",
    price: 179,
    category: "cream-based",
    badge: "FRUITY",
    size: "22oz",
    image: "/Images/Cream based/Strawberry (Cream Based).webp",
  },
  {
    id: "cream-ube",
    name: "Ube",
    description:
      "Authentic purple yam cream blend with rich coconut-milk undertones and whipped cream.",
    price: 179,
    category: "cream-based",
    badge: "LOCAL SPECIAL",
    size: "22oz",
    image: "/Images/Cream based/Ube (Cream Based).webp",
  },

  // PASTRIES (Utak POS Verified)
  {
    id: "pastry-french-croissant",
    name: "French Butter Croissant",
    description:
      "Flaky, golden, and layered with pure French butter. Baked fresh.",
    price: 64,
    category: "pastries",
    badge: "FRESH BAKED",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=a%20golden%20flaky%20butter%20croissant%20on%20a%20dark%20pastry%20board%2C%20dark%20moody%20bakery%20photography&image_size=square",
  },
  {
    id: "pastry-choco-croissant",
    name: "Choco Croissant",
    description:
      "Buttery flaky croissant pastry stuffed with rich Belgian chocolate batons.",
    price: 99,
    category: "pastries",
    badge: "POPULAR",
    image: "/Images/Pastries/(Pastries) Choco Croissant.webp",
  },
  {
    id: "pastry-matcha-croissant",
    name: "Matcha Croissant",
    description:
      "Crisp artisan croissant infused with Japanese matcha cream filling and dust.",
    price: 99,
    category: "pastries",
    badge: "SPECIALTY",
    image: "/Images/Pastries/(Pastries) Matcha Croissant.webp",
  },
  {
    id: "pastry-biscoff-croissant",
    name: "Biscoff Croissant",
    description:
      "Topped with caramelized Lotus Biscoff spread and crunchy biscuit crumbles.",
    price: 119,
    category: "pastries",
    badge: "INDULGENT",
    image: "/Images/Pastries/(Pastries) Biscoff Croissant.webp",
  },
  {
    id: "pastry-croissant-sandwich",
    name: "Croissant Sandwich",
    description:
      "Savory butter croissant stuffed with ham, cheddar cheese, and fresh greens.",
    price: 139,
    category: "pastries",
    badge: "SAVORY",
    image: "/Images/Pastries/(Pastries) Croissant Sandwich.webp",
  },
  {
    id: "pastry-mango-cheesecake",
    name: "Mango Cheesecake",
    description:
      "Velvety New York style cheesecake topped with sweet Philippine mango purée glaze.",
    price: 139,
    category: "pastries",
    badge: "BEST SELLER",
    image: "/Images/Pastries/(Pastries) Mango Cheesecake.webp",
  },
  {
    id: "pastry-blueberry-muffin",
    name: "Blueberry Cream Cheese Muffin",
    description:
      "Soft, tender muffin studded with plump blueberries and a luscious cream cheese core.",
    price: 64,
    category: "pastries",
    badge: "FAVORITE",
    image: "/Images/Pastries/(Pastries) Blueberry Cream Cheese Muffin.webp",
  },
  {
    id: "pastry-coffee-cream-cheese",
    name: "Coffee Cream Cheese",
    description:
      "Aromatic coffee-infused pastry bun with a warm, sweet cream cheese center.",
    price: 89,
    category: "pastries",
    badge: "PAIR WELL",
    image: "/Images/Pastries/(Pastries) Coffee Cream Cheese.webp",
  },

  // ADD-ONS (Utak POS Verified)
  {
    id: "addon-oat-milk",
    name: "Upgrade to Oat Milk",
    description:
      "Creamy barista-grade oat milk swap for a smooth, dairy-free alternative.",
    price: 39,
    category: "add-ons",
    badge: "DAIRY FREE",
    image: "/Images/Add ons/(Add-ons) Upgrade to Oat Milk.webp",
  },
  {
    id: "addon-whipped-cream",
    name: "Whipped Cream",
    description:
      "A generous dollop of freshly whipped cream on top of your drink.",
    price: 35,
    category: "add-ons",
    badge: "POPULAR",
    image: "/Images/Add ons/(Add-ons) Whipped Cream.webp",
  },
  {
    id: "addon-espresso-shot",
    name: "Espresso Shot",
    description:
      "An additional shot of our house espresso for an extra caffeine kick.",
    price: 20,
    category: "add-ons",
    badge: "BOOST",
    image: "/Images/Add ons/(Add-ons) Espresso Shot.webp",
  },
  {
    id: "addon-coffee-jelly",
    name: "Coffee Jelly",
    description:
      "Chewy, lightly sweet coffee jelly cubes to perk up any iced drink.",
    price: 20,
    category: "add-ons",
    badge: "CLASSIC",
    image: "/Images/Add ons/(Add-ons) Coffee Jelly.webp",
  },
  {
    id: "addon-choco-chips",
    name: "Choco Chips",
    description:
      "Crunchy dark chocolate chips for extra texture and chocolate flavor.",
    price: 25,
    category: "add-ons",
    badge: "TOPPING",
    image: "/Images/Add ons/(Add-ons) Choco Chips.webp",
  },
  {
    id: "addon-signature-chips",
    name: "Signature Chips",
    description:
      "Local Brew special roasted crunchy bits for blended or iced drinks.",
    price: 25,
    category: "add-ons",
    badge: "TOPPING",
    image: "/Images/Add ons/(Add-ons) Signature Chips.webp",
  },
];

export const storeInfo = {
  name: "Local Brew",
  tagline: "Handcrafted Coffee & Comfort Food, Locally Sourced.",
  address: "Alapan 1-A, Imus, 4104 Cavite",
  shortAddress: "Imus, 4104 Cavite",
  phone: "+63 931 174 0479",
  email: "hello@lokalbrews.ph",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Local+Brew+Main+Alapan+1-A+Imus+Cavite",
  googleMapsPlace: "Alapan 1-A, Imus, Cavite",
  hours: {
    badge: "Open Daily • Closes at 3:00 AM",
    weekday: "7:00 AM – 10:00 PM",
    weekend: "8:00 AM – 11:00 PM",
  },
  social: {
    facebook: "https://facebook.com/lokalbrewsbinan",
    instagram: "https://instagram.com/lokalbrewsbinan",
    tiktok: "https://tiktok.com/@lokalbrewsbinan",
  },
};