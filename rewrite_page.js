const fs = require('fs');
const path = '/Users/macbookair/Desktop/JEVXO/JEXVO-APP/jevxo-frontend-new/app/admin/package/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add import
content = content.replace(
  "import { packageApi } from '../../../api/packageApi';",
  "import { packageApi } from '../../../api/packageApi';\nimport { packageCategoryApi } from '../../../api/packageCategoryApi';"
);

// 2. Add states and update form data
content = content.replace(
  "const [packages, setPackages] = useState<any[]>([]);",
  "const [packages, setPackages] = useState<any[]>([]);\n  const [categories, setCategories] = useState<any[]>([]);\n  const [featureInput, setFeatureInput] = useState('');"
);

content = content.replace(
  "features: '', // We will split this string into an array by commas",
  "features: [] as string[],\n    category: '',"
);

// 3. Update useEffect
content = content.replace(
  "useEffect(() => {\n    fetchPackages();\n  }, []);",
  "useEffect(() => {\n    fetchPackages();\n    fetchCategories();\n  }, []);"
);

// 4. Add fetchCategories
content = content.replace(
  "const fetchPackages = async () => {",
  "const fetchCategories = async () => {\n    try {\n      const res = await packageCategoryApi.getAll();\n      if (res && res.data) {\n        setCategories(res.data);\n      }\n    } catch (error) {\n      console.error('Failed to fetch categories:', error);\n    }\n  };\n\n  const fetchPackages = async () => {"
);

// 5. Update handleChange
content = content.replace(
  "const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {",
  "const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {"
);

// 6. Add addFeature / removeFeature
content = content.replace(
  "const handleSubmit = async (e: React.FormEvent) => {",
  "const addFeature = () => {\n    if (featureInput.trim()) {\n      setFormData((prev) => ({ ...prev, features: [...prev.features, featureInput.trim()] }));\n      setFeatureInput('');\n    }\n  };\n\n  const removeFeature = (index: number) => {\n    setFormData((prev) => ({ ...prev, features: prev.features.filter((_, i) => i !== index) }));\n  };\n\n  const handleSubmit = async (e: React.FormEvent) => {"
);

// 7. Update handleSubmit
content = content.replace(
  "      // Split features by comma and trim whitespace\n      const featureArray = formData.features.split(',').map(f => f.trim()).filter(f => f.length > 0);\n\n      const submitData = {\n        ...formData,\n        features: featureArray\n      };",
  "      const submitData: any = {\n        ...formData\n      };\n\n      if (submitData.category) {\n        submitData.category = { id: submitData.category };\n      } else {\n        delete submitData.category;\n      }"
);

// 8. Update handleOpenModal
content = content.replace(
  "features: (pkg.features || []).join(', '),",
  "features: pkg.features || [],\n        category: pkg.category?.id || '',"
);
content = content.replace(
  "features: '',\n        duration: '',\n        isActive: true,\n      });\n    }\n    setIsModalOpen(true);",
  "features: [],\n        duration: '',\n        isActive: true,\n        category: '',\n      });\n    }\n    setFeatureInput('');\n    setIsModalOpen(true);"
);

// 9. Update handleCloseModal
content = content.replace(
  "features: '',\n      duration: '',\n      isActive: true,\n    });",
  "features: [],\n      duration: '',\n      isActive: true,\n      category: '',\n    });\n    setFeatureInput('');"
);

// 10. Replace category and features UI
const oldFeaturesUI = `              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Features (Comma Separated)
                </label>
                <textarea
                  name="features"
                  required
                  value={formData.features}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white resize-none"
                  placeholder="Feature 1, Feature 2, Feature 3"
                />
              </div>`;

const newFeaturesUI = `              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Package Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                >
                  <option value="">Select a category (optional)</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Features
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={featureInput}
                    onChange={(e) => setFeatureInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addFeature();
                      }
                    }}
                    className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                    placeholder="Add a new feature..."
                  />
                  <button
                    type="button"
                    onClick={addFeature}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                
                {formData.features.length > 0 && (
                  <ul className="space-y-2 mt-3 max-h-40 overflow-y-auto pr-2">
                    {formData.features.map((feature, idx) => (
                      <li key={idx} className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded border border-gray-200 dark:border-gray-700">
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        <button
                          type="button"
                          onClick={() => removeFeature(idx)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>`;

content = content.replace(oldFeaturesUI, newFeaturesUI);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully rewrote page.tsx');
