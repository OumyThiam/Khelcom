import React from "react";
import { Link } from "react-router-dom";

const Accueil = ({ user }) => {
    return (
        <div className="container">
            <h2 className="text-center mb-4">Bienvenue sur l'application de gestion des clients et des commandes</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Liste des clients</h5>
                            <p className="card-text">Accédez à la liste complète des clients enregistrés dans l'application.</p>
                            <Link to="/clients" className="btn btn-primary">Voir les clients</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Ajouter un client</h5>
                            <p className="card-text">Ajoutez un nouveau client à la base de données.</p>
                            <Link to="/ajouter-client" className="btn btn-primary">Ajouter un client</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;
