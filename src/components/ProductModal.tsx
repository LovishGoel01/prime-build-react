
import { X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  specifications: string[];
  dimensions?: string;
  materials?: string;
  useCases?: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-4 flex justify-between items-center">
          <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white">
            {product.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>

              <div>
                <h3 className="font-poppins text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
              </div>

              {product.dimensions && (
                <div>
                  <h3 className="font-poppins text-lg font-semibold mb-2">Dimensions</h3>
                  <p className="text-gray-600 dark:text-gray-300">{product.dimensions}</p>
                </div>
              )}

              {product.materials && (
                <div>
                  <h3 className="font-poppins text-lg font-semibold mb-2">Materials</h3>
                  <p className="text-gray-600 dark:text-gray-300">{product.materials}</p>
                </div>
              )}

              <div>
                <h3 className="font-poppins text-lg font-semibold mb-2">Specifications</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {product.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>

              {product.useCases && (
                <div>
                  <h3 className="font-poppins text-lg font-semibold mb-2">Use Cases</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {product.useCases.map((useCase, index) => (
                      <li key={index}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
