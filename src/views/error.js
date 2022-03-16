import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  let navigate = useNavigate();
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Retourner sur la page d’accueil
      </button>
    </div>
  );
}
