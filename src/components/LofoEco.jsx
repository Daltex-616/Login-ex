import { Leaf } from "lucide-react";
export const LeafLogo = () => {
  return (
    <div className="mb-8">
      <div className="inline-block p-4 bg-white rounded-full shadow-md animate-leaf-bounce">
        <Leaf className="w-8 h-8 text-ecoblue" />
      </div>
    </div>
  );
};