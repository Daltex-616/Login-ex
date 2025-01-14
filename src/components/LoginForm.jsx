import { useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { LeafLogo } from "./LofoEco";
export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { username, password });
  };
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <LeafLogo />
      <h1 className="mb-6 text-2xl font-bold text-ecotext">EcoAlertas</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm font-medium text-ecotext text-left">
            Nombre de Usuario
          </label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Usuario1"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-ecotext text-left">
            Contraseña
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="flex justify-between text-sm">
          <a href="#" className="text-ecoblue hover:underline">
            Olvidé mi contraseña
          </a>
          <a href="#" className="text-ecoblue hover:underline">
            Nuevo usuario
          </a>
        </div>
        <Button
          type="submit"
          className="w-full bg-ecoblue hover:bg-ecoblue-light transition-colors"
        >
          Ingresar
        </Button>
      </form>
    </div>
  );
};