import re

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Imports and state
if "import { useState" not in content:
    content = content.replace("import { motion } from 'motion/react';", "import { useState, useEffect } from 'react';\nimport { motion } from 'motion/react';")
if "Moon, Sun" not in content:
    content = content.replace("import { MapPin, Phone, Clock, Heart, ChefHat, ChevronRight } from 'lucide-react';", "import { MapPin, Phone, Clock, Heart, ChefHat, ChevronRight, Moon, Sun } from 'lucide-react';")

# State definition
if "const [isDark" not in content:
    content = content.replace("export default function App() {\n  return (\n    <div className=\"min-h-screen", """export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className=\"min-h-screen""")

# Navbar toggle
if "<Sun className=" not in content:
    toggle_btn = """<button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-800 dark:text-gray-200"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href={WHATSAPP_LINK}"""
    content = content.replace("<a \n              href={WHATSAPP_LINK}\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n              className=\"bg-[#25D366]", toggle_btn.replace("<a \n", "<a \n") + "\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n              className=\"bg-[#25D366]")

# Bulk regex replacements
replacements = {
    r'"fixed inset-0 z-\[-1\] bg-\[#FAFAFA\]"': '"fixed inset-0 z-[-1] bg-[#FAFAFA] dark:bg-[#09090b] transition-colors duration-500"',
    r'(?<!dark:)text-gray-900': 'text-gray-900 dark:text-white',
    r'(?<!dark:)text-gray-800': 'text-gray-800 dark:text-gray-200',
    r'(?<!dark:)text-gray-700': 'text-gray-700 dark:text-gray-300',
    r'(?<!dark:)text-gray-600': 'text-gray-600 dark:text-gray-400',
    r'(?<!dark:)bg-white/([0-9]+)': r'bg-white/\1 dark:bg-white/5',
    r'(?<!dark:)bg-white(?!/)': 'bg-white dark:bg-zinc-950',
    r'(?<!dark:)bg-black/5': 'bg-black/5 dark:bg-white/5',
    r'(?<!dark:)border-white/([0-9]+)': r'border-white/\1 dark:border-white/10',
    r'(?<!dark:)border-white(?!/)': 'border-white dark:border-zinc-800',
    r'(?<!dark:)bg-gray-200/50': 'bg-gray-200/50 dark:bg-white/10',
    r'(?<!dark:)bg-gray-100(?!/)': 'bg-gray-100 dark:bg-zinc-900',
    r'(?<!dark:)shadow-black/5': 'shadow-black/5 dark:shadow-black/30'
}

for pattern, repl in replacements.items():
    content = re.sub(pattern, repl, content)

with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Replacement complete.")
