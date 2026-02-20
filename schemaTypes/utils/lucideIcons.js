import {
  Sofa,
  Armchair,
  ShoppingBag,
  BookOpen,
  Star,
  Sparkles,
  Tag,
  Home,
  Layers,
  Grid,
  LayoutGrid,
  Package,
  Heart,
  Search,
  ChevronDown,
} from "lucide-react"

const icons = [
  { name: "Sofa", component: Sofa },
  { name: "Armchair", component: Armchair },
  { name: "ShoppingBag", component: ShoppingBag },
  { name: "BookOpen", component: BookOpen },
  { name: "Star", component: Star },
  { name: "Sparkles", component: Sparkles },
  { name: "Tag", component: Tag },
  { name: "Home", component: Home },
  { name: "Layers", component: Layers },
  { name: "Grid", component: Grid },
  { name: "LayoutGrid", component: LayoutGrid },
  { name: "Package", component: Package },
  { name: "Heart", component: Heart },
  { name: "Search", component: Search },
  { name: "ChevronDown", component: ChevronDown },
]

export const lucideIconOptions = icons.map((icon) => ({
  title: icon.name,
  value: icon.name,
  icon: icon.component,
}))